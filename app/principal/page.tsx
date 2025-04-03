"use client";
import { Grid } from "@mui/material";
import ButtonMenuCustom from "../Component/Custom/ButtonMenuCustom";

const Principal = () => {
  return (
    <Grid container className="container-menu-principal-options">
      <ButtonMenuCustom
        alt="Zoidberg button"
        link="/octoCounter"
        srcImage="/Zoidberg.webp"
        message="Pulpómetro"
        sizes="10vw"
      />
      <ButtonMenuCustom
        alt="burneySimpons button"
        link="/beerCounter"
        srcImage="/barney.webp"
        message="Estrellómetro"
        sizes="15vw"
      />
      <ButtonMenuCustom
        alt="Options button"
        link="/loveCounter"
        srcImage="/juan-ymedio.png"
        message="Encantómetro"
        sizes="15vw"
      />
    </Grid>
  );
};

export default Principal;
