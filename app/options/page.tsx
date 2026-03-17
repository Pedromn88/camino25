"use client";

import ButtonCustom from "../Component/Custom/ButtonCustom";
import { Grid, TextField } from "@mui/material";
import LoadingCustom from "../Component/Custom/LoadingCustom";
import OctopusIcon from "../Component/svg/OctopusIcon";
import BeerIcon from "../Component/svg/BeerIcon";
import LoveIcon from "../Component/svg/LoveIcon";
import IconWarning from "../Component/svg/WarningIcon";
import Link from "next/link";
import { useInitial } from "../Component/Custom/hooks/useInitial";

const Principal = () => {
  const {
    loading: loadingOcto,
    count: octoCount,
    limit: octoLimit,
    setLimit: setOctoLimit,
    saveLimit: newLimitOcto,
  } = useInitial("octopus");

  const {
    loading: loadingBeer,
    count: beerCount,
    limit: beerLimit,
    setLimit: setBeerLimit,
    saveLimit: newLimitBeer,
  } = useInitial("beer");

  const {
    loading: loadingLove,
    count: loveCount,
    limit: loveLimit,
    setLimit: setLoveLimit,
    saveLimit: newLimitLove,
  } = useInitial("love");

  const loading = loadingOcto || loadingBeer || loadingLove;

  console.log("🚀 ~ Principal ~ beerCount >= beerLimit:", beerCount, beerLimit)
  return (
    <Grid container className="container-button-options">
      {loading && <LoadingCustom message={"Cargando"} loading={loading} />}
      {!loading && (
        <>
          <Grid size={12} className="flex-center mt-3">
            <span className="icon-options flex">
              <span className="flex-beetween mb-3">
                <div className={`avatar  octo-bg-color `}>
                  <OctopusIcon
                    width="25"
                    height="25"
                    fillHeight={0}
                    fillOpacity="1"
                  />
                </div>
                {octoCount >= octoLimit * 0.9 && (
                  <IconWarning width="35" height="35" />
                )}
                <h3 className="octo-letter">Límite Pulpometro</h3>
              </span>
              <span className="w-100 flex-column">
                <TextField
                  fullWidth
                  disabled={octoLimit === octoCount && octoLimit !== 0}
                  className="textfield-options mb-3"
                  id="outlined-required"
                  label="Máx Pulpo"
                  value={octoLimit}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setOctoLimit(value === "" ? 0 : Number(value));
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
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
                  className="octo-button custom-buttom-options"
                  background="#3c607d"
                  onClick={newLimitOcto}
                  message="Guardar"
                />
              </span>
            </span>
          </Grid>
          <Grid size={12} className="flex-center mt-3">
            <span className="icon-options flex">
              <span className="flex-beetween mb-3">
                <div className="avatar  beer-bg-color" >
                  <BeerIcon width="75" height="75" fillHeight={0} fillOpacity="1" />

                </div>
                {beerCount >= beerLimit * 0.9 && (
                  <IconWarning width="35" height="35" />
                )}
                <h3 className="beer-letter">Límite Birra </h3>
              </span>
              <span className="w-100 flex-column">
                <TextField
                  fullWidth
                  className="textfield-options mb-3"
                  id="outlined-required"
                  label="Máx Birra"
                  value={beerLimit}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setBeerLimit(value === "" ? 0 : Number(value));
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
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
                  className="octo-button custom-buttom-options "
                  background="#9f5d12"
                  onClick={newLimitBeer}
                  message="Guardar"
                />
              </span>
            </span>
          </Grid>
          <Grid size={12} className="flex-center mt-3">
            <span className="icon-options flex">
              <span className="flex-beetween mb-3">
                <div className="avatar  love-bg-color" >
                  <LoveIcon width="75" height="75" fillHeight={0} fillOpacity="1" />
                </div>
                {loveCount >= loveLimit * 0.9 && (
                  <IconWarning width="35" height="35" />
                )}
                <h3 className="love-letter">Límite Mencantas </h3>
              </span>

              <span className="w-100 flex-column">
                <TextField
                  fullWidth
                  className="textfield-options"
                  id="outlined-required mb-3"
                  label="Máx Loved"
                  value={loveLimit}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setLoveLimit(value === "" ? 0 : Number(value));
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
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
                  className="octo-button custom-buttom-options"
                  background="#dd0873"
                  onClick={newLimitLove}
                  message="Guardar"
                />
              </span>
            </span>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Principal;

