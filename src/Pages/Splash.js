import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "../styles/Splash.module.css";
import Logo from "../components/Logo";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`${styles["splash"]} ${styles["fadeOut"]}`}>
      <Icon icon="bxs:bowl-rice" className={styles["icon"]} />
      <Logo />
    </div>
  );
}

export default Splash;
