/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import LoginNavigation from './navigators/LoginNavigator';
import BottomNavigation from './navigators/BottomNavigator';
import { NavigationKeys, RouteParamMap } from './NavigationKeys';
// import Savings from '../screens/Savings';
// import LanguageScreen from '../screens/LanguageScreen';
// import CreateSavings from '../screens/CreateSavings';
// import AddMoney from '../screens/AddMoney';
// import PayLater from '../screens/PayLater';
// import FeesForm from '../screens/FeesForm';
// import FeesPay from '../screens/FeesPay';
// import NewFeesPay from '../screens/NewFeesPay';
// import PayFees from '../screens/PayFees';
// import HistoryPage from '../screens/HistoryPage'; 
// import DownloadCertificate from '../screens/DownloadCertificate';
// import Settings from '../screens/SettingsScreen';
// import { View, Text } from 'react-native';
// import { Spinner } from 'native-base';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  config,
  githubConfigUrlProduction,
  githubConfigUrlDebug,
} from '../utils/config/general';
import HomePage from '../screens/HomePage';
import DetailedScreen from '../screens/DetailedScreen';
import Search from '../screens/Search';
import { Text } from 'react-native';


const MainNavigator = createStackNavigator<RouteParamMap>();

// const linking = {
//   prefixes: ['https://www.acadio.in', 'http://www.acadio.in', 'http://acadio.in', 'https://acadio.in'],
//   config: {
//     screens: {
//       [NavigationKeys.LoginStack]: {
//         screens: {
//           [NavigationKeys.Login]: 'login',
//         },
//       },
//       [NavigationKeys.CompetitionDetails]: 'contest/:id/:cname',
//       [NavigationKeys.PoolDetails]: 'pool/:id/:pool_name',
//       [NavigationKeys.ChallengeIndi]: 'challenge/:id/:ch_name',
//       [NavigationKeys.HomeStack]: {
//         // path: 'home',
//         screens: {
//           [NavigationKeys.Home]: 'contest',
//           [NavigationKeys.Trending]: 'trending',
//           [NavigationKeys.Pools]: 'pool',
//           [NavigationKeys.AllChallenges]: 'challenge',
//           [NavigationKeys.Profile]: 'profile',
//         },
//       }
//     },
//   },
// };

