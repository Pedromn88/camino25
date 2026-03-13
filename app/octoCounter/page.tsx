"use client";

import { useEffect, useState } from "react";
import getCount from "../Component/getFire";
import incrementCount from "../Component/postFire";
import deleteCount from "../Component/deleteFire";
import OctopusIcon from "../Component/svg/OctopusIcon";
import { Grid } from "@mui/material";
import ButtonCustom from "../Component/Custom/ButtonCustom";
import CountCustom from "../Component/Custom/CountCustom";
import LoadingCustom from "../Component/Custom/LoadingCustom";
import { useGeolocation } from "../Component/Custom/hooks/useGeoLocation";
import dynamic from "next/dynamic";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";


const MapLeaflet = dynamic(() => import("../Component/map/map"), {
  ssr: false,
});

interface octoResponse {
  count?: number;
  limits?: number;
  geoLocation?: { latitude: number; longitude: number; idCount?: number }[];
}


const OctoCounter = () => {
  const [octa, setOcta] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(0);
  const [position, setPosition] = useState<[number, number][]>([[51.505, -0.09]]);
  const { getLocation } = useGeolocation();
  const docRef = doc(db, "counter", "octopus");


  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as octoResponse;

        setOcta(data.count ?? 0);
        setLimit(data.limits ?? 0);

        const coords =
          data.geoLocation?.map(
            (g) => [g.latitude, g.longitude] as [number, number]
          ) ?? [];

        setPosition(coords.length ? coords : [[51.505, -0.09]]);
      } else {
        setOcta(0);
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

  const fillHeightOcto = ((limit - octa) / limit) * 284.5;

  return (
    <div className="flex-center flex-column pb-3">
      {loading && (
        <LoadingCustom message="Cargando pulpómetro" loading={loading} />
      )}
      {!loading && (
        <Grid container className="w-100">
          <Grid size={12} className="flex-center-content w-100">
            <CountCustom count={octa} type="octo" />
            <OctopusIcon
              width="350"
              height="350"
              fill="#3c607d"
              stroke="#333"
              fillHeight={fillHeightOcto}
              fillOpacity="0.3"
            />
            <ButtonCustom
              className=" mt-3"
              background="#1a476bff"
              onClick={() => handleIncre("octopus")}
              icon={
                <OctopusIcon
                  width="25"
                  height="25"
                  fillHeight={0}
                  fillOpacity="1"
                  fill="#fff"
                  stroke="#fff"
                />
              }
              message="+ Pulpo Pa Dentro"
            />

            <ButtonCustom
              background="#719abbff"
              className="octo-button mt-3 mb-3 flex-reverse"
              onClick={() => handleDelete("octopus")}
              icon={
                <OctopusIcon
                  width="25"
                  height="25"
                  fillHeight={0}
                  fillOpacity="1"
                  fill="#fff"
                  stroke="#fff"
                />
              }
              message="Ma liao - "
            />
          </Grid>
        </Grid>
      )}
      {!loading &&
        <MapLeaflet position={position} type="octo" />
      }
    </div>
  );
};

export default OctoCounter;



