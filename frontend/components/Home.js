import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { logUser, logoutUser } from "../reducers/users";

import Tweet from "./Tweet";
import Tags from "./Tags";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.main}>
      <div className={styles.div_left}>
        <div className={styles.div_left_top}>
          <img
            className={styles.logo}
            src="logo_twitter.png"
            alt="logo twitter"
          />
        </div>
        <div className={styles.div_left_bottom}>
          <div className={styles.logo_bottom_left}>
            <img
              className={styles.logo_bottom}
              src="logo_twitter.png"
              alt="logo twitter"
            />
          </div>
          <div className={styles.user_bottom_left}>
            <p className={styles.user_firstname}>Firstname</p>
            <p className={styles.user_id}>Username</p>
            <div>
              <button
                className={styles.logout_button}
                onClick={() => handleLogout()}
              >
                <Link href="/">Logout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div_center}>
        <div className={styles.header}>
          <h3 className={styles.h3}>Home</h3>
          <div className={styles.div_input_tweet}>
            <input
              className={styles.input_whatsup}
              placeholder="What's up"
            ></input>
            <div></div>
            <div className={styles.nbr_and_btn_tweet}>
              <div className={styles.tweet_nbr}>
                <p>
                  <span>0</span>/280
                </p>
              </div>
              <div className={styles.tweet_btn}>
                <p>Tweet</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tweet_container}>
          <Tweet />
        </div>
      </div>
      <div className={styles.div_right}>
        <h3 className={styles.h3}>Trends</h3>
        <div className={styles.tags_container}>
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default Home;
