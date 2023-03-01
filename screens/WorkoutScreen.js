import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItem } from "../Context";
import { AntDesign } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItem);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 50, backgroundColor: "white" }}
      >
        <Image style={styles.image} source={{ uri: route.params.image }} />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="arrow-back-sharp"
          size={28}
          color="white"
        />

        {route.params.excersises.map((item, index) => (
          <Pressable key={index} style={styles.imageContainer}>
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", width: 170 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 16, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign style={{marginLeft:40}} name="checkcircle" size={24} color="green" />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() => {
          navigation.navigate("fit", { excersises: route.params.excersises });
          setCompleted([]);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>START</Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 170,
    borderRadius: 7,
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  imageContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    borderRadius: 7,
    width: 120,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
