import mario from "./mario-examples/img/mario.png";
import luigi from "./mario-examples/img/luigi.png";

import "./AnimationDirection.css";

const AnimationDirection = () => {
  return (
    <>
      <div className='sky' />
      <div className='grass' />
      <div className='road'>
        <div className='lines' />
        <img className='mario' src={mario} alt='' />
        <img className='luigi' src={luigi} alt='' />
      </div>
    </>
  );
};

export default AnimationDirection;
