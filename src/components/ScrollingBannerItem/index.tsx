import React from 'react';
import { TouchableOpacity, ImageBackground, View, Text } from 'react-native';

import styles from './styles';

interface Props {
  position?: 'first' | 'middle' | 'last'
  id: string
  title: string
  img: string
  date: string
}

const ScrollingBannerItem: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={() => console.log('Diklik id ' + props.id)}>
      <ImageBackground
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
        imageStyle={styles.imgBg}
        source={{uri: props.img}}
      >
        <View style={styles.overlay} />
        <View style={styles.descContainer}>
          <Text style={styles.descDate}>{ props.date }</Text>
          <Text style={styles.descTitle}>{ props.title }</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ScrollingBannerItem;