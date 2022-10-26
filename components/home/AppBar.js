import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppBar() {
    return (
        <View style={styles.appBar}>
            <View style={styles.appBar.user}>
                <View style={styles.appBar.user.avatar}>
                    <Image
                        source={require('../../assets/images/img_avatar.png')}
                        style={styles.appBar.user.avatar.image}
                    />
                </View>
                <View style={styles.appBar.user.details}>
                    <Text style={styles.appBar.user.details.greetings}>
                        Welcome
                    </Text>
                    <Text style={styles.appBar.user.details.name}>
                        Jhon Smith
                    </Text>
                </View>
            </View>
            <View>
                <Pressable
                    onPress={() => {
                        console.log('Clicked Message');
                    }}>
                    <MaterialIcon
                        name="message-processing-outline"
                        size={36}
                        color="#fa48f7"
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        user: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            avatar: {
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: '#fa48f7',
                overflow: 'hidden',
                image: {
                    width: '100%',
                    height: '100%',
                },
            },
            details: {
                marginLeft: 6,
                greetings: {
                    fontSize: 20,
                    color: '#000',
                    fontWeight: '600',
                },
                name: {
                    fontSize: 16,
                    color: '#9e9e9e',
                },
            },
        },
    },
    availableBalanceSection: {
        marginTop: 20,
        backgroundColor: '#fcebfc',
        borderRadius: 10,
        padding: 16,
        balanceStyle: {
            color: '#cf55cf',
            fontWeight: '600',
            fontSize: 20,
        },
    },
});
