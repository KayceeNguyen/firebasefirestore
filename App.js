import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Register';
import EditScreen from './screens/Edit';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2jEyNIqN53k4FwPpNRHOaloAWG320Ip4",
    authDomain: "nov16-exercise.firebaseapp.com",
    projectId: "nov16-exercise",
    storageBucket: "nov16-exercise.appspot.com",
    messagingSenderId: "295699751309",
    appId: "1:295699751309:web:823cf3587fb2993751ddc4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen  name="Register" component={RegisterScreen} />
        <Stack.Screen  name="Edit" component={EditScreen} />
        <Stack.Screen  name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
