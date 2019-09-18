import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHnadler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    setCourseGoals([...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHnadler}
          placeholder="Course Goal"
          style={styles.textInput}
          value={enteredGoal}
        />
        <Button onPress={addGoalHandler} title="ADD" />
      </View>
      <View>
        {courseGoals.map(goal => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: 200
  }
});
