import { profileconnect_post_api_v1_profile_create } from "../../store/profileconnect/profileconnect_response_post_CreateProfiles.slice.js";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  const dispatch = useDispatch();
  const {
    entities: description
  } = useSelector(state => state.description);
  const {
    entities: name
  } = useSelector(state => state.name);
  const [localName, setLocalName] = useState(name.name);
  const [localDescription, setLocalDescription] = useState(description.description);

  const onSubmit = () => {
    dispatch(profileconnect_post_api_v1_profile_create({
      name: localName,
      description: localDescription
    }));
  };

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <TextInput style={styles.drSycgWy} value={localName}></TextInput>
        <TextInput style={styles.UwzczLBY} value={localDescription}></TextInput>
        <Pressable onPress={onSubmit}>
          <View style={styles.jWDeGlXh}></View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  drSycgWy: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  UwzczLBY: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  jWDeGlXh: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled3;