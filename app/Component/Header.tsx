import React from "react";
import Link from "next/link";
import LoadingIcon from "./svg/LoadingIcon";
import "./styledComponent.scss";
import IconConfiguration from "./svg/iconConfiguration";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link href="/options">
          <IconConfiguration />
        </Link>
      </div>
      <div>
        <Link href="/">
          <LoadingIcon width="75" height="75" />{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
