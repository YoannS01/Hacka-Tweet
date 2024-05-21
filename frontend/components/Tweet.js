import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHeart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Tweet() {
  return (
    <div className={styles.tweet}>
      <div className={styles.tweet_infos}>
        <img
          className={styles.logo_user}
          src="profil-image.jpeg"
          alt="logo user"
        />
        <p className={styles.user_firstname}>Firstname</p>
        <p className={styles.user_id}>Username</p>
        <p className={styles.user_id}>5 hours</p>
      </div>
      <div className={styles.content}>Yoannnnnnneuuuuuuuuuuuuh </div>
      <div className={styles.icons_container}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
}

export default Tweet;
