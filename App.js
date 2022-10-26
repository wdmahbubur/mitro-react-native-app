import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';

import Home from './screens/Home';
import PaymentRequest from './screens/PeymentRequest';

const App = () => {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={styles.statusbar.backgroundColor}
                />
                {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}> */}
                {/* <Home /> */}
                <PaymentRequest />
                {/* </ScrollView> */}
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff',
        height: '100%',
    },
    statusbar: {
        backgroundColor: '#fff',
    },
});

export default App;
