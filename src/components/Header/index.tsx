import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import styles from './styles';

interface Props {
  hidden?: boolean
  onMenuPress: any
  onSearchPress: any
}

const Header: React.FC<Props> = (props) => {
  if(props.hidden) {
    return null;
  }
  
  return (
    <>
      <StatusBar backgroundColor={colors.primaryColor} />
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity onPress={props.onMenuPress}>
            <Icon name="appstore1" size={18} color={colors.lightColor} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.title}>FYM</Text>
        </View>
        
        <View>
          <TouchableOpacity onPress={props.onSearchPress}>
            <Icon name="search1" size={18} color={colors.lightColor} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Header;