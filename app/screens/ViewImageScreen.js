import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, StatusBar, Platform } from 'react-native';

// Separate our custom code from 3rd party imports
import colors from '../config/colors';

export function ViewImageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.btnHolder}>
                <View style={styles.closeBtn} />
                <View style={styles.deleteBtn} />
            </View>
            <Image source={require(`../assets/chair.jpg`)} style={styles.image} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    btnHolder: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 25 : 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 75,
    },
    closeBtn: {
        backgroundColor: colors.primary,
        width: 50,
        height: 50
    },
    deleteBtn: {
        backgroundColor: colors.secondary,
        width: 50,
        height: 50
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignSelf: 'center',
        width: `100%`,
        marginBottom: 125,
    }
});
