import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = (props) => {
    return <Text>{props.title}</Text>;
};

const Myprofile = (props) => {
    return (
        <Profile
            name="성수"
            uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDX3Qn0sqkofsxpXIImPOGTg1BkdxlC7Ep4OFE_saT3xOplhzz_xEEruryVNMxMi6ffk&usqp=CAU"
            profileSize={40}
        ></Profile>
    );
};

const Division = (props) => {
    return <Text></Text>;
};

const FriendSection = (props) => {
    return <Text></Text>;
};

const FriendList = (props) => {
    return (
        <View>
            <Profile
                name="철수"
                uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDX3Qn0sqkofsxpXIImPOGTg1BkdxlC7Ep4OFE_saT3xOplhzz_xEEruryVNMxMi6ffk&usqp=CAU"
                profileSize={30}
            ></Profile>
            <Profile
                name="영희"
                uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDX3Qn0sqkofsxpXIImPOGTg1BkdxlC7Ep4OFE_saT3xOplhzz_xEEruryVNMxMi6ffk&usqp=CAU"
                profileSize={30}
            ></Profile>
            <Profile
                name="포메"
                uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDX3Qn0sqkofsxpXIImPOGTg1BkdxlC7Ep4OFE_saT3xOplhzz_xEEruryVNMxMi6ffk&usqp=CAU"
                profileSize={30}
            ></Profile>
            <Profile
                name="멍멍"
                uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDX3Qn0sqkofsxpXIImPOGTg1BkdxlC7Ep4OFE_saT3xOplhzz_xEEruryVNMxMi6ffk&usqp=CAU"
                profileSize={30}
            ></Profile>
            <Profile
                name="명구"
                uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDX3Qn0sqkofsxpXIImPOGTg1BkdxlC7Ep4OFE_saT3xOplhzz_xEEruryVNMxMi6ffk&usqp=CAU"
                profileSize={30}
            ></Profile>
        </View>
    );
};

const Profile = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={{
                    uri: props.uri,
                }}
                style={{
                    width: props.profileSize,
                    height: props.profileSize,
                }}
            />
            <Text>{props.name}</Text>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <Header title="친구"></Header>
            <Myprofile></Myprofile>
            <Division></Division>
            <FriendSection></FriendSection>
            <FriendList></FriendList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
