// import React from 'react'
// // import Wheel from './Wheel'
// import ''

// export default function Index() {
//   return (
//     <div className="contest">
//       <div className="fake_backgound"></div>
//       <div style={{marginTop:'200px', width:'100%', zIndex:'9999', position:'relative'}}>
//         {/* <Wheel names={["sample", "sample"]} /> */}
//       </div>
//     </div>
//   )
// }



import React, { useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import "./styles.scss";

const Card = ({ i }) => {
  return (
      <div className="card">
            <div>{i}</div>
        </div>
  );
};

const vPulse = {
  scale: [0.95, 1.1],
  transition: { duration: 0.6, yoyo: Infinity }
};

const rotateV = {
  start: ({ rotate }) => ({
    rotate: rotate,
    transition: { type: "tween", duration: 8, ease: [.5,.1,.15,1] }
  }),
  stop: ({ endDeg }) => ({
    rotate: endDeg,
    transition: { type: "tween", duration: 0 }
  })
};

export default function Index() {
  const [isAnimationStart, setIsAnimationStart] = useState(false);
  const pulseControl = useAnimation();
  const rotateControl = useAnimation();

  const spinCount = 3;
  // position will come from api, it's between 1 ... 8
  const position = 4;
  const offset = (360 / 8) * position;
  const endValue = useMotionValue(360 * spinCount - offset);

  const onAnimationStart = () => {
    if (!isAnimationStart) {
      setIsAnimationStart(true);
      rotateControl.start("start");
      pulseControl.stop();
    }

    setTimeout(() => {
      rotateControl.start("stop");
      pulseControl.start(vPulse);
      setIsAnimationStart(false);
    }, 8300);
  };

  useEffect(() => {
    pulseControl.start(vPulse);
  }, []);

  return (
    <div className="contest" align="center">
      <div className="fake_backgound"></div>
          <div className="circleWrap">
            <motion.div
              className="circleInner"
              onClick={() => onAnimationStart()}
              whileHover={isAnimationStart ? null : { backgroundImage: "radial-gradient(rgb(240, 135, 88) 0%, rgb(229, 103, 47) 40%)"}}
              style={isAnimationStart ? { pointerEvents: "none" } : { pointerEvents: "auto" }}
            >
              <motion.div
                className="cta"
                style={{ x: "-50%", y: "-50%" }}
                animate={pulseControl}
              >
                click me!
              </motion.div>
            </motion.div>
            <motion.ul
              className="circle"
              custom={{
                rotate: [0, endValue.current],
                endDeg: endValue.current
              }}
              animate={rotateControl}
              variants={rotateV}
              style={{ x: "-50%", y: "-50%" }}
            >
              {[...Array(8)].map((_, i) => (
                <li key={i}>
                  <Card i={i + 1} />
                </li>
              ))}
            </motion.ul>
          </div>
    </div>
  );
}