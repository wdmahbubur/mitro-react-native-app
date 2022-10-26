import React, {useState} from 'react';

import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Slider} from 'native-base';

import AntIcon from 'react-native-vector-icons/AntDesign';

import OpenExternalUrl from '../utils/OpenExternalUrl';
import AppBar from '../components/home/AppBar';
import BottomTab from '../components/BottomTab';

const Home = () => {
    const [withdrawAmount, setWithdrawAmount] = useState('0');
    const onChangeWithdrawAmount = value => {
        setWithdrawAmount(value.toString());
    };

    return (
        <>
            {/* AppBar Start */}
            <AppBar />
            {/* AppBar Close */}

            {/* Available Balance Section Start */}
            <View style={styles.availableBalanceSection}>
                <Text style={styles.availableBalanceSection.balanceStyle}>
                    Available Balance ৳ 2,00,000.00
                </Text>
                <Text style={styles.availableBalanceSection.date}>
                    1st Feb - 28th Feb
                </Text>
            </View>
            {/* Available Balance Section Close */}

            {/* Withdraw Balance Section Start */}
            <View style={styles.withdrawBalanceSection}>
                <Text style={styles.withdrawBalanceSection.titleText}>
                    How much money do you want to withdraw?
                </Text>

                <View style={styles.withdrawBalanceSection.inputArea}>
                    <Text style={styles.withdrawBalanceSection.inputArea.sign}>
                        ৳
                    </Text>
                    <TextInput
                        value={withdrawAmount}
                        onChangeText={onChangeWithdrawAmount}
                        style={styles.withdrawBalanceSection.inputArea.input}
                        keyboardType="numeric"
                    />
                </View>

                <Slider
                    w="100%"
                    maxW="100%"
                    value={parseInt(withdrawAmount, 10)}
                    minValue={0}
                    maxValue={200000}
                    onChange={onChangeWithdrawAmount}
                    step={1}
                    style={styles.withdrawBalanceSection.slider}
                    colorScheme="purple"
                    size="md">
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>

                <View style={styles.withdrawBalanceSection.nextButtonView}>
                    <Pressable onPress={() => {}}>
                        <View
                            style={
                                styles.withdrawBalanceSection.nextButtonView
                                    .nextButtonOuterBorder
                            }>
                            <View
                                style={
                                    styles.withdrawBalanceSection.nextButtonView
                                        .nextButtonOuterBorder
                                        .nextButtonInnerView
                                }>
                                <Text
                                    style={
                                        styles.withdrawBalanceSection
                                            .nextButtonView
                                            .nextButtonOuterBorder
                                            .nextButtonInnerView.text
                                    }>
                                    NEXT{' '}
                                    <AntIcon
                                        name="right"
                                        size={15}
                                        color="#fff"
                                    />
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
            {/* Withdraw Balance Section Close */}

            {/* How Mitro Works Section Start */}
            <View style={styles.howMitroWorksSection}>
                <Text style={styles.howMitroWorksSection.titleText}>
                    How Mitro Works?
                </Text>
                <Text style={styles.howMitroWorksSection.subtitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, ducimus.
                    <OpenExternalUrl url={'https://www.linkedsage.com/'}>
                        <Text
                            style={
                                styles.howMitroWorksSection.subtitle
                                    .learnMoreLinks
                            }>
                            Learn More
                        </Text>
                    </OpenExternalUrl>
                </Text>
            </View>
            {/* How Mitro Works Section Close */}

            {/* Bottom Bar Start */}
            <BottomTab />
            {/* Bottom Bar Close */}
        </>
    );
};

const styles = StyleSheet.create({
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
        date: {
            color: '#cf55cf',
            fontWeight: '700',
            fontSize: 16,
            marginTop: 4,
        },
    },
    withdrawBalanceSection: {
        marginTop: 24,
        paddingLeft: 15,
        titleText: {
            fontSize: 20,
            fontWeight: '600',
            color: '#000',
            lineHeight: 30,
        },
        inputArea: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: 2,
            sign: {
                fontSize: 24,
                fontWeight: '600',
                marginTop: 8,
                color: '#000',
            },
            input: {
                width: '100%',
                paddingHorizontal: 2,
                paddingTop: 2,
                paddingBottom: 0,
                fontSize: 60,
                borderBottomColor: '#edebeb',
                borderBottomWidth: 1,
                color: '#000',
            },
        },
        slider: {
            marginTop: 40,
        },
        nextButtonView: {
            marginTop: 30,
            alignItems: 'center',
            nextButtonOuterBorder: {
                borderWidth: 3,
                borderColor: '#c900c9',
                borderRadius: 100,
                padding: 2,
                height: 90,
                width: 90,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                nextButtonInnerView: {
                    borderRadius: 100,
                    height: 80,
                    width: 80,
                    backgroundColor: '#c900c9',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    text: {
                        color: '#fff',
                    },
                },
            },
        },
    },
    howMitroWorksSection: {
        marginTop: 30,
        paddingLeft: 15,
        titleText: {
            fontSize: 24,
            fontWeight: '600',
            color: '#000',
        },
        subtitle: {
            marginTop: 8,
            fontSize: 14,
            learnMoreLinks: {
                color: 'purple',
                fontSize: 12,
            },
        },
    },
});

export default Home;
