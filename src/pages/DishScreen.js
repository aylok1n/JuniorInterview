import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from 'expo-font';
import { ScrollView } from "react-native-gesture-handler";

export const DishScreen = (props) => {
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
    });
    const paginationDots = [
        { active: true },
        { active: false },
        { active: false },
        { active: false },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerButtonsContainer}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image style={{ height: 22, width: 22 }} resizeMode='contain' source={require('../assets/img/DishScreen/backArrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ height: 22, width: 22 }} resizeMode='contain' source={require('../assets/img/DishScreen/heart.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.foodImageContainer}>
                    <Image style={styles.foodImage} resizeMode='contain' source={require('../assets/img/DishScreen/DishItem.png')} />
                    <View style={styles.dotsContainer}>
                        {paginationDots.map((i, index) =>
                            <Image
                                key={index}
                                style={{ width: 8, height: 8, }}
                                resizeMode='contain'
                                source={i.active
                                    ? require('../assets/img/DishScreen/dotActive.png')
                                    : require('../assets/img/DishScreen/dot.png')
                                }
                            />
                        )}
                    </View>
                </View>
                <View style={styles.dishInfo}>
                    <Text style={styles.dishInfoTitle}>Veggie tomato mix</Text>
                    <Text style={styles.dishInfoNumber}>N1,900</Text>
                    <View style={styles.dishInfoContent}>
                        <Text style={styles.dishInfoLabel}>
                            Delivery info
                        </Text>
                        <Text style={styles.dishInfoText}>
                            Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
                        </Text>
                    </View>
                    <View style={styles.dishInfoContent}>
                        <Text style={styles.dishInfoLabel}>
                            Return policy
                        </Text>
                        <Text style={styles.dishInfoText}>
                            All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.
                        </Text>
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
    foodImageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    foodImage: {
        width: width,
        height: width * 0.7
    },
    dotsContainer: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        marginTop: -30
    },
    dishInfo: {
        width: '100%',
        justifyContent: 'center',
    },
    dishInfoTitle: {
        fontFamily: 'SF-Pro-Rounded-Semibold',
        fontSize: 28,
        width: '100%',
        textAlign: 'center',
        marginTop: 30
    },
    dishInfoNumber: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 22,
        width: '100%',
        textAlign: 'center',
        color: '#FA4A0C',
        marginTop: -10
    },
    dishInfoContent: {
        width: '100%',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    dishInfoLabel: {
        fontFamily: 'SF-Pro-Rounded-Semibold',
        fontSize: 17
    },
    dishInfoText: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    mainButton: {
        marginTop: 20,
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