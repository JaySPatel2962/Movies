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

function Poster(props) {

    let Winheight = Dimensions.get('window').height;
    let Winwidth = Dimensions.get('window').width;

    return (
        <View>
            <View>
                <Image
                    source={require("../assets/poster.jpg")}
                    resizeMode={'cover'}
                    style={{
                        width: Winwidth,
                        height: 300
                    }}
                />

                <Text style={{ fontWeight: "bold", fontSize: 20, color: "#000", left: 190, marginTop: 20, height: 70 }} >
                    Title: {props.title}
                </Text>

            </View>



            <Image
                source={require("../assets/img.jpg")}
                resizeMode={'cover'}
                style={{
                    position: "absolute",
                    top: 210,
                    left: 50,
                    width: 120,
                    height: 180,
                }}
            />


        </View>
    )
}

export default Poster