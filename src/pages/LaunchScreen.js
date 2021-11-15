import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';

export const LaunchScreen = (props) => {
    const [loaded] = useFonts({
        'SF-Pro-Rounded-Bold': {
            uri: require('../assets/fonts/SF-Pro-Rounded-Bold.otf'),
        },
        'SF-Pro-Text': {
            uri: require('../assets/fonts/SF-Pro-Text.otf'),
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} resizeMode='contain' source={require('../assets/img/LaunchScreen/logo.png')} />
                </View>
                <Text style={styles.mainText}>Food for{'\n'}Everyone</Text>
            </View>
            <Image style={styles.mainImage} source={require('../assets/img/LaunchScreen/mainImg.png')} />
            <View style={styles.mainButtonContainer}>
                <TouchableOpacity onPressIn={() => props.navigation.navigate('LoginScreen')} style={styles.mainButton}>
                    <Text style={styles.mainButtonText}>Get starteed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#FF4B3A'
    },
    header: {
        marginTop: 56,
        marginRight: 50,
    },
    logoContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 76,
        height: 76,
    },
    logo: {
        width: 50,
        height: 45,
    },
    mainText: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 65,
        lineHeight: 62,
        marginTop: 20,
        color: '#FFFFFF'
    },
    mainImage: {
        width: width,
        height: width * 1.2
    },
    mainButtonContainer: {
        width: width,
        bottom: 30,
        alignItems: 'center',
        position: 'absolute',
    },
    mainButton: {
        zIndex: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        paddingHorizontal: 100,
        paddingVertical: 25
    },
    mainButtonText: {
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        fontSize: 17,
        color: '#FF460A'
    }
})