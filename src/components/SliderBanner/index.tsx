import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import colors from '../../config/colors';

import SliderBannerItem from '../SliderBannerItem';


interface Props {
  autoplay?: Boolean
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
        loadMinimal={true}
        loadMinimalSize={3}
        loadMinimalLoader={(<ActivityIndicator size="large" color={colors.primaryColor} />)}
        autoplay={props.autoplay ? true : false}
        autoplayTimeout={3.5}
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