import React from 'react';
import { TouchableOpacity, ImageBackground, View, Image, Text } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';

interface Props {
  itemId: any
  bgImg: string
  coverImg: string
  itemTitle: string
  genre: string
}

const SliderBannerItem: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('SLider diklik ' + props.itemId)}>
      <ImageBackground source={{uri: props.bgImg}} style={styles.container}>
        <BlurView style={styles.overlay} blurType="dark" blurRadius={6} />
        <View style={styles.itemContainer}>
          <View style={styles.itemCover}>
            <Image source={{uri: props.coverImg}} resizeMethod="auto" resizeMode="contain" style={styles.itemCoverImg} />
          </View>

          <View style={styles.itemDesc}>
            <View>
              <Text style={styles.itemDescTitle}>{props.itemTitle}</Text>
              <Text style={styles.itemDescSub}>{props.genre}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default SliderBannerItem;