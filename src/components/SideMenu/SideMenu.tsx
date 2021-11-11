import styles from "./SideMenu.module.scss";

const SideMenu = () => {
  return <div className={styles.root}>
      <ul>
          <li className={styles.Item}>Item</li>
          <li className={styles.Item}>Item</li>
          <li className={styles.Item}>Item</li>
          <li className={styles.Item}>Item</li>
          <li className={styles.Item}>Item</li>
          <li className={styles.Item}>Item</li>
      </ul>
  </div>;
};

export default SideMenu;
