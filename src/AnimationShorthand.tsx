import mario from "./mario-examples/img/mario.png";
import luigi from "./mario-examples/img/luigi.png";
import cloud from "./mario-examples/img/cloud.png";

import "./AnimationShorthand.css";

const AnimationShorthand = () => {
  return (
    <>
      <div className='sky'>
        <img className='cloud' src={cloud} />
        <img className='cloud' src={cloud} />
      </div>
      <div className='grass' />
      <div className='road'>
        <div className='lines' />
        <img className='mario' src={mario} />
        <img className='luigi' src={luigi} />
      </div>
    </>
  );
};

export default AnimationShorthand;
