import ninja from "./web-examples/img/ninja.png";

import "./PopupAnimation.css";

const PopupAnimation = () => {
  return (
    <div className='pop-up'>
      <div id='pop-up'>
        <img src={ninja} alt='' />
        <div className='container'>
          <h1>Kung Foo Your Skills</h1>
          <p>Join the mailing list to be spammed with useless ninja tips</p>
          <input type='email' placeholder='email' required />
          <button>Hii Ya</button>
          <div className='cross'>x</div>
        </div>
      </div>
    </div>
  );
};

export default PopupAnimation;
