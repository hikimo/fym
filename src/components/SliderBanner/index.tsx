import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

import SliderBannerItem from '../SliderBannerItem';
import colors from '../../config/colors';


interface Props {
  items: Array<{
    id: any,
    bgImg: string,
    coverImg: string,
    title: string,
    genre: string
  }>
}

interface Dots {
  isActive?: boolean
}

const SliderDot: React.FC<Dots> = (props) => (
  <View style={[ styles.dot, props.isActive && styles.activeDot]}/>
)

const SliderBanner: React.FC<Props> = (props) => {
  return (
    <View>
      <Swiper
        height={200}
        dot={SliderDot({isActive: false})}
        activeDot={SliderDot({isActive: true})}
      >
        {
          props.items &&
          props.items.map((val, index) => (
            <SliderBannerItem
              key={index}
              itemId={val.id}
              bgImg={val.bgImg}
              coverImg={val.coverImg}
              itemTitle={val.title}
              genre={val.genre}
            />
          ))
        }
      </Swiper>

      <View style={styles.fixedLabel}>
        <Text style={styles.fixedLabelText}>On Air</Text>
      </View>
    </View>
  );
};

export default SliderBanner;