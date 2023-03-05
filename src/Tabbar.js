import {TouchableOpacity, View} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { Ionicons } from '@expo/vector-icons';

const bottomSpace = getBottomSpace();

const TabButton = ({ isSelected, onPress, activeIconName, inactiveIconName }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={{flex:1, justifyContent:"center",alignItems:"center",paddingVertical:10,}}>
            <Ionicons name={isSelected ? activeIconName : inactiveIconName } size={24} color="black" />
        </TouchableOpacity>
    )
}


export default (props) => {
    return (
        <View style={{ width:"100%", flexDirection:"row", paddingBottom:bottomSpace, borderTopWidth:0.5, borderTopColor:"gray" }}>
            <TabButton
                isSelected={props.selectedTabIdx === 0}
                onPress={() => props.setSelectedTabIdx(0)} 
                activeIconName ={"person"}
                inactiveIconName ={"person-outline"}
            />
            <TabButton
                isSelected={props.selectedTabIdx === 1}
                onPress={() => props.setSelectedTabIdx(1)} 
                activeIconName ={"chatbubble"}
                inactiveIconName ={"chatbubble-outline"}
            />
            <TabButton
                isSelected={props.selectedTabIdx === 2}
                onPress={() => props.setSelectedTabIdx(2)} 
                activeIconName ={"search"}
                inactiveIconName ={"search-outline"}
            />
            <TabButton
                isSelected={props.selectedTabIdx === 3}
                onPress={() => props.setSelectedTabIdx(3)} 
                activeIconName ={"add-circle"}
                inactiveIconName ={"add-circle-outline"}
            />
        </View>
    )
}