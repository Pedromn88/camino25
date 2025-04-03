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

const OctoCounter = () => {
  const [octa, setOcta] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(0);

  const handleCountOcto = async () => {
    try {
      const aux: { count?: number; limits?: number } = await getCount(
        "octopus"
      );
      return aux;
    } catch {
      return null;
    }
  };

  const handleInitial = async () => {
    setLoading(true);
    const res = await handleCountOcto();
    setOcta(res?.count);
    setLimit(res?.limits);
    setLoading(false);
  };

  const fillHeightOcto = (octa / limit) * 1000;

  const handleIncre = async (id: string) => {
    await incrementCount(id, "count", null);
    const resp = await handleCountOcto();
    setOcta(resp?.count);
  };

  const handleDelete = async (id: string) => {
    await deleteCount(id);
    const resp = await handleCountOcto();
    setOcta(resp?.count);
  };

  useEffect(() => {
    handleInitial();
  }, []);

  return (
    <div className="flex-between-column">
      <Grid container>
        {loading && (
          <LoadingCustom message="Cargando pulpómetro" loading={loading} />
        )}
        {!loading && (
          <Grid size={12} className="flex-between-column">
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
              className="octo-button"
              background="#3c607d"
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
              background="#3c607d"
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
        )}
      </Grid>
    </div>
  );
};

export default OctoCounter;
