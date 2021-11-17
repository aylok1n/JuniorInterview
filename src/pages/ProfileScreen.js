import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useFonts } from 'expo-font';

export const ProfileScreen = (props) => {
    const [loaded] = useFonts({
        'SF-Pro-Rounded-Semibold': {
            uri: require('../assets/fonts/SF-Pro-Rounded-Semibold.otf'),
        },
        'SF-Pro-Rounded-Bold': {
            uri: require('../assets/fonts/SF-Pro-Rounded-Bold.otf'),
        },
        'SF-Pro-Regular': {
            uri: require('../assets/fonts/SF-Pro-Regular.ttf'),
        },
        'SF-Pro-Text': {
            uri: require('../assets/fonts/SF-Pro-Text.otf'),
        },
    });
    const payment = [
        {
            title: 'Card',
            active: true,
            imageBackground: '#F47B0A',
            image: require('../assets/img/ProfileScreen/card.png')
        },
        {
            title: 'Bank account',
            active: false,
            imageBackground: '#EB4796',
            image: require('../assets/img/ProfileScreen/bank.png')
        },
        {
            title: 'Card',
            active: false,
            imageBackground: '#F47B0A',
            image: require('../assets/img/ProfileScreen/card.png')
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerButtonsContainer}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image style={{ height: 22, width: 22 }} resizeMode='contain' source={require('../assets/img/ProfileScreen/backArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>My profile</Text>
                    <View style={{ height: 22, width: 22 }} />
                </View>
                <View style={styles.contentBlockContainer}>
                    <Text style={styles.contentBlockLabel}>Information</Text>
                    <View style={styles.contentBlock}>
                        <Image resizeMode='contain' style={styles.userPhoto} source={require('../assets/img/ProfileScreen/userPhoto.png')} />
                        <View style={styles.contentBlockTextContainer}>
                            <Text style={styles.contentBlockTitle}>Marvis Ighedosa</Text>
                            <Text style={styles.contentBlockEmail}>dosamarvis@gmail.com</Text>
                            <Text style={styles.contentBlockText}>No 15 uti street off ovie palace road effurun delta state</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.contentBlockContainer}>
                    <Text style={styles.contentBlockLabel}>Payment Method</Text>
                    <View style={[styles.contentBlock, { flexDirection: 'column' }]}>
                        {payment.map((i, index) => (
                            <View key={index} style={styles.paymentItem}>
                                <Image
                                    resizeMode='contain'
                                    style={{ width: 17, height: 17 }}
                                    source={i.active ? require('../assets/img/ProfileScreen/dotActive.png') : require('../assets/img/ProfileScreen/dot.png')}
                                />
                                <View style={[
                                    styles.paymentItemContent,
                                    index !== payment.length - 1 ? styles.paymentBottomBorder : {}
                                ]}>
                                    <View style={[styles.paymentImageContiner, { backgroundColor: i.imageBackground, }]}>
                                        <Image style={{ height: 15, width: 15 }} resizeMode='contain' source={i.image} />
                                    </View>
                                    <Text style={styles.paymentItemTitle}>{i.title}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.mainButton}>
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
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        paddingHorizontal: '10%',
        paddingTop: '10%',
    },
    headerButtonsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerText: {
        fontFamily: 'SF-Pro-Text',
        fontSize: 18,
        textAlign: 'center',
        color: '#000000',
    },
    contentBlockContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingHorizontal: '2%',
        marginTop: 50
    },
    contentBlockLabel: {
        fontFamily: 'SF-Pro-Text',
        fontSize: 17,
        color: '#000000',
    },
    contentBlock: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: 12,
        borderRadius: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    userPhoto: {
        width: 60,
        height: 60,
        marginHorizontal: 15
    },
    contentBlockTextContainer: {
        flexDirection: 'column',
        width: '55%'
    },
    contentBlockTitle: {
        fontFamily: 'SF-Pro-Text',
        fontSize: 17,
        color: '#000000',
        marginBottom: 5
    },
    contentBlockEmail: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 13,
        color: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 5
    },
    contentBlockText: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 13,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    paymentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingHorizontal: 5,
    },
    paymentImageContiner: {
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentItemContent: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    paymentItemTitle: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 17,
        marginLeft: 10
    },
    paymentBottomBorder: {
        borderBottomColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomWidth: 0.5,
    },
    mainButton: {
        marginTop: 120,
        backgroundColor: '#FA4A0C',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 25,
        marginBottom: 50
    },
    mainButtonText: {
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        fontSize: 17,
        color: '#F6F6F9',
    }
})