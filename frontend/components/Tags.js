import styles from "../styles/Tags.module.css";

function Tags() {
  return (
    <div className={styles.tags}>
      <h2 className={styles.h2}>#LOL</h2>
      <p className={styles.nbr_tweet}>1 Tweet</p>
    </div>
  );
}

export default Tags;
