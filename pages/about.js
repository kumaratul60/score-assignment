import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";
import TypeWriter from "react-typewriter";

const about = () => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h5 className={styles.mainHeading}>
          <TypeWriter typing={1.5}>
            Hi, my name is Atul Kumar Awasthi. I've few months of experience in
            the development field as a frontend software developer in a
            service-based company. In which I worked on a live project and added
            some features to that project module.Eagger to learn.
          </TypeWriter>
        </h5>
        <Image
          src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          width="500"
          height="300"
          // layout="fill"
          objectFit="cover"
          alt="aboutImage"
        ></Image>
      </div>
    </>
  );
};

export default about;
