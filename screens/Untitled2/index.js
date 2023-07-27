import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, FlatList, Text, View } from "react-native";
const data = [{
  id: 1,
  name: "Item 1",
  description: "Description 1"
}, {
  id: 2,
  name: "Item 2",
  description: "Description 2"
}, {
  id: 3,
  name: "Item 3",
  description: "Description 3"
}, {
  id: 4,
  name: "Item 4",
  description: "Description 4"
}, {
  id: 5,
  name: "Item 5",
  description: "Description 5"
}];

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