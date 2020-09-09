import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';

const SplashScreen: React.FC<{navigation: any}> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Root');
    }, 2500);
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryColor} />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FYM</Text>
        </View>
        <Text style={styles.subTitle}>Find Your Movie</Text>

        <ActivityIndicator size="large" color={colors.lightColor} />
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;