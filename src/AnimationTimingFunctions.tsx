import mario from "./mario-examples/img/mario.png";
import luigi from "./mario-examples/img/luigi.png";

import "./AnimationTimingFunctions.css";

const AnimationTimingFunctions = () => {
  return (
    <>
      <div className='sky' />
      <div className='grass' />
      <div className='road'>
        <div className='lines' />
        <img className='mario' src={mario} />
        <img className='luigi' src={luigi} />
      </div>
    </>
  );
};

export default AnimationTimingFunctions;
