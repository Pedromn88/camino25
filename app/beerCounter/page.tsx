"use client";

import { useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../firebaseConfig";
import incrementCount from "../Component/postFire";
import deleteCount from "../Component/deleteFire";
import BeerIcon from "../Component/svg/BeerIcon";
import { Grid } from "@mui/material";
import ButtonCustom from "../Component/Custom/ButtonCustom";
import CountCustom from "../Component/Custom/CountCustom";
import LoadingCustom from "../Component/Custom/LoadingCustom";
import dynamic from "next/dynamic";
import { useGeolocation } from "../Component/Custom/hooks/useGeoLocation";

const MapLeaflet = dynamic(() => import("../Component/map/map"), {
  ssr: false,
});

interface BeerResponse {
  count?: number;
  limits?: number;
  geoLocation?: { latitude: number; longitude: number; idCount?: number }[];
}

const db = getFirestore(app);

const BeerCount = () => {
  const [beer, setBeer] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [position, setPosition] = useState<[number, number][]>([[51.505, -0.09]]);
  const { getLocation } = useGeolocation();

  const docRef = doc(db, "counter", "beer");

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as BeerResponse;

        setBeer(data.count ?? 0);
        setLimit(data.limits ?? 0);

        const coords =
          data.geoLocation?.map(
            (g) => [g.latitude, g.longitude] as [number, number]
          ) ?? [];

        setPosition(coords.length ? coords : [[51.505, -0.09]]);
      } else {
        setBeer(0);
        setLimit(0);
        setPosition([[51.505, -0.09]]);
      }

      setLoading(false);
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

  const fillHeightBeer = (beer / limit) * 1000;


  return (
    <div className="flex-center flex-column pb-3">
      {loading && (
        <LoadingCustom message="Cargando estrellómetro" loading={true} />
      )}

      {!loading && (
        <Grid container className="w-100">
          <Grid size={12} className="flex-center-content">
            <CountCustom count={beer} type="beer" />

            <div className={`flex-center constainer-icon-count beer-bg-color`}  >
              <BeerIcon
                width="350"
                height="350"
                fill="#9f5d12"
                fillHeight={fillHeightBeer}
                fillOpacity="0.3"
                stroke="#333"
              />
            </div>

            <ButtonCustom
              className="beer-button mt-3"
              background="#754c37ff"
              onClick={() => handleIncre("beer")}
              icon={
                <BeerIcon
                  width="25"
                  height="25"
                  fillHeight={0}
                  fillOpacity="1"
                  fill="#fff"
                  stroke="0"
                />
              }
              message="+Estrella Pa Dentro"
            />

            <ButtonCustom
              className="beer-button mt-3 mb-3 flex-reverse"
              background="#947761ff"
              onClick={() => handleDelete("beer")}
              icon={
                <BeerIcon
                  width="25"
                  height="25"
                  fillHeight={0}
                  fillOpacity="1"
                  fill="#fff"
                  stroke="0"
                />
              }
              message="Ma liao - "
            />
          </Grid>
        </Grid>
      )}

      {!loading &&
        <MapLeaflet position={position} type="beer" width="100%" />
      }
    </div>
  );
};

export default BeerCount;