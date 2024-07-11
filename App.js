
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default App = () => {

    const [fontsLoaded] = useFonts({
        // regular: require(""), //Place 30 Min, same
    });

    return(
        <View>
            <Text >Holaa!!</Text>
        </View>
    )
};