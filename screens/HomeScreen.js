import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FitnessCard from "../components/FitnessCard";

const HomeScreen = () => {
  return (
    <ScrollView style={{ marginTop: 40,  }}>
      <View style={styles.container}>
        <Text style={styles.heading}>HOME WORKOUT</Text>
        <View style={styles.data}>
          <View>
            <Text style={styles.dataText1}>0</Text>
            <Text style={styles.datatext2}>WORKOUT</Text>
          </View>

          <View>
            <Text style={styles.dataText1}>0</Text>
            <Text style={styles.datatext2}>KCAL</Text>
          </View>

          <View>
            <Text style={styles.dataText1}>0</Text>
            <Text style={styles.datatext2}>MINS</Text>
          </View>
        </View>
  
      </View>

      <View style={{ justifyContent: "center", alignItems: "center",top:-80,}}>
          <Image
            style={styles.homeImage}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
       
        <FitnessCard/>
       
      
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CD853F",
    width: "100%",
    height: 200,
    padding: 10,
    position:'relative'
    
    
  },
  heading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  dataText1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  datatext2: {
    color: "#D0D0D0",
    fontSize: 17,
    marginTop: 6,
  },
  homeImage: {
    width: "90%",
    height: 120,
    marginTop: 20,
    borderRadius: 7,
  },
});
