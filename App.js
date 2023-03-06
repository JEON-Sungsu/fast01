import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    FlatList,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {
    getStatusBarHeight,
    getBottomSpace,
} from 'react-native-iphone-x-helper';
import { React, useState } from 'react';
import Header from './src/Header';
import MyProfile from './src/Profile';
import { myProfile, friendProfiles } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import TabBar from './src/Tabbar';
import Profile from './src/Profile';

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
    const [isOpened, setIsOpened] = useState(true);
    const [selectedTabIdx, setSelectedTabIdx] = useState(0);

    const onPressArrow = () => {
        setIsOpened(!isOpened);
    };

    const ItemSeparatorComponent = () => <Margin height={13} />;
    const renderItem = ({ item }) => (
        <View>
            <Profile
                uri={item.uri}
                name={item.name}
                introduction={item.introduction}
                isMe={false}
            />
        </View>
    );

    const ListHeaderComponent = () => (
        <View style={{ backgroundColor: 'white' }}>
            <Header />
            <Margin height={10}></Margin>
            <Profile
                uri={myProfile.uri}
                name={myProfile.name}
                introduction={myProfile.introduction}
                isMe={true}
            />
            <Margin height={15}></Margin>
            <Division />
            <Margin height={12}></Margin>
            <FriendSection
                friendProfileLen={friendProfiles.length}
                onPressArrow={onPressArrow}
                isOpened={isOpened}
            />
            <Margin height={5}></Margin>
        </View>
    );

    const ListFooterComponent = () => <Margin height={10} />;

    return (
        <View style={styles.container}>
            <FlatList
                data={isOpened ? friendProfiles : null}
                keyExtractor={(_, index) => {
                    index;
                }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                stickyHeaderIndices={[0]}
                ItemSeparatorComponent={ItemSeparatorComponent}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                showsVerticalScrollIndicator={false}
            />
            <TabBar
                selectedTabIdx={selectedTabIdx}
                setSelectedTabIdx={setSelectedTabIdx}
            />
        </View>
    );

    // return (
    //     <View style={styles.container}>
    //         <View style={{ flex: 1, paddingHorizontal: 15 }}>
    //             <Header />
    //             <Margin height={10}></Margin>
    //             <MyProfile
    //                 uri={myProfile.uri}
    //                 name={myProfile.name}
    //                 introduction={myProfile.introduction}
    //             />
    //             <Margin height={15}></Margin>
    //             <Division />
    //             <Margin height={12}></Margin>
    //             <FriendSection
    //                 friendProfileLen={friendProfiles.length}
    //                 onPressArrow={onPressArrow}
    //                 isOpened={isOpened}
    //             />
    //             <FriendList data={friendProfiles} isOpened={isOpened} />
    //         </View>
    //         <TabBar
    //             selectedTabIdx={selectedTabIdx}
    //             setSelectedTabIdx={setSelectedTabIdx}
    //         />
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: statusBarHeight,
    },
});
