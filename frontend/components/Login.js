import { useState } from "react";
import styles from "../styles/Login.module.css";
import ModalLogin from "./ModalLogin";

function Login() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSignUpClick = () => {
    setIsSignin(false);
    setIsOpen(true);
  };

  const handleSignInClick = () => {
    setIsSignin(true);
    setIsOpen(true);
  };

  return (
    <div className={styles.div_container}>
      <div className={styles.logo_left}>
        <img src="logo_twitter.png" alt="logo twitter" />
      </div>
      <div className={styles.div_right}>
        <img
          className={styles.logo_right}
          src="logo_twitter.png"
          alt="logo twitter"
        />
        <h1>
          See what's <br></br>happening
        </h1>
        <h2>Join Hackatweet today.</h2>
        <button
          className={styles.signup_button}
          onClick={() => handleSignUpClick()}
        >
          Sign up
        </button>
        <p>Already have an account ?</p>
        <button
          className={styles.signin_button}
          onClick={() => handleSignInClick()}
        >
          Sign in
        </button>
        <ModalLogin
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
          isSignin={isSignin}
        />
      </div>
    </div>
  );
}

export default Login;
