import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Home: NextPage = () => {
  const { loginWithPopup, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {isLoading ? (
          <p>loading</p>
        ) : isAuthenticated ? (
          <>
            <pre>{JSON.stringify(user, undefined, 2)}</pre>
            <button
              onClick={() => {
                logout();
              }}
            >
              logout
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              const popup = window.open("", "auth0:authorize:popup");
              loginWithPopup({}, { popup, timeoutInSeconds: 60 });
            }}
          >
            loginWithPopup
          </button>
        )}
      </main>
    </div>
  );
};

export default Home;
