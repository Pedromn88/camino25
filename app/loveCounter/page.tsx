"use client";

import { useEffect, useRef, useState } from "react";
import getCount from "../Component/getFire";
import incrementCount from "../Component/postFire";
import deleteCount from "../Component/deleteFire";
import { Grid } from "@mui/material";
import ButtonCustom from "../Component/Custom/ButtonCustom";
import CountCustom from "../Component/Custom/CountCustom";
import LoadingCustom from "../Component/Custom/LoadingCustom";
import LoveIcon from "../Component/svg/LoveIcon";
import { useGeolocation } from "../Component/Custom/hooks/useGeoLocation";
import dynamic from "next/dynamic";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

const MapLeaflet = dynamic(() => import("../Component/map/map"), {
  ssr: false,
});

interface LoveResponse {
  count?: number;
  limits?: number;
  geoLocation?: { latitude: number; longitude: number; idCount?: number }[];
}

const LoveCounter = () => {
  const firstLoad = useRef(true);
  const [love, setLove] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(0);
  const [position, setPosition] = useState<[number, number][]>([[51.505, -0.09]]);
  const { getLocation } = useGeolocation();
  const positionLength = position.length;
  const docRef = doc(db, "counter", "love");

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as LoveResponse;

        setLove(data.count ?? 0);
        setLimit(data.limits ?? 0);

        const coords =
          data.geoLocation?.map(
            (g) => [g.latitude, g.longitude] as [number, number]
          ) ?? [];

        setPosition(coords.length ? coords : [[51.505, -0.09]]);
      } else {
        setLove(0);
        setLimit(0);
        setPosition([[51.505, -0.09]]);
      }

      setLoading(false);
      firstLoad.current = false;
    });


    return () => unsubscribe();
  }, []);

  const handleIncre = async (id: string) => {
    setLoading(true)
    const coords = await getLocation();

    if (!coords) {
      alert("No se pudo obtener tu ubicación 😢");
      return;
    }
    await incrementCount(id, "count", limit, {
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    setLoading(false)
  };
  const handleDelete = async (id: string) => {
    await deleteCount(id);
  };


  const fillHeightLove = (love / limit) * 1000;

  return (
    <div className="flex-center flex-column pb-3">
      {loading && firstLoad.current && (
        <LoadingCustom message="Cargando pulpómetro" loading={loading} />
      )}
      {!firstLoad.current && (
        <Grid container className="w-100">
          <Grid size={12} className="flex-between-column">
            <CountCustom count={love} type="love" loading={loading} />
            <div className="flex-center constainer-icon-count love-bg-color mb-3"  >

              <LoveIcon
                width="350"
                height="350"
                fillHeight={fillHeightLove}
                fillOpacity="0.3"
              />
            </div>
            <ButtonCustom
              disabled={loading}
              className="octo-button"
              background="#962a60ff"
              onClick={() => handleIncre("love")}
              icon={
                <LoveIcon
                  width="25"
                  height="25"
                  fillHeight={0}
                  fillOpacity="1"
                  fill="#fff"
                  stroke="#fff"
                />
              }
              message="Me encanta"
            />

            <ButtonCustom
              disabled={loading}
              background="#96667eff"
              className="octo-button mt-3 mb-3 flex-beetween"
              onClick={() => handleDelete("love")}
              icon={
                <LoveIcon
                  width="25"
                  height="25"
                  fillHeight={0}
                  fillOpacity="1"
                  fill="#fff"
                  stroke="#fff"
                />
              }
              message="Ya no me gusta tanto"
            />
          </Grid>
        </Grid>
      )}
      {!firstLoad.current &&
        <MapLeaflet position={position} type="love" width="100%" center={positionLength ? position[positionLength - 1] : [51.505, -0.09]} />
      }
    </div>
  );
};

export default LoveCounter;
