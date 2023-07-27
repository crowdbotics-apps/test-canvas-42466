import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, FlatList, Text, View } from "react-native";
const data = [];

const Item = ({
  name,
  description
}) => <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>;

const Untitled2 = () => {
  const renderItem = ({
    item
  }) => <Item name={item.name} description={item.description} />;

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
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
    marginHorizontal: 16,
    borderRadius: 10
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    marginTop: 5
  }
});
export default Untitled2;