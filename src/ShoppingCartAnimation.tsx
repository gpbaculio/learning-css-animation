import { useState } from "react";

import basket from "./web-examples/img/basket.png";
import t1 from "./web-examples/img/t-1.jpg";
import t2 from "./web-examples/img/t-2.jpg";
import t3 from "./web-examples/img/t-3.jpg";

import "./ShoppingCartAnimation.css";

const ShoppingCartAnimation = () => {
  const [addClass1, setaddClass1] = useState(false);
  return (
    <div className='basket'>
      <header>
        <h1>Sports Clothing</h1>
        <div className='basket-icon'>
          <img src={basket} />
        </div>
        <ul className='products'>
          <li
            onClick={() => {
              setaddClass1(true);
            }}>
            <img src={t1} alt='' className={addClass1 ? "zoom" : ""} />
            <img
              src={t1}
              alt=''
              style={{ display: addClass1 ? "inline" : "none" }}
            />
            <h2>addClass1 T-Shirt</h2>
            <button>Add to Basket</button>
          </li>
          <li>
            <img src={t2} alt='' />
            <h2>Yellow T-Shirt</h2>
            <button>Add to Basket</button>
          </li>
          <li>
            <img src={t3} alt='' />
            <h2>Pink T-Shirt</h2>
            <button>Add to Basket</button>
          </li>
          <li>
            <img src={t2} alt='' />
            <h2>Green T-Shirt</h2>
            <button>Add to Basket</button>
          </li>
          <li>
            <img src={t1} alt='' />
            <h2>Yellow T-Shirt</h2>
            <button>Add to Basket</button>
          </li>
          <li>
            <img src={t2} alt='' />
            <h2>Pink T-Shirt</h2>
            <button>Add to Basket</button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default ShoppingCartAnimation;
