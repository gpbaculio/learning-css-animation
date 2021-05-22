import "./TransitionAnimations.css";

import cloud from "./mario-examples/img/cloud.png";

const TransformAnimations = () => {
  return (
    <div className='wrapper'>
      <img src={cloud} alt='' />
      <div className='circle'>Hover me</div>
    </div>
  );
};

export default TransformAnimations;
