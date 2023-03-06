import { Image, View, Text } from 'react-native';
import Margin from './Margin';
import styled from 'styled-components/native';

const Container = styled.View`
    flex-direction: row;
`;

const ProfileImg = styled.Image`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: ${(props) => props.size * 0.4}px;
`;

export default ({ uri, name, introduction, isMe }) => {
    const size = isMe ? 50 : 40;
    return (
        <Container>
            <ProfileImg source={{ uri }} size={size} />
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                <Text
                    style={{
                        fontWeight: isMe ? 'bold' : undefined,
                        fontSize: isMe ? 16 : 15,
                    }}
                >
                    {name}
                </Text>

                {!!introduction && (
                    <View>
                        <Margin height={isMe ? 6 : 2} />
                        <Text
                            style={{ fontSize: isMe ? 12 : 11, color: 'gray' }}
                        >
                            {introduction}
                        </Text>
                    </View>
                )}
            </View>
        </Container>
    );
};
