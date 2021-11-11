import { useState } from "react";
import Refs from "./Refs/Refs";
import Reward from "./Reward/Reward";
import styles from "./Partnership.module.scss";
const classNames = require("classnames");

const Partnership = () => {
  const [activePage, setActivePage] = useState(1);

  const getContent = (activePage: number) => {
    switch (activePage) {
      case 0:
        return <Reward />;
      case 1:
        return <Refs />;
      default: {
        return "Unknown state";
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.Heading}>Партнерская программа</div>
      <a
        className={classNames({
          [styles["ButtonBase"]]: true,
          [styles["active"]]: activePage == 0,
        })}
        onClick={() => {
          setActivePage(0);
        }}
      >
        Партнёрские вознаграждения
      </a>
      <a
        className={classNames({
          [styles["ButtonBase"]]: true,
          [styles["active"]]: activePage == 1,
        })}
        onClick={() => {
          setActivePage(1);
        }}
      >
        Рефералы
      </a>
      <div className={styles.Content}>{getContent(activePage)}</div>
    </div>
  );
};

export default Partnership;
