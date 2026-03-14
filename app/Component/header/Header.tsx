import React from "react";
import Link from "next/link";
import LoadingIcon from "../svg/LoadingIcon";
import "./styledComponent.scss";
import IconConfiguration from "../svg/iconConfiguration";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link href="/options">
          <IconConfiguration width="25" height="25" />
        </Link>
      </div>
      <div>
        <Link href="/" className="flex-center-column">
          <p className="title-header">O CAMIÑO</p>
          <small className="subtitle-header">2026</small>
        </Link>
      </div>
      <div>
        <Link href="/">
          <LoadingIcon width="50" height="50" />{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
