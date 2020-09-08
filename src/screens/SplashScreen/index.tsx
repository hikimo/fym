import React from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import colors from '../../config/colors';

const SplashScreen: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primaryColor} />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>FYM</Text>
        </View>
        <Text style={styles.subTitle}>Find Your Movie</Text>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;