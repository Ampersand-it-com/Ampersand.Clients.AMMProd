import styles from "./PageConainer.module.scss";

function PageConainer({ children }) {
  return <div className={styles.root}>{children}</div>;
}

export default PageConainer;
