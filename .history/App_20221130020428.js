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
    apiKey: "AIzaSyDXuy9i5Wezu5HZ2JmEPmy1rT4qGBtXbQU",
    authDomain: "firestore-e5d7d.firebaseapp.com",
    projectId: "firestore-e5d7d",
    storageBucket: "firestore-e5d7d.appspot.com",
    messagingSenderId: "1098843537898",
    appId: "1:1098843537898:web:7c1257db583183030e7293"
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