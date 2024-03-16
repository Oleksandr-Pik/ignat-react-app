import React from 'react';
import Hero from '../components/Hero/Hero';

const MainPage = () => {
  return (
    <main>
      <Hero/>

      <section className="container">
        <div className='left-side'>
        <p>Ми знаємо, що сподобається вашим “великим” друзям!</p>
        <p>
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </p>
        <a className='btn' href="#">До каталогу</a>
        </div>
        <div className="right-side"></div>
      </section>
    </main>
  );
};

export default MainPage;
