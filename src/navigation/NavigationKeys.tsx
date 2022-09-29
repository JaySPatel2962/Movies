// import { APIHallOfFameInstance } from '../types/APIHallOfFameInstance';
// import { APICompetition } from '../types/APICompetition';
// import { APIChallenge } from '../screens/challenge/APIChallenge';
// import { APIPool } from '../screens/pool/APIPool';

export interface NavigationKeysType {
  HomePage: 'HomePage';
  DetailedScreen: "DetailedScreen";
  Search: "Search";
  HomeStack: 'HomeStack';
  LoginStack: 'LoginStack';
  LanguageScreen: 'LanguageScreen';
  Home: 'Home';
  Savings: 'Savings';
  CreateSavings: 'CreateSavings';
  AddMoney: 'AddMoney';
  PayLater: 'PayLater';
  FeesForm: 'FeesForm';
  FeesPay: 'FeesPay';
  NewFeesPay: 'NewFeesPay';
  PayFees: 'PayFees';
  HistoryPage: 'HistoryPage';
  HallOfFame: 'HallOfFame';
  Profile: 'Profile';
  PreviousWins: 'PreviousWins';
  Login: 'Login';
  Register: 'Register';
  BrandRegister: 'BrandRegister';
  CompetitionDetails: 'CompetitionDetails';
  PoolDetails: 'PoolDetails';
  MySubmissionPool: 'MySubmissionPool';
  MySubmissionChallenge: 'MySubmissionChallenge';
  MyPools: 'MyPools';
  PoolWinnerMain: 'PoolWinnerMain';
  ChallengeWinnerMain: 'ChallengeWinnerMain';
  ChallengeTakenPart: 'ChallengeTakenPart';
  ChallengeMyOrganized: 'ChallengeMyOrganized';
  SelectWinners: 'SelectWinners';
  CustomizeCertificate: 'CustomizeCertificate';
  DownloadCertificate: 'DownloadCertificate';
  TransactionHistory: 'TransactionHistory';
  Withdraw: 'Withdraw';
  AddCash: 'AddCash';
  TakeMobile: 'TakeMobile';
  CompetitionResults: 'CompetitionResults';
  RandomUser: 'RandomUser';
  BrandProfile: 'BrandProfile';
  CreatePost: 'CreatePost';
  Settings: 'Settings';
  UserNotifiMain: 'UserNotifiMain';
  Comments: 'Comments';
  Design: 'Design';
  Following: 'Following';
  Followers: 'Followers';
  AllChallenges: 'AllChallenges';
  ChallengeIndi: 'ChallengeIndi';
  ContestsParticipated: 'ContestsParticipated';
  CompareScreen: 'CompareScreen';
  // TopEarnersScreen: 'TopEarnersScreen';
}

export const NavigationKeys: NavigationKeysType = {
  HomePage: 'HomePage',
  DetailedScreen: 'DetailedScreen',
  Search: 'Search',
  HomeStack: 'HomeStack',
  LoginStack: 'LoginStack',
  LanguageScreen: 'LanguageScreen',
  Home: 'Home',
  Savings: 'Savings',
  CreateSavings: 'CreateSavings',
  AddMoney: 'AddMoney',
  PayLater: 'PayLater',
  FeesForm: 'FeesForm',
  FeesPay: 'FeesPay',
  NewFeesPay: 'NewFeesPay',
  PayFees: 'PayFees',
  HistoryPage: 'HistoryPage',
  HallOfFame: 'HallOfFame',
  Profile: 'Profile',
  PreviousWins: 'PreviousWins',
  Login: 'Login',
  Register: 'Register',
  BrandRegister: 'BrandRegister',
  CompetitionDetails: 'CompetitionDetails',
  PoolDetails: 'PoolDetails',
  MySubmissionPool: 'MySubmissionPool',
  MySubmissionChallenge: 'MySubmissionChallenge',
  MyPools: 'MyPools',
  PoolWinnerMain: 'PoolWinnerMain',
  ChallengeWinnerMain: 'ChallengeWinnerMain',
  ChallengeTakenPart: 'ChallengeTakenPart',
  ChallengeMyOrganized: 'ChallengeMyOrganized',
  SelectWinners: 'SelectWinners',
  CustomizeCertificate: 'CustomizeCertificate',
  DownloadCertificate: 'DownloadCertificate',
  TransactionHistory: 'TransactionHistory',
  Withdraw: 'Withdraw',
  AddCash: 'AddCash',
  TakeMobile: 'TakeMobile',
  CompetitionResults: 'CompetitionResults',
  RandomUser: 'RandomUser',
  BrandProfile: 'BrandProfile',
  CreatePost: 'CreatePost',
  Settings: 'Settings',
  UserNotifiMain: 'UserNotifiMain',
  Comments: 'Comments',
  Design: 'Design',
  Following: 'Following',
  Followers: 'Followers',
  AllChallenges: 'AllChallenges',
  ChallengeIndi: 'ChallengeIndi',
  ContestsParticipated: 'ContestsParticipated',
  CompareScreen: 'CompareScreen',
  // TopEarnersScreen: 'TopEarnersScreen',
};

