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
    Platform
} from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { NavigationKeysType, RouteParamMap, NavigationKeys } from '../navigation/NavigationKeys';
// import CustomAppBar from '../navigation/bars/CustomAppBar';
// import { Spinner, Button, } from 'native-base';
// import { globalBorderRadius, primaryColor, tertiaryColor, white } from '../theme/theme';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Progress from 'react-native-progress';

import { Image, Pressable, Linking } from 'react-native';

// import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// import NotifyCard from '../components/NotifyCard';
// import Tag from '../components/Tag';
// import SplashScreen from 'react-native-splash-screen';
// import SavingsPaylaterCard from '../components/SavingsPaylaterCard';
// import { config } from '../utils/config/general';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// import CountDown from 'react-native-countdown-component';

import Carousel from 'react-native-snap-carousel';
import Poster from '../components/Poster';

type DetailedScreenNavProps = StackScreenProps<
    RouteParamMap,
    NavigationKeysType['DetailedScreen']
>;

export interface Props extends DetailedScreenNavProps {
    user: AuthState;
    setAppVersion: (app_version: string) => void;
}
interface State extends LoadingAndRefreshableState {
    feesData: object;
    savingsAmt: number;
    creditScore: number;
    language: string;
}

let updater: any;

class DetailedScreen extends Component<Props, State> {
    private dataRefreshHook:
        | (<T = NavigationProp<ParamListBase> | undefined>() => void)
        | undefined;
    private flatListRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            load: true,
            data: this.props.route.params.data,
        };

    }


    render() {

        console.log(" Detailed Screen Data = ", this.state.data);

        // this.timer();

        return (
            <View style={{ flex: 1, backgroundColor: "#f6f8ff" }}>

                <Poster title={this.state.data.title} />

                <View style={{ marginHorizontal: 10 }} >

                    <Text style={{ marginTop: 15, fontSize: 16, color: "#808080" }} >
                        <Text style={{ fontWeight: "bold" }} >
                            {"Release Date: "}
                        </Text>
                        {this.state.data.release_date}
                    </Text>
                    
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold", color: "#000"}} >
                        Overview
                    </Text>

                    <Text style={{ marginTop: 5, marginLeft: 4, fontSize: 16, color: "#808080" }} >
                        {this.state.data.overview}
                    </Text>
                </View>


            </View>
        );
    }
}


export default DetailedScreen;


const styles = StyleSheet.create({

});