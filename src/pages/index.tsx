import type { NextPage } from 'next';
import Container from '../components/Container';
import { useEffect, useState } from 'react';
import { Restaurant } from '../@types/restaurant';

const Home: NextPage = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>({ name: ' ' });

  useEffect(() => {
    fetchRestaurantByLuck()
  }, [])

  const fetchRestaurantByLuck = () => {
    fetch(`${process.env.NEXT_PUBLIC_WEAT_API_URL}/lucky`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data));
  }

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
