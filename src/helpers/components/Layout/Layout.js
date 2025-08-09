import styles from "./Layout.module.scss";

function Layout({ children }) {
  return <div className={styles.root}>{children}</div>;
}

export default Layout;
