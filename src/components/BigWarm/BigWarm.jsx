import React from 'react';
import './BigWarm.scss';

const BigWarm = () => {
  return (
    <section className="big-warm container">
      <div className="big-warm-left-side">
        <p className='big-warm-title'>Ми знаємо, що сподобається вашим “великим” друзям!</p>
        <p className='big-warm-descr'>
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </p>
        <a className="big-warm-btn btn" href="/">
          До каталогу
        </a>
      </div>

      <div className="big-warm-right-side"></div>
    </section>
  );
};

export default BigWarm;