class MainNavigation extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      urlsUpdated: true,
      isLoggedIn: false
    };
    // SplashScreen.hide();
  }
  loadStaticUrls() {

  }
  async loadUrls() {
    // try {
    //   console.log("Load URLs");

    //   const response = await fetch(githubConfigUrlDebug,
    //     {
    //       method: 'GET',
    //       headers: new Headers({
    //         'Content-type': 'application/json',
    //         'Cache-Control': 'no-cache'
    //       })
    //     });
    //   if (response.ok) {
    //     console.log("URLs loaded");

    //     const urlsObj = await response.json();
    //     console.log("URLS YO 2 : " + JSON.stringify(urlsObj));
    //     // console.log("HERE2");
    //     config.baseUrl = urlsObj.url;
    //     config.key = urlsObj.key;
    //     // this.loadStaticUrls();

    //     this.setState({ urlsUpdated: true });
    //   }
    // } catch (e) {
    //   console.log(e);
    //   // Alert.alert(
    //   //   'Startup error',
    //   //   'This app failed to initialised. Please try again after some time.',
    //   // );
    //   // Toast.show(
    //   //   'This app failed to initialised. Please try again',
    //   //   Toast.LONG,
    //   //   ['UIAlertController'],
    //   // );
    //   this.setState({ urlsUpdated: true });
    // }
  }

  async componentDidMount() {
    // await this.loadUrls();
    // const uid = await AsyncStorage.getItem('uid');
    // console.log("LOGGED IN : " + uid);
    // if (uid !== null) {
    //   await this.setState({ isLoggedIn: true });
    // }
    // else {
    //   await this.setState({ isLoggedIn: false });
    // }
  }

  render() {
    // console.log(this.state.isLoggedIn);
    // if (this.state.isLoggedIn === "wait") {
    //   return (
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //       <Spinner color={'white'} size={'large'} />
    //     </View>
    //   );
    // }
    // console.log(config.baseUrl);
    return (
      // <NavigationContainer linking={linking} fallback={<Text></Text>}>

      <NavigationContainer fallback={<Text></Text>}>
        <MainNavigator.Navigator
          initialRouteName={HomePage}

          screenOptions={{
            headerShown: false,
            // ...TransitionPresets.SlideFromRightIOS,
          }}
        >

          {/* {!(this.state.isLoggedIn) ? (
            <MainNavigator.Screen
              name={NavigationKeys.LoginStack}
              component={LoginNavigation}
            />
          ) : ( */}
          <MainNavigator.Screen
            name={NavigationKeys.HomePage}
            component={BottomNavigation}
          />
          {/* )} */}
          {/* {(this.state.isLoggedIn) ? (
            <MainNavigator.Screen
              name={NavigationKeys.LoginStack}
              component={LoginNavigation}
              />
              ) : (
            <MainNavigator.Screen
              name={NavigationKeys.HomePage}
              component={BottomNavigation}
            />
          )} */}



          <MainNavigator.Screen
            name={NavigationKeys.DetailedScreen}
            component={DetailedScreen}
          />

          <MainNavigator.Screen
            name={NavigationKeys.Search}
            component={Search}
          />


          {/* <MainNavigator.Navigator
          initialRouteName={
            this.props.user.loggedInStatus
              ? NavigationKeys.HomeStack
              : NavigationKeys.LoginStack
            // NavigationKeys.Design
          }
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>

          {!this.props.user.loggedInStatus ? (
            <MainNavigator.Screen
              name={NavigationKeys.LoginStack}
              component={LoginNavigation}
            />
          ) : (
            <MainNavigator.Screen
              name={NavigationKeys.HomeStack}
              component={BottomNavigation}
            />
          )}
          {this.props.user.loggedInStatus ? (
            <MainNavigator.Screen
              name={NavigationKeys.LoginStack}
              component={LoginNavigation}
            />
          ) : (
            <MainNavigator.Screen
              name={NavigationKeys.HomeStack}
              component={BottomNavigation}
            />
          )} */}

          {/**
           This screen is used to show the detailed view of competition. It is navigated mostly through the competition card
           */}
          {/* <MainNavigator.Screen
            name={NavigationKeys.LanguageScreen}
            component={LanguageScreen}
          />


          <MainNavigator.Screen
            name={NavigationKeys.CreateSavings}
            component={CreateSavings}
          />

          <MainNavigator.Screen
            name={NavigationKeys.AddMoney}
            component={AddMoney}
          />

          <MainNavigator.Screen
            name={NavigationKeys.PayLater}
            component={PayLater}
          />

          <MainNavigator.Screen
            name={NavigationKeys.FeesForm}
            component={FeesForm}
          />

          <MainNavigator.Screen
            name={NavigationKeys.FeesPay}
            component={FeesPay}
          />

          <MainNavigator.Screen
            name={NavigationKeys.NewFeesPay}
            component={NewFeesPay}
          />

          <MainNavigator.Screen
            name={NavigationKeys.PayFees}
            component={PayFees}
          />

          <MainNavigator.Screen
            name={NavigationKeys.HistoryPage}
            component={HistoryPage}
          />

          <MainNavigator.Screen
            name={NavigationKeys.Settings}
            component={Settings}
          />

          <MainNavigator.Screen
            name={NavigationKeys.DownloadCertificate}
            component={DownloadCertificate}
          /> */}

          {/* 
          <MainNavigator.Screen
            name={NavigationKeys.MySubmissionPool}
            component={MySubmissionPool}
          />

          <MainNavigator.Screen
            name={NavigationKeys.MySubmissionChallenge}
            component={MySubmissionChallenge}
          />

          <MainNavigator.Screen
            name={NavigationKeys.MyPools}
            component={MyPools}
          />

          <MainNavigator.Screen
            name={NavigationKeys.PoolWinnerMain}
            component={PoolWinnerMain}
          />

          <MainNavigator.Screen
            name={NavigationKeys.ChallengeWinnerMain}
            component={ChallengeWinnerMain}
          />

          <MainNavigator.Screen
            name={NavigationKeys.ChallengeTakenPart}
            component={ChallengeTakenPart}
          />

          <MainNavigator.Screen
            name={NavigationKeys.ChallengeMyOrganized}
            component={ChallengeMyOrganized}
          /> */}

          {/* <MainNavigator.Screen
            name={NavigationKeys.CustomizeCertificate}
            component={AddCertiScreen}
          />

          <MainNavigator.Screen
            name={NavigationKeys.TransactionHistory}
            component={TransactionHistory}
          />

          <MainNavigator.Screen
            name={NavigationKeys.UserNotifiMain}
            component={UserNotifiMain}
          />

          <MainNavigator.Screen
            name={NavigationKeys.Withdraw}
            component={Withdraw}
          />

          <MainNavigator.Screen
            name={NavigationKeys.AddCash}
            component={AddCash}
          />

          <MainNavigator.Screen
            name={NavigationKeys.DownloadCertificate}
            component={DownloadCertiScreen}
          />

          <MainNavigator.Screen
            name={NavigationKeys.TakeMobile}
            component={TakeMobile}
          /> */}

          {/**
           This screen is used for displaying the results/Hall of fame results of a single competition
           */}
          {/* <MainNavigator.Screen
            name={NavigationKeys.CompetitionResults}
            component={WinningCompetitionScreen}
          /> */}
          {/**
           This screen is to display the details of random users
           */}
          {/* <MainNavigator.Screen
            name={NavigationKeys.RandomUser}
            component={RandomUserPerofileScreen}
          />
          <MainNavigator.Screen
            name={NavigationKeys.BrandProfile}
            component={BrandProfileScreen}
          />
          <MainNavigator.Screen
            name={NavigationKeys.CreatePost}
            component={PostScreen}
            options={{
              ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
          <MainNavigator.Screen
            name={NavigationKeys.Settings}
            component={SettingsScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          /> */}
          {/* <MainNavigator.Screen
            name={NavigationKeys.Awards}
            component={Awards}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <MainNavigator.Screen
            name={NavigationKeys.MoneyHistory}
            component={MoneyHistory}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <MainNavigator.Screen
            name={NavigationKeys.HallOfFame}
            component={HallOfFameScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <MainNavigator.Screen
            name={NavigationKeys.Comments}
            component={CommentsScreen}
            options={{
              ...TransitionPresets.FadeFromBottomAndroid,
            }}
          />
          <MainNavigator.Screen
            name={NavigationKeys.Followers}
            component={FollowersScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <MainNavigator.Screen
            name={NavigationKeys.Following}
            component={FollowingScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <MainNavigator.Screen
            name={NavigationKeys.PreviousWins}
            component={PreviousWinsScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          /> */}

          {/**
            individual challenge screen
           */}
          {/* <MainNavigator.Screen
            name={NavigationKeys.ChallengeIndi}
            component={ChallengeIndi}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />

          <MainNavigator.Screen
            name={NavigationKeys.ContestsParticipated}
            component={ContestsParticipated}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />

          <MainNavigator.Screen
            name={NavigationKeys.CompareScreen}
            component={CompareScreen}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          /> */}
          {/**
            This screen is to be used for design purposes only and should be commented in production
           */}
          {/* <MainNavigator.Screen
            name={NavigationKeys.Design}
            component={Design}
          /> */}
        </MainNavigator.Navigator>
        {/* <RemotePushController /> */}
      </NavigationContainer>
    );
  }
}

// function mapStateToProps(state: { user: AuthState; url: UrlObj }) {
//   return {
//     user: state.user,
//     urls: state.url,
//   };
// }

// function mapDispatchToProps(dispatch: any) {
//   return {
//     updateUrls: (urlObj: UrlObj) => dispatch(updateUrls(urlObj)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);
export default MainNavigation;
