
import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.styles';
import Colors from '../../../constants/Colors';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText(Colors)}>Find The Most</Text>
      <Text style={styles.welcomeText}>Find The Most</Text>
    </View>
  )
}

export default Welcome;