import React from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Box, Center, HStack} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const PaymentRequest = () => {
    return (
        <View
            style={{
                backgroundColor: Colors.white,
            }}>
            {/* AppBar Start */}
            <HStack style={styles.appBar}>
                <Box w="1/6">
                    <Pressable
                        onPress={() => {
                            console.log('Clicked Message');
                        }}>
                        <MaterialIcon
                            name="keyboard-arrow-left"
                            size={26}
                            color="#303030"
                        />
                    </Pressable>
                </Box>
                <Center w="4/6">
                    <Text style={styles.appBar.title}>Payment Request</Text>
                </Center>
                <Box w="1/6">
                    <View />
                </Box>
            </HStack>
            {/* AppBar Close */}
            <View style={styles.recipientArea}>
                <Text style={styles.recipientArea.selectRecipient}>
                    Select Recipient
                </Text>
                <Pressable
                    onPress={() => {}}
                    style={styles.recipientArea.addNewRecipient}>
                    <Text style={styles.recipientArea.addNewRecipient.text}>
                        ADD NEW RECIPIENT
                    </Text>
                    <EntypoIcon
                        name="plus"
                        size={26}
                        color="#cf55cf"
                        style={styles.recipientArea.addNewRecipient.icon}
                    />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        title: {
            fontSize: 18,
            fontWeight: '500',
            color: '#303030',
        },
    },
    recipientArea: {
        marginTop: 28,
        selectRecipient: {
            color: '#000',
            fontSize: 18,
            fontWeight: '600',
        },
        addNewRecipient: {
            marginTop: 20,
            borderWidth: 2,
            borderColor: '#cf55cf',
            borderRadius: 10,
            paddingVertical: 12,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
            text: {
                fontSize: 18,
                fontWeight: '600',
                color: '#cf55cf',
            },
            icon: {
                position: 'absolute',
                right: 10,
                top: 10,
            },
        },
    },
});

export default PaymentRequest;
