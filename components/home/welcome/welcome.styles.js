
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    welcomeText: (color) => ({
        color: color
    }),



    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 20,
        marginVertical: 10, 
    },
    searchIcon: {
        marginHorizontal: 10,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: 'red',
        marginRight: 10,
        borderRadius: 10,

    },
    searchInput: {
        width: '100',
        height: '100',
        

    }
});

export default styles;