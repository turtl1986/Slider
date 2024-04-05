import React from 'react';
import StickySlider from './components/StickySlider';
import css from './App.module.css';

const App = () => {
  return (
    <>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum minima atque animi maiores neque laudantium cupiditate deleniti! Magni nesciunt error voluptas repellendus officiis autem perspiciatis porro odio facere quo!
    Sequi cupiditate consectetur iure praesentium. 
    Similique quibusdam iste quas, odit obcaecati maxime nam non reprehenderit accusantium, dignissimos delectus adipisci error modi earum voluptatem temporibus fuga saepe eveniet cupiditate alias nulla?
    Atque nostrum maiores, quis molestiae autem, debitis nemo, porro fugit nisi id eaque et ipsum natus. Porro eius iusto sint, culpa quisquam laudantium minus reiciendis quibusdam nisi qui accusantium animi.
    Ipsa non provident aliquid magni maiores praesentium rem quisquam blanditiis beatae odio consequatur, soluta, harum nesciunt eveniet maxime, repellendus laborum deserunt cum. Aliquam dicta autem ab iste maiores dolores rerum.
    Voluptas harum, nostrum error earum voluptate commodi in, consectetur quisquam mollitia quidem expedita similique animi, vero quo praesentium accusantium doloremque ipsum incidunt atque excepturi temporibus fuga aspernatur.
     Fugit, voluptatem quidem!\</p>
        <div className={css.container}>
      <h1 className={css.title}>Sticky slider</h1>
      <div className={css.slider}>
        <StickySlider />
      </div>
    </div>
    </>

  );
};

export default App;