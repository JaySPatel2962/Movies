/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
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
    TextInput,
    Dimensions,
    ActivityIndicator,
    ToastAndroid,
    Image,
    Platform
} from 'react-native';
import { NavigationKeys } from '../navigation/NavigationKeys';

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;
let timer;
import Carousel from 'react-native-snap-carousel';

class Search extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            search: "",
            data: []
        };

        this.setSearch = this.setSearch.bind(this);
        this.setData = this.setData.bind(this);
        this.setLoading = this.setLoading.bind(this);

        this.fetchData = this.fetchData.bind(this);
    }

    setSearch(search) {
        console.log(" search = ", search);
        this.setState({ search: search });

        this.fetchData(search);
    }

    setData(data) {
        this.setState({ data: data });
    }

    setLoading(load) {
        this.setState({ loading: load });
    }


    fetchData(search) {
        // applied debouncing Concept
        clearTimeout(timer);

        console.log("Hello = ", timer);
        timer = setTimeout(async () => {
            console.log("Hello 2 = ", timer);

            this.setLoading(true);

            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=feb6f0eeaa0a72662967d77079850353&query=${search}`)
                .then(res => res.json())
                .then(res => {
                    console.log(" Data = ", res);
                    this.setData(res.results);
                    this.setLoading(false);
                })
                .catch(err => {
                    console.log("Error = ", err);
                    this.setLoading(false);
                })

        }, 300);

    }


    render() {

        // console.log("HOME");

        // this.timer();

        return (
            <View style={{ flex: 1, backgroundColor: "#f6f8ff" }}>
                <ScrollView
                    style={{ width: Winwidth, marginBottom: '20%' }}
                    showsVerticalScrollIndicator={false} >


                    <TextInput
                        style={{
                            flex: 1, marginVertical: '3%', marginHorizontal: 10, backgroundColor: '#fff', borderRadius: 100, color: '#000000', fontFamily: 'Montserrat-Light', fontSize: 14, paddingLeft: "3%",
                        }}
                        placeholder={"Search"}
                        autoFocus={true}
                        onChangeText={(text) => this.setSearch(text)}
                        value={this.state.search}
                        placeholderTextColor="#C0C8E7"
                    />

                    {
                        this.state.loading
                            ?
                            <ActivityIndicator size={'large'} style={{ marginiTop: 20 }} />
                            :
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginHorizontal: Winwidth * 0.0266 }} >
                                <FlatList
                                    data={this.state.data}
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}

                                    renderItem={({ item, index }) =>
                                        <TouchableOpacity
                                            style={[
                                                {
                                                    marginVertical: 10,
                                                },
                                                index % 2 == 0 ? styles.rightMargin : styles.leftMargin]
                                            }
                                            onPress={() => this.props.navigation.push(NavigationKeys.DetailedScreen,
                                                {
                                                    data: item
                                                }
                                            )}
                                        >
                                            <Image
                                                source={require("../assets/img.jpg")}
                                                resizeMode={'cover'}
                                                style={{
                                                    width: Winwidth * 0.46,
                                                    height: Winheight * 0.40,
                                                }}
                                            />

                                            <Text style={{ flex: 1, marginLeft: 5, marginTop: 5, color: "#808080", width: Winwidth * 0.46 }} >
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>
                                    }
                                />

                            </View>
                    }

                </ScrollView>
            </View>
        );
    }
}


export default Search;


const styles = StyleSheet.create({
    rightMargin: {
        marginRight: Winwidth * 0.0133
    },
    leftMargin: {
        marginLeft: Winwidth * 0.0133
    }
});