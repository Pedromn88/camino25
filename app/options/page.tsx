"use client";

import { useEffect, useState } from "react";
import getCount from "../Component/getFire";
import React from "react";
import ButtonCustom from "../Component/Custom/ButtonCustom";
import { Grid, TextField } from "@mui/material";
import incrementCount from "../Component/postFire";
import LoadingCustom from "../Component/Custom/LoadingCustom";

const Principal = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [octoLimit, setOctoLimit] = useState<number>(0);
  const [beerLimit, setBeerLimit] = useState<number>(0);
  const [loveLimit, setLoveLimit] = useState<number>(0);

  console.log(loveLimit);

  ///////Octo
  const handleCountOcto = async () => {
    try {
      const aux: { count?: number; limits?: number } = await getCount(
        "octopus"
      );
      return {
        count: aux.count ?? 0,
        limits: aux.limits ?? 0,
      };
    } catch {
      return null;
    }
  };

  const handleInitialOcto = async () => {
    setLoading(true);
    const res = await handleCountOcto();
    setOctoLimit(res?.limits ?? 0);
    setLoading(false);
  };

  const newLimitOcto = async (id: string) => {
    setLoading(true);
    await incrementCount(id, "limits", octoLimit);
    setLoading(false);
  };

  const handleCountBeer = async () => {
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

  const handleinitialBeer = async () => {
    setLoading(true);
    const res = await handleCountBeer();
    if (res) {
      setBeerLimit(res?.limits ?? 0);
    }
    setLoading(false);
  };

  const newLimitBeer = async (id: string) => {
    setLoading(true);
    await incrementCount(id, "limits", beerLimit);
    setLoading(false);
  };

  const handleCountLove = async () => {
    try {
      const aux: { count?: number; limits?: number } = await getCount("love");
      return {
        count: aux.count ?? 0,
        limits: aux.limits ?? 0,
      };
    } catch {
      return null;
    }
  };

  const handleinitialLove = async () => {
    setLoading(true);
    const res = await handleCountLove();
    if (res) {
      setLoveLimit(res?.limits ?? 0);
    }
    setLoading(false);
  };

  const newLimitLove = async (id: string) => {
    setLoading(true);
    await incrementCount(id, "limits", loveLimit);
    setLoading(false);
  };

  useEffect(() => {
    handleInitialOcto();
    handleinitialBeer();
    handleinitialLove();
  }, []);

  return (
    <Grid container className="container-button-options">
      {loading && <LoadingCustom message={"Cargando"} loading={loading} />}
      {!loading && (
        <>
          <Grid size={12} className="flex-center mt-3">
            <TextField
              className="textfield-options"
              id="outlined-required"
              label="Límite"
              value={octoLimit}
              onChange={(e) => setOctoLimit(Number(e.target.value))}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
            <ButtonCustom
              icon={null}
              className="octo-button"
              background="#a852df"
              onClick={() => newLimitOcto("octopus")}
              message="Guardar"
            />
          </Grid>
          <Grid size={12} className="flex-center mt-3">
            <TextField
              className="textfield-options"
              id="outlined-required"
              label="Límite"
              value={beerLimit}
              onChange={(e) => setBeerLimit(Number(e.target.value))}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
            <ButtonCustom
              icon={null}
              className="octo-button "
              background="#9f5d12"
              onClick={() => newLimitBeer("beer")}
              message="Guardar"
            />
          </Grid>
          <Grid size={12} className="flex-center mt-3">
            <TextField
              className="textfield-options"
              id="outlined-required"
              label="Límite"
              value={loveLimit}
              onChange={(e) => setLoveLimit(Number(e.target.value))}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
            <ButtonCustom
              icon={null}
              className="octo-button "
              background="#dd0873"
              onClick={() => newLimitLove("love")}
              message="Guardar"
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Principal;
