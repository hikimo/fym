import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import ScrollingBanner from '../../components/ScrollingBanner';


const HomeScreen: React.FC = () => {
  const items = [
    {
      id: 'subcanon',
      date: '14 Feb 2020',
      title: 'Pokémon: Mewtwo Strikes Back - Evolution',
      img: 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/olQLBp49qFpbWSt0z5OdNpFHP3g.jpg'
    },
    {
      id: 'subgregor',
      date: '22 Jun 2020',
      title: 'The Lord of The Rings: The Two Towers',
      img: 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/9BUvLUz1GhbNpcyQRyZm1HNqMq4.jpg'
    },
    {
      id: 'sucanon',
      date: '14 Feb 2020',
      title: 'Pokémon: Mewtwo Strikes Back - Evolution',
      img: 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/olQLBp49qFpbWSt0z5OdNpFHP3g.jpg'
    },
    {
      id: 'sugregor',
      date: '22 Jun 2020',
      title: 'The Lord of The Rings: The Two Towers',
      img: 'http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/9BUvLUz1GhbNpcyQRyZm1HNqMq4.jpg'
    }
  ]

  return(
    <>
      <Header />
      <ScrollView nestedScrollEnabled={true}>
        <ScrollingBanner items={items} title="Top Rated" onViewAllPress={() => console.log("soon")} />
        <ScrollingBanner items={items} title="Coming Soon" onViewAllPress={() => console.log("soon")} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;