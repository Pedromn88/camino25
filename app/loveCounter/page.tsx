"use client";

import { useEffect, useState } from "react";
import getCount from "../Component/getFire";
import incrementCount from "../Component/postFire";
import deleteCount from "../Component/deleteFire";
import { Grid } from "@mui/material";
import ButtonCustom from "../Component/Custom/ButtonCustom";
import CountCustom from "../Component/Custom/CountCustom";
import LoadingCustom from "../Component/Custom/LoadingCustom";
import LoveIcon from "../Component/svg/LoveIcon";

const LoveCounter = () => {
  const [love, setLove] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(0);

  const handleCountLove = async () => {
    try {
      const aux: { count?: number; limits?: number } = await getCount("love");
      return aux;
    } catch {
      return null;
    }
  };

  const handleInitial = async () => {
    setLoading(true);
    const res = await handleCountLove();
    console.log(res);
    setLove(res?.count);
    setLimit(res?.limits);
    setLoading(false);
  };

  const fillHeightLove = (love / limit) * 1000;

  const handleIncre = async (id: string) => {
    await incrementCount(id, "count", null);
    const resp = await handleCountLove();
    setLove(resp?.count);
  };

  const handleDelete = async (id: string) => {
    await deleteCount(id);
    const resp = await handleCountLove();
    if (resp?.count) {
      setLove(resp?.count);
    }
  };

  useEffect(() => {
    handleInitial();
  }, []);

  return (
    <div>
      <div className="flex-between-column">
        <Grid container>
          {loading && (
            <LoadingCustom message="Cargando pulpómetro" loading={loading} />
          )}
          {!loading && (
            <Grid size={12} className="flex-between-column">
              <CountCustom count={love} type="love" />
              <LoveIcon
                width="350"
                height="350"
                fillHeight={fillHeightLove}
                fillOpacity="0.3"
              />

              <ButtonCustom
                className="octo-button"
                background="#dd0873"
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
                background="#dd0873"
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
          )}
        </Grid>
      </div>
    </div>
  );
};

export default LoveCounter;
