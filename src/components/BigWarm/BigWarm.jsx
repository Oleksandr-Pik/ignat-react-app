import React from 'react';
import './BigWarm.scss';
import { Link } from 'react-router-dom';

const BigWarm = () => {
  return (
    <section className="big-warm container">
      <div className="big-warm-left-side">
        <p className='big-warm-title'>Ми знаємо, що сподобається вашим “великим” друзям!</p>
        <p className='big-warm-descr'>
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </p>
        <Link className="big-warm-btn btn" href="/">
          До каталогу
        </Link>
      </div>

      <div className="big-warm-right-side"></div>
    </section>
  );
};

export default BigWarm;
