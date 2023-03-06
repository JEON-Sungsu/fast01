import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'gray' }}>친구 {props.friendProfileLen}</Text>

            <TouchableOpacity
                onPress={props.onPressArrow}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                <MaterialIcons
                    name={
                        props.isOpened
                            ? 'keyboard-arrow-up'
                            : 'keyboard-arrow-down'
                    }
                    size={24}
                    color="lightgray"
                />
            </TouchableOpacity>
        </View>
    );
};
