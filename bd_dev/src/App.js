import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

function getWindowsSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function App() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowsSize());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowsSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      height: windowDimensions.height,
      width: windowDimensions.width,
      backgroundColor: "grey",
      flex: 1,
    },
    topHalf: {
      height: windowDimensions.height * 0.477,
      backgroundColor: "#1E1E1E",
    },
    mainLogo: {
      paddingLeft: windowDimensions.height * 0.048,
      paddingTop: windowDimensions.height * 0.048,
    },
    middleHalf: {
      height: windowDimensions.height * 0.035,
      backgroundColor: "#1E1E1E",
    },
    bottomHalf: {
      height: windowDimensions.height * 0.488,
      backgroundColor: "#FFFFFF",
    },
    socials: {
      transform: "rotate(-90deg)",
      display: "flex",
      position: "absolute",
      left: -15,
      bottom: 120,
      fontSize: 13,
      fontWeight: "bold",
      color: "#1E1E1E",
    },
    socials_icon: {
      transform: "rotate(90deg)",
      marginTop: 20,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.topHalf}>
        <div style={styles.mainLogo}>
          <img src="/icons/bd_logo.svg" alt="Logo" />
        </div>
      </div>
      <div style={styles.middleHalf}>
        <svg height="100%" width="100%" viewBox="0 0 1440 18">
          <path
            d="M1440 30.2114C1050.68 -20.6994 511.292 2.14762 0 30.2114H1440Z"
            fill="#6851FF"
          />
        </svg>
      </div>

      <div style={styles.bottomHalf}>
        <div style={styles.socials}>
          <div>
            <div className="socials" style={{ marginRight: 16 }} onClick="">
              <a
                style={{ textDecoration: "none" }}
                href="https://twitter.com/"
                target="_blank"
              >
                Twitter
              </a>
            </div>
            <img
              className="icon"
              style={styles.socials_icon}
              src="/icons/twitter.svg"
              alt="Tiwtter"
            />
          </div>
          <div>
            <div className="socials" style={{ marginRight: 16 }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://tiktok.com/"
                target="_blank"
              >
                TikTok
              </a>
            </div>
            <img
              className="icon"
              style={styles.socials_icon}
              src="/icons/tiktok.svg"
              alt="TikTok"
            />
          </div>
          <div>
            <div className="socials" style={{ marginRight: 16 }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://instagram.com/"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <img
              className="icon"
              style={styles.socials_icon}
              src="/icons/instagram.svg"
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
