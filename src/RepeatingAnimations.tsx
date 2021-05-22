import mario from "./mario-examples/img/mario.png";

import "./RepeatingAnimations.css";

const RepeatingAnimations = () => {
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

export default RepeatingAnimations;
