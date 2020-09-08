import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import ScrollingBannerItem from '../ScrollingBannerItem';
import ScrollingBannerItemSmall from '../ScrollingBannerItemSmall';

interface Props {
  type?: 'wide' | 'small'
  items: Array<{
    id: string
    date: string
    title: string
    img: string
    coverImg: string
  }>
  title: string
  onViewAllPress: any
}

const ScrollingBanner: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{ props.title }</Text>

        <TouchableOpacity onPress={props.onViewAllPress}>
          <Text style={styles.subText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {
          props.items &&
          props.type === 'wide'
          ? props.items.map((item, index) => {
            return(
              <ScrollingBannerItem
                key={index}
                id={item.id}
                date={item.date}
                title={item.title}
                img={item.img}
                coverImg={item.coverImg}
                position={
                  index === 0
                  ? 'first'
                  : index === (props.items.length - 1)
                  ? 'last' : 'middle' 
                }
              />
            )
          })
          : props.items.map((item, index) => {
            return(
              <ScrollingBannerItemSmall
                key={index}
                id={item.id}
                date={item.date}
                title={item.title}
                img={item.img}
                coverImg={item.coverImg}
                position={
                  index === 0
                  ? 'first'
                  : index === (props.items.length - 1)
                  ? 'last' : 'middle' 
                }
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
};

export default ScrollingBanner