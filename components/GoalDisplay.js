import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
function GoalDisplay(props) {
  function deleteGoalHandler() {
    console.log("delete", props.id);
    props.onDeleteGoal(props.id);
  }
  return (
    <Pressable
      android_ripple={"#ddd"}
      onPress={props.onDeleteGoal.bind(this, props.id)}
    >
      <Text style={styles.goalItems}>{props.goalText}</Text>
    </Pressable>
  );
}

export default GoalDisplay;

const styles = StyleSheet.create({
  goalItems: {
    borderRadius: 6,
    margin: 8,
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 8,
  },
});
