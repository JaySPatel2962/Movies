/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

let Winheight = Dimensions.get('window').height;
let Winwidth = Dimensions.get('window').width;

// import Carousel from 'react-native-snap-carousel';
// import Carousel from 'react-native-reanimated-carousel';
import SplashScreen from 'react-native-splash-screen';

import MoviePhoto from '../components/MoviePhoto';
import ListMovies from '../components/ListMovies';
import Poster from '../components/Poster';

class HomePage extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      latestMovies: [],
      featuredMovies: [],

      entries: [
        title = "Hello",
        title = "Hello",
        title = "Hello",
        title = "Hello",
        title = "Hello",
        title = "Hello",
        title = "Hello",
        title = "Hello",
        title = "Hello",
        title = "Hello",
        title = "Hello"
      ]
    };

    this.loadData = this.loadData.bind(this);
    this.setLatestMovies = this.setLatestMovies.bind(this);
    this.setFeaturedMovies = this.setFeaturedMovies.bind(this);

    this.setIsRefresh = this.setIsRefresh.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  setIsRefresh(refresh) {
    // console.log(" Refresh = ", refresh);
    this.setState({ isRefresh: refresh });
  }

  setLoading(load) {
    // console.log(" Refresh = ", refresh);
    this.setState({ loading: load });
  }

  setLatestMovies(movies) {
    this.setState({ latestMovies: movies });
  }

  setFeaturedMovies(movies) {
    this.setState({ featuredMovies: movies });
  }

  async loadData(reload: boolean = false) {

    // Latest movies
    await fetch("https://api.themoviedb.org/3/search/movie?api_key=feb6f0eeaa0a72662967d77079850353&query=avengers")
      .then(res => res.json())
      .then(res => {
        console.log(" Data = ", res);
        this.setLatestMovies(res.results);
      })
      .catch(err => {
        console.log("Error = ", err);
        this.setIsRefresh(false);
        this.setLoading(false);
      })

    // Featured Movie
    await fetch("https://api.themoviedb.org/3/search/movie?api_key=feb6f0eeaa0a72662967d77079850353&query=avengers")
      .then(res => res.json())
      .then(res => {
        console.log(" Data = ", res);
        this.setFeaturedMovies(res.results);
        this.setIsRefresh(false);
        this.setLoading(false);
      })
      .catch(err => {
        console.log("Error = ", err);
        this.setIsRefresh(false);
        this.setLoading(false);
      })
  }


  async componentDidMount() {
    const { navigation } = this.props;

    this.loadData(true);
    SplashScreen.hide();
  }

  render() {

    // console.log("HOME");

    // this.timer();

    return (
      <View style={{ flex: 1, backgroundColor: "#f6f8ff" }}>

        {
          this.state.loading
            ?
            <ActivityIndicator size={'large'} style={{ flex: 1 }} />
            :

            <ScrollView
              // to refresh page
              refreshControl={
                <RefreshControl refreshing={this.state.isRefresh}
                  onRefresh={() => {
                    this.setIsRefresh(true);
                    this.loadData();
                  }} />
              }
              style={{ width: Winwidth, marginBottom: '20%' }}
              showsVerticalScrollIndicator={false} >

              {/* <View style={styles.slider} >
            <Poster style={styles.slide} title="Assassin" />
            <Poster style={styles.slide} title="Assassin" />
            <Poster style={styles.slide} title="Assassin" />
          </View> */}

              <FlatList
                data={this.state.latestMovies}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) =>
                  <View>
                    <Poster title={item.title} />
                  </View>
                }
              />

              {/* <Carousel
                loop
                width={Winwidth}
                height={Winwidth / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                      {index}
                    </Text>
                  </View>
                )}
              /> */}

              <View style={{ marginTop: 10 }} >
                <ListMovies title="Latest Movies" data={this.state.latestMovies} navigation={this.props.navigation} />

                <ListMovies title="Featured Movies" data={this.state.featuredMovies} navigation={this.props.navigation} />
              </View>


            </ScrollView>
        }
      </View>
    );
  }
}


export default HomePage;


const styles = StyleSheet.create({

});