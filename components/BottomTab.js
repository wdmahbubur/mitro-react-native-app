import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

import {Icon, HStack, Center} from 'native-base';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTab() {
    const [selected, setSelected] = React.useState(0);
    return (
        <View style={styles.bottomTab}>
            <HStack
                bg="dark.700"
                alignItems="center"
                safeAreaBottom
                borderRadius="5"
                py={3}>
                <Pressable
                    cursor="pointer"
                    opacity={selected === 0 ? 1 : 0.5}
                    py="3"
                    flex={1}
                    onPress={() => setSelected(0)}>
                    <Center>
                        <Icon
                            mb="1"
                            as={<MaterialIcon name="home-outline" />}
                            color={selected === 0 ? '#c900c9' : '#ababab'}
                            size="xl"
                        />
                    </Center>
                </Pressable>
                <Pressable
                    cursor="pointer"
                    opacity={selected === 1 ? 1 : 0.5}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(1)}>
                    <Center>
                        <Icon
                            mb="1"
                            as={<MaterialIcon name="credit-card-outline" />}
                            color={selected === 1 ? '#c900c9' : '#ababab'}
                            size="xl"
                        />
                    </Center>
                </Pressable>
                <Pressable
                    cursor="pointer"
                    opacity={selected === 2 ? 1 : 0.6}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(2)}>
                    <Center>
                        <Icon
                            mb="1"
                            as={<Ionicons name="notifications-outline" />}
                            color={selected === 2 ? '#c900c9' : '#ababab'}
                            size="xl"
                        />
                    </Center>
                </Pressable>
                <Pressable
                    cursor="pointer"
                    opacity={selected === 3 ? 1 : 0.5}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(3)}>
                    <Center>
                        <Icon
                            mb="1"
                            as={<Ionicons name="menu" />}
                            color={selected === 3 ? '#c900c9' : '#ababab'}
                            size="xl"
                        />
                    </Center>
                </Pressable>
            </HStack>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomTab: {
        marginVertical: 40,
        marginHorizontal: 15,
    },
});
