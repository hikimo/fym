import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import SliderBanner from '../../components/SliderBanner';
import ScrollingBanner from '../../components/ScrollingBanner';

import styles from './styles';

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
  ];

  const sliderItem = [
    {
      id: 'supasupa',
      bgImg: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/4XZGGgOTj7PcWfpF7kSnVHUE49g.jpg',
      coverImg: 'https://image.tmdb.org/t/p/w220_and_h330_face/mnQkaU3K1ITREihPOdYyTCGUNJg.jpg',
      title: 'Uzaki-chan Wants to Hang Out!',
      genre: 'Animation, Comedy'
    },
    {
      id: 'bunca',
      bgImg: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/tvjCdVRkaaab2ezM9BctkAOXeyW.jpg',
      coverImg: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/rOuGm07PxBhEsK9TaGPRQVJQm1X.jpg',
      title: 'Pokémon',
      genre: 'Animation, Action & Adventure, Sci-Fi & Fantasy'
    }
  ];

  return(
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled={true}>
        <SliderBanner items={sliderItem} />
        <ScrollingBanner items={items} title="Top Rated" onViewAllPress={() => console.log("soon")} />
        <ScrollingBanner items={items} title="Coming Soon" onViewAllPress={() => console.log("soon")} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;