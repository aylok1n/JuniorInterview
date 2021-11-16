import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Pressable } from "react-native";
import { useFonts } from 'expo-font';

export const HomeScreen = (props) => {
    const [seacrh, setSeacrh] = React.useState('')
    const [nav, setNav] = React.useState('Foods')
    const [loaded] = useFonts({
        'SF-Pro-Rounded-Bold': {
            uri: require('../assets/fonts/SF-Pro-Rounded-Bold.otf'),
        },
        'SF-Pro-Rounded-Regular': {
            uri: require('../assets/fonts/SF-Pro-Rounded-Regular.otf'),
        },
        'SF-Pro-Text': {
            uri: require('../assets/fonts/SF-Pro-Text.otf'),
        },
        'SF-Pro-Regular': {
            uri: require('../assets/fonts/SF-Pro-Regular.ttf'),
        }
    });

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.header}>
                    <View style={styles.headerButtonsContainer}>
                        <TouchableOpacity>
                            <Image style={{ height: 22, width: 22 }} resizeMode='contain' source={require('../assets/img/HomeScreen/burger.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ height: 22, width: 22 }} resizeMode='contain' source={require('../assets/img/HomeScreen/shopping-cart.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>
                            Delicious{'\n'}food for you
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Search" style={styles.input} value={seacrh} onChangeText={setSeacrh} />
                        <TouchableOpacity style={styles.inputButton}>
                            <Image style={{ height: 18, width: 18 }} resizeMode='contain' source={require('../assets/img/HomeScreen/loupe.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.nav} contentContainerStyle={styles.navContainer}>
                    <TouchableOpacity style={[styles.navButton, nav == 'Foods' ? styles.navButtonActive : {}]}>
                        <Text style={[styles.navButtonText, nav == 'Foods' ? styles.navButtonTextActive : {}]}>Foods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navButton, nav == 'Drinks' ? styles.navButtonActive : {}]}>
                        <Text style={[styles.navButtonText, nav == 'Drinks' ? styles.navButtonTextActive : {}]}>Drinks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navButton, nav == 'Snacks' ? styles.navButtonActive : {}]}>
                        <Text style={[styles.navButtonText, nav == 'Snacks' ? styles.navButtonTextActive : {}]}>Snacks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.navButton, nav == 'Sauce' ? styles.navButtonActive : {}]}>
                        <Text style={[styles.navButtonText, nav == 'Sauce' ? styles.navButtonTextActive : {}]}>Sauce</Text>
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView showsHorizontalScrollIndicator={false} scrollEnabled={false} horizontal={true} style={styles.foods} contentContainerStyle={{ paddingHorizontal: '10%' }}>
                    <Pressable onPress={() => props.navigation.navigate('ProfileScreen')} style={styles.dishItemShadow}>
                        <Image resizeMode={'contain'} style={styles.dishImage} source={require('../assets/img/HomeScreen/Dish1.png')} />
                        <View style={styles.dishItem}>
                            <View style={{ marginTop: '25%' }}>
                                <Text style={styles.dishTitle}>Veggie{'\n'}tomato mix</Text>
                                <Text style={styles.dishPrice}>N1,900</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable style={styles.dishItemShadow}>
                        <Text style={styles.dishItemSeeMore}>See more</Text>
                        <Image resizeMode={'contain'} style={[styles.dishImage, { marginLeft: '-20%' }]} source={require('../assets/img/HomeScreen/Dish2.png')} />
                        <View style={styles.dishItem}>
                            <View style={{ marginTop: '25%' }}>
                                <Text style={styles.dishTitle}>Spicy fish{'\n'}sauce</Text>
                                <Text style={styles.dishPrice}>N2,300.99</Text>
                            </View>
                        </View>
                    </Pressable>
                </ScrollView>
                <View style={styles.bottomNav}>
                    <TouchableOpacity>
                        <Image style={{ height: 30, width: 50, marginHorizontal: '2%' }} source={require('../assets/img/HomeScreen/homeIcon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
                        <Image style={{ height: 24, width: 21, marginHorizontal: '2%' }} source={require('../assets/img/HomeScreen/user.png')} />
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
    header: {
        width: '80%',
        marginTop: 34,
    },
    logo: {
        height: 150,
        width: 150
    },
    headerButtonsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 23
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
    headerTextContainer: {
        justifyContent: 'flex-start',
    },
    headerText: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 34
    },
    inputContainer: {
        marginVertical: 20,
        width: '100%',
        position: 'relative'
    },
    input: {
        height: 60,
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        fontSize: 17,
        color: '#000',
        backgroundColor: '#EFEEEE',
        borderRadius: 50,
        padding: 69,
        paddingVertical: 20,
        width: '100%'
    },
    inputButton: {
        position: 'absolute',
        left: 35,
        top: 20
    },
    forgotText: {
        fontFamily: 'SF-Pro-Text',
        fontWeight: '600',
        lineHeight: 20.3,
        fontSize: 17,
        color: '#FA4A0C'
    },
    nav: {
        width: '100%',
        marginTop: 20,
    },
    navContainer: {
        paddingHorizontal: '15%'
    },
    foods: {
        width: '100%',
    },
    navButton: {
        paddingHorizontal: 16,
        marginHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navButtonActive: {
        borderBottomWidth: 3,
        borderColor: '#FA4A0C',
        borderRadius: 1
    },
    navButtonText: {
        fontFamily: 'SF-Pro-Regular',
        fontWeight: '400',
        fontSize: 17,
        color: '#9A9A9D'
    },
    navButtonTextActive: {
        color: '#FA4A0C'
    },
    dishItemShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        paddingHorizontal: '5%',
        paddingVertical: 40,
        position: 'relative'
    },
    dishItem: {
        width: width * 0.5,
        height: width * 0.6,
        borderRadius: 30,
        marginTop: -width * 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        position: 'relative'
    },
    dishImage: {
        width: '100%',
        zIndex: 1,
        height: width * 0.5,
    },
    dishTitle: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '600'
    },
    dishPrice: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: -20,
        color: '#FA4A0C',
        fontWeight: '700'
    },
    bottomNav: {
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dishItemSeeMore: {
        position: 'absolute',
        left: '15%',
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: '#FA4A0C',
        fontSize: 15,
        top: 20
    }
})