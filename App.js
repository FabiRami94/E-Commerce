
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from './navigation/BottomTabNavigation';

const stack = createNativeStackNavigator();

export default App = () => {

    const [fontsLoaded] = useFonts({
        // regular: require(""), //Place 65 Min.. same
    });

    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name='Botton Navigation'
                    component={BottomTabNavigation}
                    options={{headerShown: false}}
                >
                </stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    )
};