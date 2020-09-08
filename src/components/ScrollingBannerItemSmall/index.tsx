import React from 'react';
import { TouchableOpacity, ImageBackground, View, Text, Image } from 'react-native';

import styles from './styles';

interface Props {
  position?: 'first' | 'middle' | 'last'
  id: string
  title: string
  img: string
  coverImg: string
  date: string
}

const ScrollingBannerItemSmall: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={() => console.log('Diklik id ' + props.id)}>
      <View
        style={
          [
            styles.container, 
            props.position &&
            props.position === 'first'
            ? styles.leftContainer
            : props.position === 'last'
            && styles.rightContainer
          ]
        }
      >
        <View style={styles.imgContainer}>
          <Image source={{uri: props.img}} resizeMode="contain" resizeMethod="resize" style={styles.img} />
        </View>
        
        <View style={styles.descContainer}>
          <Text style={styles.descDate}>{ props.date }</Text>
          <Text style={styles.descTitle}>
            {
              props.title.length >= 22
              ? props.title.slice(0, 22).concat('..')
              : props.title
            }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ScrollingBannerItemSmall;