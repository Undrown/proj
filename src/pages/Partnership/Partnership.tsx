import { useState } from "react";
import Refs from "./Refs/Refs";
import Reward from "./Reward/Reward";
import styles from "./Partnership.module.scss";

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
      <div className={styles.Heading}>
        Партнерская программа
        </div>
        <a
          className={styles.ButtonBase}
          onClick={() => {
            setActivePage(0);
          }}
        >
          Партнёрские вознаграждения
        </a>
        <a
          className={styles.ButtonBase}
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
