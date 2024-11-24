import React from "react";
import Header from "../../components/Header/Header";
import WorkspaceLogo from "../../components/workspace logo/WorkspaceLogo";
import styles from "./Home.module.css";
import StandardButton from "../../components/standard button/StandardButton";
import BorderButton from "../../components/Border button/BorderButton";

const Home = () => {
  return (
    <div className="bg-[#160433] h-vh-100">
      <Header />

      <div className={styles.container}>
        <img
          src="/home page image.png"
          alt=""
          className={styles.homeImage}
        />
        <div className={styles.text}>
        <WorkspaceLogo />
        <p>Innovative workspaces—public, private, and semi-private. Boost your productivity!</p>
        <StandardButton target={'/signup'} Backgroundcolor={'#FF9D00'} text={'GET STARTED'}/>

        <BorderButton target={'/signin'} borderColor={'linear-gradient( #0CF637, #950DFF) 1'} text={'I’M ALREADY REGISTERED '}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
