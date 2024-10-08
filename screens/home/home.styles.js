
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: 20,
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: 12
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 16, 
        height: 16, 
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
        zIndex: 3,
    },
    cartNumber: {
        fontFamily: 'regular',
        fontWeight: '600',
        fontSize: 10,
        color: 'white',
    }
});

export default styles;