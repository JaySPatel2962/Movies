/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Poster from '../components/Poster';


class DetailedScreen extends Component<Props, State> {
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