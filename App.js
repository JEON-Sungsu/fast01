import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import {React,useState} from 'react';
import Header from './src/Header';
import MyProfile from './src/Profile';
import { myProfile, friendProfiles } from './src/data';
import Margin from './src/Margin'
import Division from './src/Division'
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList'
import TabBar from './src/Tabbar'

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
    const [isOpened, setIsOpened] = useState(true);
    const [selectedTabIdx, setSelectedTabIdx] = useState(0);

    const onPressArrow = () => {
        setIsOpened(!isOpened);
    }

    return (
            <View style={styles.container}>
               <View style={{flex:1, paddingHorizontal: 15,}}>
                    <Header />
                    <Margin height={10}></Margin>
                    <MyProfile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
                    <Margin height={15}></Margin>
                    <Division />
                    <Margin height={12}></Margin>
                    <FriendSection
                        friendProfileLen = {friendProfiles.length}
                        onPressArrow ={ onPressArrow }
                        isOpened={isOpened}
                    />
                    <FriendList 
                        data={friendProfiles}
                        isOpened={isOpened}
                    />
               </View>
               <TabBar
                    selectedTabIdx={selectedTabIdx}
                    setSelectedTabIdx={setSelectedTabIdx}
               />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        paddingTop:statusBarHeight,
    },
});
