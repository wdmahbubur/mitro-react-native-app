import React from 'react';

import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Box, Center, HStack} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const recipients = [
    {
        name: 'Standard Chartered Bank',
        accountNumber: '1234 *** 789',
        logo: 'https://i.ibb.co/XbWBNr7/scb.png',
    },
    {
        name: 'Standard Chartered Bank',
        accountNumber: '1234 *** 789',
        logo: 'https://i.ibb.co/XbWBNr7/scb.png',
    },
    {
        name: 'Standard Chartered Bank',
        accountNumber: '1234 *** 789',
        logo: 'https://i.ibb.co/XbWBNr7/scb.png',
    },
];

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
            <View style={styles.myRecipients}>
                <Text style={styles.myRecipients.title}>My Recipients</Text>

                <View style={styles.myRecipients.list}>
                    {recipients.map((recipient, index) => (
                        <View key={index} style={styles.myRecipients.list.item}>
                            <TouchableNativeFeedback onPress={() => {}}>
                                <HStack
                                    style={styles.myRecipients.list.recipient}
                                    space={2}>
                                    <Box
                                        w="1/5"
                                        style={
                                            styles.myRecipients.list.recipient
                                                .logoArea
                                        }>
                                        <Image
                                            source={{
                                                uri: 'https://reactjs.org/logo-og.png',
                                            }}
                                            style={
                                                styles.myRecipients.list
                                                    .recipient.logoArea.logo
                                            }
                                        />
                                    </Box>
                                    <Box w="4/5">
                                        <Text
                                            style={
                                                styles.myRecipients.list
                                                    .recipient.recipientTitle
                                            }>
                                            {recipient.name}
                                        </Text>
                                        <Text
                                            style={
                                                styles.myRecipients.list
                                                    .recipient.accountNumber
                                            }>
                                            Account: {recipient.accountNumber}
                                        </Text>
                                    </Box>
                                </HStack>
                            </TouchableNativeFeedback>
                        </View>
                    ))}
                </View>
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
    myRecipients: {
        marginTop: 40,
        title: {
            fontSize: 16,
        },
        list: {
            item: {
                marginTop: 20,
            },
            recipient: {
                display: 'flex',
                alignItem: 'stretch',
                logoArea: {
                    padding: 2,
                    position: 'relative',
                    width: 60,
                    height: 60,
                    logo: {
                        width: '100%',
                        height: '100%',
                    },
                },
                recipientTitle: {
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#000',
                },
                accountNumber: {
                    fontSize: 15,
                    marginTop: 8,
                },
            },
        },
    },
});

export default PaymentRequest;
