import React from 'react';
import './Subscribe.scss';

const Subscribe = () => {
  return (
    <section className="subscribe container">
      <h2 className="subscribe-title">Спіймай всі акції!</h2>
      <p className="subscribe-descr">
        Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
      </p>
      <p className="subscribe-descr">
        будуть з`влятись у нашому магазині. А у нас їх багато :D
      </p>

      <div className="subscribe-wrapper">
        <label htmlFor="" className="subscribe-input-wrapper">
          <input type="text" placeholder="введіть" />
        <button className="subscribe-btn" type="submit">
          Підписатись
        </button>
        </label>
      </div>
    </section>
  );
};

export default Subscribe;
