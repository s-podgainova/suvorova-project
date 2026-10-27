import styles from "./LinesOverlay.module.css";

const LinesOverlay = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.inner}>
        <div className={styles.lines} />
      </div>
    </div>
  );
};

export default LinesOverlay;
