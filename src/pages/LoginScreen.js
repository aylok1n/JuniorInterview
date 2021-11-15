import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useFonts } from 'expo-font';

export const LoginScreen = (props) => {
    const [formType, setFormType] = React.useState('login')
    const [email, setEmail] = React.useState('Dosamarvis@gmail.com')
    const [password, setPassword] = React.useState('12345678')
    const [loaded] = useFonts({
        'SF-Pro-Rounded-Bold': {
            uri: require('../assets/fonts/SF-Pro-Rounded-Bold.otf'),
        },
        'SF-Pro-Text': {
            uri: require('../assets/fonts/SF-Pro-Text.otf'),
        },
    });

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.headerWrapper}>
                    <View style={styles.header}>
                        <Image style={styles.logo} source={require('../assets/img/LoginScreen/HeaderLogo.png')} />
                        <View style={styles.headerButtonsContainer}>
                            <TouchableOpacity style={[styles.headerButton, formType == 'login' ? styles.headerButtonActive : false]}>
                                <Text style={styles.headerButtonText} >Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.headerButton, formType == 'singup' ? styles.headerButtonActive : false]}>
                                <Text style={styles.headerButtonText} >Sign-up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email address</Text>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.input} value={password.replace(/[\s\S]/g, "* ")} onChangeText={setPassword} />
                        <TouchableOpacity style={{ marginVertical: 25 }}>
                            <Text style={styles.forgotText} >Sign-up</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPressIn={() => props.navigation.navigate('HomeScreen')} style={styles.mainButton}>
                        <Text style={styles.mainButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5'
    },
    headerWrapper: {
        width: width,
        height: width + 20,
    },
    header: {
        width: width,
        height: width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    logo: {
        height: 150,
        width: 150
    },
    headerButtonsContainer: {
        width: '100%',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: -2,
        flexDirection: 'row'
    },
    headerButton: {
        paddingHorizontal: 36,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerButtonActive: {
        borderBottomWidth: 3,
        borderColor: '#FA4A0C',
        borderRadius: 1
    },
    headerButtonText: {
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        fontSize: 18,
        color: '#000000'
    },
    formContainer: {
        width: '100%',
        padding: 50,
        alignItems: 'center'
    },
    inputContainer: {
        marginBottom: 40,
        width: '100%',
        alignItems: 'flex-start'
    },
    label: {
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.4)'
    },
    input: {
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        fontSize: 17,
        color: '#000',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingVertical: 4,
        width: '100%'
    },
    forgotText: {
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        fontSize: 17,
        color: '#FA4A0C'
    },

    mainButton: {
        marginTop: 20,
        backgroundColor: '#FF460A',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 25
    },
    mainButtonText: {
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        fontSize: 17,
        color: '#F6F6F9'
    }
})