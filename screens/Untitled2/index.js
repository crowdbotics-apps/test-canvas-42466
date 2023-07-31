import { profileconnect_post_api_v1_profile_create } from "../../store/profileconnect/profileconnect_response_post_CreateProfiles.slice.js";
import { Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, TextInput, Button, View, Text } from "react-native";

const Untitled2 = () => {
  const {
    entities: Name
  } = useSelector(state => state.Name);
  const {
    entities: Profileconnect_response_post_CreateProfiles
  } = useSelector(state => state.Profileconnect_response_post_CreateProfiles);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    dispatch(Profileconnect_response_post_CreateProfiles({
      name,
      description
    }));
  };

  const onSubmit = () => {
    dispatch(profileconnect_post_api_v1_profile_create({
      name,
      description
    }));
  };

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Form</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} data={[1, 2, 3]} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} placeholder="Enter a description" value={description} onChangeText={setDescription} data={[1, 2, 3]} />
        </View>
        <Button title="Submit" onPress={handleSubmit} />
        <Pressable onPress={onSubmit}>
          <View style={styles.KMzsglfk}>
            <Text style={styles.MkUDRBOZ}>Lorem ipsum…</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    backgroundColor: "#f0f0f1",
    padding: 20,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%"
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10
  },
  KMzsglfk: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  MkUDRBOZ: {
    width: 100,
    height: 24,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    left: 20,
    top: 18
  }
});
export default Untitled2;