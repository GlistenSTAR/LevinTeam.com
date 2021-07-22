import React, { useEffect, useRef } from "react";
import "./styles.css";

export default function Wheel({ names }) {
  const wheelRef = useRef(null);
  useEffect(() => {
    // document.querySelectorAll(':not(.wheel__container)');
    // document
    //   .querySelectorAll("iframe")
    //   .forEach(item =>
    //     console.log(item.contentWindow.document.body.querySelectorAll("div"))
    //   );
    console.log(wheelRef.current[Object.keys(wheelRef.current)[0]]);
    document
      .querySelector("iframe")
      .contentWindow.document.querySelector("body").style.color = "red";
  }, []);
  return (
    <iframe
      ref={wheelRef}
      title="wheel"
      src="https://tools-unite.com/tools/random-picker-wheel?names=John,Elizabeth,Mary,James,Robert,Jennifer,Susan,Benjamin"
    />
  );
}
