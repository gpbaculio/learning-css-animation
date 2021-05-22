import mario from "./mario-examples/img/mario.png";

import "./AnimationFillMode.css";

const AnimationFillMode = () => {
  return (
    <>
      <div className='sky' />
      <div className='grass' />
      <div className='road'>
        <div className='lines' />
        <img className='mario' src={mario} alt='' />
      </div>
    </>
  );
};

export default AnimationFillMode;
