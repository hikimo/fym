import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

interface Props {
  navigation?: any
}

interface List {
  title: string
  onPress: any
}

const ListMenu: Array<{
  title: string
  target: string
}> = [
  {
    title: 'Top Rated Movies',
    target: 'Splash'
  },
  {
    title: 'Upcoming Movies',
    target: 'ListMovie'
  },
  {
    title: 'Now Playing Movies',
    target: 'ListMovie'
  },
  {
    title: 'Popular Movies',
    target: 'ListMovie'
  },
  {
    title: 'Popular People',
    target: 'ListMovie'
  },
  {
    title: 'Top Rated Movies',
    target: 'Splash'
  },
  {
    title: 'Upcoming Movies',
    target: 'ListMovie'
  },
  {
    title: 'Now Playing Movies',
    target: 'ListMovie'
  },
  {
    title: 'Popular Movies',
    target: 'ListMovie'
  }
];

const DrawerList: React.FC<List> = (props) => {
  return(
    <TouchableOpacity style={styles.Menu} onPress={props.onPress}>
      <Text style={styles.MenuText}>{ props.title }</Text>
    </TouchableOpacity>
  );
};

const DrawerMenu: React.FC<Props> = (props) => {
  const _menuPressHandler = (target: string) => {
    // Dispatch some actions later then navigate
    props.navigation.navigate(target);
    console.log('Ganti halaman dung');
  };
  
  return(
    <SafeAreaView style={styles.container}>   
      <View style={styles.heading}>
        <Text style={styles.headingTitle}>FYM</Text>
        <Text style={styles.headingSubTitle}>Find Your Movie</Text>
      </View>

      <View style={styles.MenuContainer}>
        {
          ListMenu.map((item, index) => {
            return(
              <DrawerList
                key={index}
                title={item.title}
                onPress={() => _menuPressHandler(item.target)}
              />
            );
          })
        }
      </View>

      <View style={styles.FooterContainer}>
        <Text style={styles.FooterText}>App v.1.0.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default DrawerMenu;