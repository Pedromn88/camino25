import Image from "next/image";
import styles from "../../page.module.css";

const FooterCustom = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/santiago.png"
        sizes={"200vw"}
        alt="camino Apretao 25"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </footer>
  );
};

export default FooterCustom;
