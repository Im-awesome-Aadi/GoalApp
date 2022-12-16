import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import GoalDisplay from "./components/GoalDisplay";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function addGoalHandler(enteredGoal) {
    setGoalList((prevGoals) => {
      return [
        { title: enteredGoal, id: Math.random().toString() },
        ...prevGoals,
      ];
    });
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setGoalList((currGoals) => {
      return currGoals.filter((eachGoal) => {
        return eachGoal.id !== id;
      });
    });
  }
  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endAddGoalHandler() {
    setModalVisible(false);
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="ADD NEW GOAL"
        onPress={startAddGoalHandler}
        color="#5e0acc"
      />
      <GoalInput
        modalVisible={modalVisible}
        onAddGoal={addGoalHandler}
        onEndAddGoalHandler={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(eachGoalData) => {
            return (
              <GoalDisplay
                id={eachGoalData.item.id}
                goalText={eachGoalData.item.title}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>

      {/* <View style={styles.goalsContainer}>
        <ScrollView>
          {goalList.map((goal) => {
            return (
              <Text style={styles.goalItems} key={goal}>
                {goal}
              </Text>
            );
          })}
        </ScrollView>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 4,
  },
});
