import mario from "./mario-examples/img/mario.png";

import "./KeyframeAnimations.css";

const KeyFrameAnimations = () => {
  return (
    <>
      <div className='sky' />
      <div className='grass' />
      <div className='road'>
        <div className='lines' />
        <img className='mario' src={mario} />
      </div>
    </>
  );
};

export default KeyFrameAnimations;
