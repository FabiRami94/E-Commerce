
import { View, Text } from 'react-native';
import styles from './home.styles';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      {/*<View> View is like div in React*/}
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Text style={styles.textStyle}>Home</Text>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default Home;