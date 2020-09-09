import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

interface Props {
  navigation?: any
}

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideContent} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrowleft" size={22} style={styles.icons} />
      </TouchableOpacity>
      <View style={styles.searchGroup}>
        <TextInput
          style={styles.inputForm}
          placeholder="Searh your movie.."
        />
      </View>
      <TouchableOpacity style={styles.sideContent}>
        <Icon name="search1" size={22} style={styles.icons} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
