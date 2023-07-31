import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, TextInput, Button, View, Text } from "react-native";

const Untitled2 = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {// Handle form submission logic here
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
        <Button title="Submit" onPress={handleSubmit} data={[1, 2, 3]} />
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
  }
});
export default Untitled2;