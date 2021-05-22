import mario from "./mario-examples/img/mario.png";
import luigi from "./mario-examples/img/luigi.png";
import cloud from "./mario-examples/img/cloud.png";

import "./ChainingAnimations.css";

const ChainingAnimations = () => {
  return (
    <>
      <div className='sky'>
        <img className='cloud' src={cloud} alt='' />
        <img className='cloud' src={cloud} alt='' />
      </div>
      <div className='grass' />
      <div className='road'>
        <div className='lines' />
        <img className='mario' src={mario} alt='' />
        <img className='luigi' src={luigi} alt='' />
      </div>
    </>
  );
};

export default ChainingAnimations;
