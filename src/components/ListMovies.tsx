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
import MoviePhoto from './MoviePhoto';

function ListMovies(props) {

    const windowWidth = Dimensions.get("window").width;
    const windowHeigth = Dimensions.get("window").height;

    // console.log(" movies = ", props.data);
    
    return (
        <View>
            <View style={{ marginVertical: 10, marginHorizontal: 15 }} >
                <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000" }} >{props.title}</Text>
            </View>
            <FlatList
                data={props.data}
                horizontal={true}
                style={{ padding: 10 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                    <View>
                        <MoviePhoto navigation={props.navigation} data={item} />
                    </View>
                }
            />
        </View>
    )
}

export default ListMovies