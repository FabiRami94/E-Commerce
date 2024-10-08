
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './headings.styles';
import { Ionicons } from '@expo/vector-icons';

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Ionicons name='ios-grid' size={24}></Ionicons>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings