import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./styledCustom.scss";

interface ButtonMenuProps {
  srcImage: string;
  message: string;
  link: string;
  alt: string;
  sizes: string;
}

const ButtonMenuCustom: React.FC<ButtonMenuProps> = ({
  srcImage,
  message,
  link = "/",
  alt,
  sizes,
}) => {
  return (
    <Grid size={12}>
      <Link href={link} className="card-menu-principal-options">
        <Image
          sizes={sizes ?? "10vw"}
          width={0}
          height={0}
          alt={alt}
          src={srcImage}
          style={{
            width: "auto",
            height: "150px",
            marginBottom: "5px",
            objectFit: "contain",
          }}
        ></Image>
        <h2 className="card-link-message">{message}</h2>
      </Link>
    </Grid>
  );
};

export default ButtonMenuCustom;
