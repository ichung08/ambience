import React from "react";
import { useSpring, animated, config } from "react-spring";
import "../Styles/index.css";

function Header() {
  const styles = useSpring({
    loop: true,
    to: [
      { x: 0, opacity: 1, color: "#003ead" },
      { x: 0, opacity: 1, color: "#1a84cd" },
      { x: 0, opacity: 1, color: "#00d4ff" },
      { x: 0, opacity: 1, color: "#8bffd1" },
      { x: 0, opacity: 1, color: "#00d4ff" },
      { x: 0, opacity: 1, color: "#1a84cd" },
      { x: 0, opacity: 1, color: "#003ead" },
      { x: 0, opacity: 1, color: "#000000" },
    ],
    from: { x: 0, opacity: 1, color: "#000000" },
    config: config.molasses,
  });

  return (
    <>
      <header className="header">
        <animated.div style={styles}>
          <h1>ambience</h1>
        </animated.div>
      </header>
    </>
  );
}
export default Header;
