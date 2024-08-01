
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.styles';
import Colors from '../../../constants/Colors';
import { Feather } from '@expo/vector-icons';

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(Colors)}>Find The Most</Text>
        <Text style={styles.welcomeText}>Find The Most</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather 
            name='search' 
            size={24} 
            style={styles.searchIcon}>      
          </Feather>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value='' 
            onPress={()=>{}} 
            placeholder='What are looking for'>
          </TextInput>
        </View>
      </View>
    </View>
  )
}

export default Welcome;