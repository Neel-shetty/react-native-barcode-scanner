import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { layout } from '../../constants/layout'

const Title = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title1}>Let's Sign you in</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  root:{
    width:layout.widthp,
    alignItems:'flex-start',
    justifyContent:'center'
  },
  title1:{
    fontFamily:'poppins-medium'
  }
})