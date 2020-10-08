import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import ListScreen from './src/Screens/ListScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SemesterScreen from './src/Screens/SemesterScreen'
import CourseScreen1 from './src/Screens/CourseScreen1';
import CourseScreen2 from './src/Screens/CourseScreen2';
import CourseScreen3 from './src/Screens/CourseScreen3';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer initialRoutineName="Home">
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Teachers List" component={ListScreen}/>
        <stack.Screen name="Profile" component={ProfileScreen}/>
        <stack.Screen name="Semester" component={SemesterScreen}/>
        <stack.Screen name="Course1" component={CourseScreen1}/>
        <stack.Screen name="Course2" component={CourseScreen2}/>
        <stack.Screen name="Course3" component={CourseScreen3}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;