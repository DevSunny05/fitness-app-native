import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import FitnessCard from "../components/FitnessCard";
import { FitnessItem } from "../Context";

const HomeScreen = () => {
  const {
    workout,
    calories,
    minutes,
    setCompleted,
    setWorkout,
    setCalories,
    setMinutes,
  } = useContext(FitnessItem);
  return (
    <>
      <ScrollView style={{ marginTop: 40 }}>
        <View style={styles.container}>
          <Text style={styles.heading}>HOME WORKOUT</Text>
          <View style={styles.data}>
            <View>
              <Text style={styles.dataText1}>{workout}</Text>
              <Text style={styles.datatext2}>WORKOUT</Text>
            </View>

            <View>
              <Text style={styles.dataText1}>{calories.toFixed(2)}</Text>
              <Text style={styles.datatext2}>KCAL</Text>
            </View>

            <View>
              <Text style={styles.dataText1}>{minutes}</Text>
              <Text style={styles.datatext2}>MINS</Text>
            </View>
          </View>
        </View>

        <View
          style={{ justifyContent: "center", alignItems: "center", top: -75 }}
        >
          <Image
            style={styles.homeImage}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>

        <FitnessCard />
      </ScrollView>

      <Pressable
        onPress={() => {
          setWorkout(0)
          setCalories(0)
          setMinutes(0)
          setCompleted([]);
        }}
        style={styles.resetButton}
      >
        <Text style={styles.resetButtonText}>RESET</Text>
      </Pressable>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CD853F",
    width: "100%",
    height: 200,
    padding: 10,
    position: "relative",
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 5,
    letterSpacing: 5,
    marginVertical:5
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
    fontSize: 22,
  },
  datatext2: {
    color: "#D0D0D0",
    fontSize: 17,
    marginTop: 6,
  },
  homeImage: {
    width: "90%",
    height: 150,
    marginTop: 20,
    borderRadius: 7,
  },
  resetButton: {
    backgroundColor: "#CD853F",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 25,
    borderRadius: 7,
    width: '90%',
  },
  resetButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
