
import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import styles from './home.styles';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { Welcome } from '../../components';
import Carousel from '../../components/home/carousel/Carousel';
import Headings from '../../components/home/headings/Headings';

const Home = () => {
  return (
    <SafeAreaView>
      {/*<View> View is like div in React*/}
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>

          <Ionicons name='location-outline' size={24}></Ionicons>

          <Text style={styles.textStyle}>Location</Text>

          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
              {/* <Touchable> For make an item touch or 'clikeable'*/}
              <TouchableOpacity>
                <Fontisto name='shopping-bag' size={24}></Fontisto>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        {/* <Welcome></Welcome>
        <Carousel></Carousel>
        <Headings></Headings> */}
      </ScrollView>
    </SafeAreaView>
  )
};

export default Home;