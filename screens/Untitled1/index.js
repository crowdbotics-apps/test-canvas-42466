import { profileconnect_post_api_v1_profile_create } from "../../store/profileconnect/profileconnect_response_post_CreateProfiles.slice.js";
import { Pressable } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { profileconnect_get_api_v1_profile_list } from "../../store/profileconnect/profileconnect_response_get_Getprofiles.slice.js";

const Untitled1 = () => {
  const {
    entities: b
  } = useSelector(state => state.b);
  const {
    entities: a
  } = useSelector(state => state.a);
  const dispatch = useDispatch();
  const {
    entities
  } = useSelector(state => state.Profileconnect_response_get_Getprofiles);
  useEffect(() => {
    dispatch(profileconnect_get_api_v1_profile_list());
  }, []);

  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>;

  const onSubmit = () => {
    dispatch(profileconnect_post_api_v1_profile_create({
      a,
      b
    }));
  };

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <FlatList data={entities} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
      <Pressable onPress={onSubmit}><View style={styles.HqRmAHZM}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    marginTop: 5
  },
  HqRmAHZM: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled1;