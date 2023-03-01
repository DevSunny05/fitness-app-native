import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const FitScreen = () => {
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const excersises = route.params.excersises;
  const current = excersises[index];
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ marginTop: 40 }}>
      <Image style={styles.image} source={{ uri: current.image }} />
      <Text style={styles.name}>{current.name}</Text>
      <Text style={styles.sets}>{`x${current.sets}`}</Text>

      {index + 1 >= excersises.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>DONE</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("rest");

            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>DONE</Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          flexDirection: "row",
          marginTop: 50,
        }}
      >

        <Pressable
        disabled={index ===0}
          onPress={() => {
            navigation.navigate("rest");
            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={styles.prevButton}
        >
          <Text style={styles.prevButtonText}>PREV</Text>
        </Pressable>

        {index + 1 >= excersises.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.prevButton}
          >
            <Text style={styles.prevButtonText}>SKIP</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("rest");

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={styles.prevButton}
          >
            <Text style={styles.prevButtonText}>SKIP</Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: 400,
    marginLeft: "auto",
    marginRight: "auto",
  },
  name: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  sets: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    marginTop: 30,
    borderRadius: 100,
    width: 160,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  prevButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 22,
    width: 100,
  },
  prevButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
