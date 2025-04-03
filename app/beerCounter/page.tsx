"use client";

import { useEffect, useState } from "react";
import getCount from "../Component/getFire";
import incrementCount from "../Component/postFire";
import deleteCount from "../Component/deleteFire";
import BeerIcon from "../Component/svg/BeerIcon";
import { Grid } from "@mui/material";
import ButtonCustom from "../Component/Custom/ButtonCustom";
import CountCustom from "../Component/Custom/CountCustom";
import LoadingCustom from "../Component/Custom/LoadingCustom";

interface BeerResponse {
  count?: number;
  limits?: number;
}

const Principal = () => {
  const [beer, setBeer] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(0);

  const handleCountBeer = async (): Promise<BeerResponse | null> => {
    try {
      const aux: { count?: number; limits?: number } = await getCount("beer");

      return {
        count: aux.count ?? 0,
        limits: aux.limits ?? 0,
      };
    } catch {
      return null;
    }
  };

  const handleinitial = async () => {
    setLoading(true);
    const res: BeerResponse | null = await handleCountBeer();
    if (res) {
      setBeer(res?.count ?? 0);
      setLimit(res?.limits ?? 0);
    }
    setLoading(false);
  };

  const handleIncre = async (id: string) => {
    await incrementCount(id, "count", limit);
    const resp: BeerResponse | null = await handleCountBeer();
    if (resp) {
      setBeer(resp?.count ?? 0);
    }
  };

  const handleDelete = async (id: string) => {
    await deleteCount(id);
    const resp: BeerResponse | null = await handleCountBeer();
    if (resp) {
      setBeer(resp.count ?? 0);
    }
  };

  const fillHeightBeer = (beer / limit) * 1000;

  useEffect(() => {
    handleinitial();
  }, []);

  return (
    <div className="flex-center">
      {loading && (
        <LoadingCustom message="Cargando estrellómetro" loading={true} />
      )}
      {!loading && (
        <Grid container>
          <Grid size={12} className="flex-center-content">
            <CountCustom count={beer} type="beer" />
            <BeerIcon
              width="500"
              height="500"
              fill="#9f5d12"
              fillHeight={fillHeightBeer}
              fillOpacity="0.3"
              stroke="#333"
            />
            <ButtonCustom
              className="beer-button mt-3"
              background="#9f5d12"
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
              message="Estrella Pa Dentro"
            />

            <ButtonCustom
              className="beer-button mt-3 mb-3 flex-reverse"
              background="#9f5d12"
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
    </div>
  );
};

export default Principal;