export type RouteParamMap = {
  HomePage: undefined;
  DetailedScreen: {
    data: object;
  };
  Search: undefined;
  HomeStack: undefined;
  LoginStack: undefined;
  LanguageScreen: undefined;
  Home: undefined;
  Savings: undefined;
  CreateSavings: {
    savingsData: object;
  };
  AddMoney: {
    savingData: object;
  };
  PayLater: undefined;
  FeesForm: undefined;
  FeesPay: {
    feesData: object;
  };
  NewFeesPay: {
    feesData: object;
  };
  PayFees: {
    feesData: object;
  };
  HistoryPage: {
    feesData: object;
  };
  HallOfFame: undefined;
  Profile: {
    academy: string;
    oid: string;
  };
  PreviousWins: {
    uid: string;
  };
  Login: undefined;
  Register: undefined;
  BrandRegister: undefined;
  CompetitionDetails: {
    competition: APICompetition;
  };
  PoolDetails: {
    pool: any;
  }
  MySubmissionPool: {
    pool: any;
  };
  MySubmissionChallenge: {
    challenge: any;
  };
  MyPools: {
    uid: string;
  }
  PoolWinnerMain: undefined;
  ChallengeWinnerMain: undefined;
  ChallengeTakenPart: undefined;
  ChallengeMyOrganized: {
    uid: string;
  };
  SelectWinners: {
    cid: string;
  };
  CustomizeCertificate: {
    uid: string;
  };
  TransactionHistory: {
    uid: string,
    paymentsVisible: boolean
  };
  Withdraw: undefined;
  AddCash: {
    screen: string;
    challenge?: APIChallenge;
    pool?: APIPool;
  };
  // DownloadCertificate: undefined;
  DownloadCertificate: {
    certiData: object;
  }
  TakeMobile: {
    email: string,
    token: string
  }
  CompetitionResults: {
    competition: any;
  };
  RandomUser: {
    userId: string;
  };
  BrandProfile: {
    academy: string;
    oid: string;
  };
  CreatePost: {
    competition: APICompetition;
  };
  Settings: undefined;
  UserNotifiMain: undefined;
  Comments: {
    pid: string;
  };
  Design: undefined;
  Following: {
    uid: string;
  };
  Followers: {
    uid: string;
  };
  AllChallenges: undefined;
  ChallengeIndi: {
    challenge: APIChallenge;
  };
  ContestsParticipated: {
    uid: string;
  };
  CompareScreen: {
    uid: string;
    u_profile_pic: string;
    o_profile_pic: string;
    oid: string;
    uname: string;
    oname: string;
  };
  // TopEarnersScreen: undefined;
};

export const screenNames = {
  HomePage: 'HomePage', 
  DetailedScreen: 'DetailedScreen',
  Search: 'Search',
  HomeStack: 'HomeStack',
  LoginStack: 'LoginStack',
  LanguageScreen: 'LanguageScreen',
  Home: 'Leaderboard',
  Savings: 'Savings',
  CreateSavings: 'CreateSavings',
  AddMoney: 'AddMoney',
  PayLater: 'PayLater',
  FeesForm: 'FeesForm',
  FeesPay: 'FeesPay',
  NewFeesPay: 'NewFeesPay',
  PayFees: 'PayFees',
  HistoryPage: 'HistoryPage',
  HallOfFame: 'Hall Of Fame',
  Profile: 'Profile',
  PreviousWins: 'Previous Wins',
  Login: 'Login',
  Register: 'Register',
  BrandRegister: 'Register Brand',
  CompetitionDetails: 'Competition Details',
  PoolDetails: 'Contest Details',
  MySubmissionPool: 'My Submission',
  MySubmissionChallenge: 'My Submission',
  MyPools: 'My Contests',
  PoolWinnerMain: 'Contest Winners',
  ChallengeWinnerMain: 'Challenge Winners',
  ChallengeTakenPart: 'Taken Part',
  ChallengeMyOrganized: 'My Organized',
  SelectWinners: 'SelectWinners',
  CustomizeCertificate: 'Customize Certificate',
  DownloadCertificate: 'Receipt',
  TransactionHistory: 'Transaction History',
  Withdraw: 'Withdraw',
  AddCash: 'Add Cash',
  TakeMobile: 'Contact Info',
  CompetitionResults: 'Competition Results',
  RandomUser: 'User',
  BrandProfile: 'Organizer',
  CreatePost: 'Create Post',
  Settings: 'Settings',
  UserNotifiMain: 'UserNotifiMain',
  Comments: 'Comments',
  Design: 'Design',
  Following: 'Following',
  Followers: 'Follower',
  AllChallenges: 'Challenges',
  ChallengeIndi: 'ChallengeIndi',
  ContestsParticipated: 'Contests Participated',
  CompareScreen: 'Compare Me',
  // TopEarnersScreen: 'Top Earners'
};
