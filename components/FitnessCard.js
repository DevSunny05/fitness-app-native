import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCard = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View style={{ top: -70 }}>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
          style={styles.imageContainer}
          key={key}
        >
          <Image style={styles.cardImage} source={{ uri: item.image }} />
          <Text style={styles.imageText}>{item.name}</Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 15,
              left: 20,
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCard;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  cardImage: {
    width: "95%",
    height: 140,
    borderRadius: 7,
  },
  imageText: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    left: 20,
    top: 20,
  },
});
