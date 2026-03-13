import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./styledCustom.scss";

interface ButtonMenuProps {
  srcImage: string;
  message: string;
  submessage?: string;
  link: string;
  alt: string;
  sizes: string;
  tab: string;
}

const ButtonMenuCustom: React.FC<ButtonMenuProps> = ({
  srcImage,
  message,
  submessage,
  link = "/",
  alt,
  sizes,
  tab,
}) => {
  return (
    <Grid size={12}>
      <Link href={link} className={`card-menu-principal-options ${tab === "octo" ? "octo-color" : tab === "beer" ? "beer-color" : "love-color"}`}>
        <div className="avatar">
          <img
            sizes={sizes ?? "10vw"}
            width={0}
            height={0}
            alt={alt}
            src={srcImage}
            style={{
              width: "auto",
              height: "50px",
              marginBottom: "5px",
              objectFit: "contain",
            }}
          /></div>

        <div className="content">
          <h2 className="card-link-message">{message}</h2>
          <p className="card-link-submessage">{submessage}</p>
        </div>
        <div className="icon">
          <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </Link>
    </Grid>
  );
};

export default ButtonMenuCustom;
