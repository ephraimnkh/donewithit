import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';

export function WelcomeScreen() {
    return (
        <View style={{
            flex: 1,
            flexDirection: `row`,
        }}>
            <ImageBackground source={require(`../assets/background.jpg`)} style={styles.image} >
                <Image source={require(`../assets/logo-red.png`)} style={{
                    alignSelf: 'center',
                    width: 100,
                    height: 100,
                    position: 'absolute',
                    top: 85,
                }} />
                <Text style={{
                    alignSelf: 'center',
                    position: 'absolute',
                    top: 85 + 100,
                }}>Sell What You Don't Need</Text>
                <TouchableWithoutFeedback onPress={() => { console.log("Login User") }}>
                    <View style={{
                        backgroundColor: '#fc5c65',
                        width: `100%`,
                        height: 70,
                        position: 'absolute',
                        bottom: 70
                    }}
                    />
                </TouchableWithoutFeedback>
                <View style={{
                    backgroundColor: '#4ECDC4',
                    width: `100%`,
                    height: 70,
                    position: 'absolute',
                    bottom: 0
                }}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});
