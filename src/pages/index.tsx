import type { NextPage } from 'next';
import Container from '../components/Container';
import { useState } from 'react';
import { Restaurant } from '../@types/restaurant';

const Home: NextPage = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>({ name: ' ' });

  // fetch('https://api.weat.io/lucky')
  //   .then((res) => res.json())
  //   .then((data) => setRestaurant(data));

  setTimeout(() => {
    setRestaurant({ name: '不二家酸菜鱼' });
  }, 1000);

  return (
    <Container size="fluid">
      <div className="d-flex align-items-center justify-content-center h-100-webkit">
        <div className="d-flex flex-column">
          <span className="m-auto">今天吃</span>
          <span className="m-auto restaurant-name">{restaurant?.name}</span>
        </div>
      </div>
    </Container>
  );
};

export default Home;
