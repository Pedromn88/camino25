
"use client";

import { useEffect } from "react";
import { Grid } from "@mui/material";
import ButtonMenuCustom from "../Component/Custom/ButtonMenuCustom";
import getConfig from "../Component/getConfig";
import PostTravel from "../Component/getStages";

const Principal = () => {

  const handleInitial = async () => {
    await PostTravel()
    const res = await getConfig();
    sessionStorage.setItem("map", res.map?.toString() ?? "false");
    sessionStorage.setItem("security", res.security?.toString() ?? "false");
    sessionStorage.setItem("total", res.total?.toString() ?? "0");
  };

  useEffect(() => {
    handleInitial();
  }, []);

  return (
    <Grid container className="container-menu-principal-options">
      <Grid size={{ xs: 12 }}>
        <img src="/oCamino.svg" alt="Logo 2026" className="principal-logo-2026" />
        <ButtonMenuCustom
          tab="octo"
          alt="Zoidberg button"
          link="/octoCounter"
          srcImage="/Zoidberg.webp"
          message="Pulpómetro"
          submessage="Nivel de pulpo ingerido"
          sizes="15vw"
        />
        <ButtonMenuCustom
          tab="beer"
          alt="burneySimpons button"
          link="/beerCounter"
          srcImage="/barney.webp"
          message="Estrellómetro"
          submessage="Nivel hidratación de cebada"
          sizes="15vw"
        />
        <ButtonMenuCustom
          tab="love"
          alt="Options button"
          link="/loveCounter"
          srcImage="/juan-ymedio.png"
          message="Mencantómetro"
          submessage="Nivel de mencantas"
          sizes="15vw"
        />
      </Grid>
    </Grid>
  );
};

export default Principal;
