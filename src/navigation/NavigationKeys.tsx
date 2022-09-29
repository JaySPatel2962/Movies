// import { APIHallOfFameInstance } from '../types/APIHallOfFameInstance';
// import { APICompetition } from '../types/APICompetition';
// import { APIChallenge } from '../screens/challenge/APIChallenge';
// import { APIPool } from '../screens/pool/APIPool';

export interface NavigationKeysType {
  HomePage: 'HomePage';
  DetailedScreen: "DetailedScreen";
  Search: "Search";
}

export const NavigationKeys: NavigationKeysType = {
  HomePage: 'HomePage',
  DetailedScreen: 'DetailedScreen',
  Search: 'Search',
};

export type RouteParamMap = {
  HomePage: undefined;
  DetailedScreen: {
    data: object;
  };
  Search: undefined;
};

export const screenNames = {
  HomePage: 'HomePage', 
  DetailedScreen: 'DetailedScreen',
  Search: 'Search',
};
