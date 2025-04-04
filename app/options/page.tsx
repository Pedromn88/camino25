"use client";

import { useEffect, useState } from "react";
import getCount from "../Component/getFire";
import React from "react";
import ButtonCustom from "../Component/Custom/ButtonCustom";
import { Grid, TextField } from "@mui/material";
import incrementCount from "../Component/postFire";
import LoadingCustom from "../Component/Custom/LoadingCustom";
import OctopusIcon from "../Component/svg/OctopusIcon";
import BeerIcon from "../Component/svg/BeerIcon";
import LoveIcon from "../Component/svg/LoveIcon";
import IconWarning from "../Component/svg/WarningIcon";
import Link from "next/link";

const Principal = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [octoCount, setOctoCount] = useState<number>(0);
  const [octoLimit, setOctoLimit] = useState<number>(0);
  const [beerCount, setBeerCount] = useState<number>(0);
  const [beerLimit, setBeerLimit] = useState<number>(0);
  const [loveCount, setLoveCount] = useState<number>(0);
  const [loveLimit, setLoveLimit] = useState<number>(0);

  ///////OCTO
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
    setOctoCount(res?.count ?? 0);
    setLoading(false);
  };

  const newLimitOcto = async (id: string) => {
    setLoading(true);
    await incrementCount(id, "limits", octoLimit);
    setLoading(false);
  };

  //////////BEER
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
      setBeerCount(res.count ?? 0);
    }
    setLoading(false);
  };

  const newLimitBeer = async (id: string) => {
    setLoading(true);
    await incrementCount(id, "limits", beerLimit);
    setLoading(false);
  };

  ////////////LOVE
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
      setLoveCount(res?.count ?? 0);
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
          <span className="icon-options flex-between">
            <Link href="/octoCounter">
              <OctopusIcon
                width="75"
                height="75"
                fillHeight={0}
                fillOpacity="1"
              />
            </Link>
            {octoCount >= octoLimit * 0.9 && (
              <IconWarning width="35" height="35" />
            )}
          </span>
          <Grid size={12} className="flex-center mt-3">
            <TextField
              disabled={octoLimit === octoCount}
              className="textfield-options"
              id="outlined-required"
              label="Máx Pulpo"
              value={octoLimit}
              onChange={(e) => setOctoLimit(Number(e.target.value))}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "2px solid #3c607d",
                  },
                  "&:hover fieldset": {
                    border: "3px solid #3c607d",
                  },
                  "&.Mui-focused fieldset": {
                    border: "3px solid #3c607d",
                  },
                },
                "& label": {
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#3c607d",
                },
              }}
            />
            <ButtonCustom
              icon={null}
              className="octo-button"
              background="#3c607d"
              onClick={() => newLimitOcto("octopus")}
              message="Guardar"
            />
          </Grid>
          <span className="icon-options flex-beetween  flex-reverse mt-3">
            <Link href="/beerCounter">
              <BeerIcon width="75" height="75" fillHeight={0} fillOpacity="1" />
            </Link>
            {beerCount >= beerLimit * 0.9 && (
              <IconWarning width="35" height="35" />
            )}
          </span>
          <Grid size={12} className="flex-center mt-3">
            <TextField
              className="textfield-options"
              id="outlined-required"
              label="Máx Birra"
              value={beerLimit}
              onChange={(e) => setBeerLimit(Number(e.target.value))}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "2px solid #9f5d12",
                  },
                  "&:hover fieldset": {
                    border: "3px solid #9f5d12",
                  },
                  "&.Mui-focused fieldset": {
                    border: "3px solid #9f5d12",
                  },
                },
                "& label": {
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#9f5d12",
                },
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
          <span className="icon-options mt-3 flex-beetween">
            <Link href="/loveCounter">
              <LoveIcon width="75" height="75" fillHeight={0} fillOpacity="1" />
            </Link>
            {loveCount >= loveLimit * 0.9 && (
              <IconWarning width="35" height="35" />
            )}
          </span>
          <Grid size={12} className="flex-center mt-3">
            <TextField
              className="textfield-options"
              id="outlined-required"
              label="Máx Loved"
              value={loveLimit}
              onChange={(e) => setLoveLimit(Number(e.target.value))}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "2px solid #dd0873",
                  },
                  "&:hover fieldset": {
                    border: "3px solid #dd0873",
                  },
                  "&.Mui-focused fieldset": {
                    border: "3px solid #dd0873",
                  },
                },
                "& label": {
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#dd0873",
                },
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
