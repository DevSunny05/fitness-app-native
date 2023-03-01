import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'

const FitScreen = () => {
    const route=useRoute()
    const [index,setIndex]=useState(0)
    const excersises=route.params.excersises
    const current=excersises[index]
    
  return (
    <SafeAreaView style={{marginTop:40}}>
      <Image style={styles.image} source={{uri:current.image}}/>
      <Text style={styles.name}>{current.name}</Text>
      <Text style={styles.sets}>{`x${current.sets}`}</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>DONE</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:400
    },
    name:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:30,
        fontSize:30,
        fontWeight:'bold'
    },
    sets:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:30,
        fontSize:40,
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'blue',
        marginLeft:'auto',
        marginRight:'auto',
        padding:10,
        marginTop:30,
        borderRadius:100,
        width:220
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:'white'
    }
})