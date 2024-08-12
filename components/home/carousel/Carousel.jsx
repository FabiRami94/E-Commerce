
import { View, Text } from 'react-native';
import React from 'react';
import styles from './carousel.styles.js';
import { SliderBox } from 'react-native-image-slider-box';

const Carousel = () => {

    const slides = [

    ];


  return (
    <View style={styles.CarouselContainer}>
      <SliderBox />
    </View>
  )
}

export default Carousel;