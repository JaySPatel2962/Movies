import React from 'react'
import {
    Alert,
    FlatList,
    Modal,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Dimensions,
    ActivityIndicator,
    ToastAndroid,
    Platform
} from 'react-native';
import { NavigationKeys } from '../navigation/NavigationKeys';

function MoviePhoto(props) {
    // console.log(" Movie = ", props.data);


    return (
        <View style={{ paddingHorizontal: 10 }} >
            <TouchableOpacity
                onPress={() => props.navigation.push(NavigationKeys.DetailedScreen,
                    {
                        data: props.data
                    }
                )}
            >
                <Image
                    source={require("../assets/img.jpg")}
                    resizeMode={'cover'}
                    style={{
                        width: 120,
                        height: 180

                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default MoviePhoto