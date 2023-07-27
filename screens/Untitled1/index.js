import React, { useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { profileconnect_get_api_v1_profile_list } from "../../store/profileconnect/profileconnect_response_get_Getprofiles.slice.js";

const Untitled1 = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profileconnect.profiles);
  useEffect(() => {
    dispatch(profileconnect_get_api_v1_profile_list());
  }, []);

  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>;

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <FlatList data={profiles} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
      </ScrollView>
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
  }
});
export default Untitled1;