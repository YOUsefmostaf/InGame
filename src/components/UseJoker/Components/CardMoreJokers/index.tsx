import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../../../../assets/images'
import { styles } from './styles'

const CardMoreJokers = () => {
  return (
    <View style={styles.container}>
      <Image source={images.league} style={styles.backgroundImage}/>
      <View style={styles.images}>
        <Image source={images.pack} style={styles.pack}/>
        <Image source={images.crown} style={styles.crown}/>
      </View>
      <Text style={styles.text}>Gold Back</Text>
      <View style={styles.bottomContainer}>
        <Image source={images.gem}/>
        <Text style={styles.text2}>30</Text>
      </View>
    </View>
  )
}

export default CardMoreJokers