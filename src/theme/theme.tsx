import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const primaryColor: string = '#4b77be';
export const primaryDisabledColor: string = '#7d99c7';
export const secondaryColor: string = '#4A70AC';
export const tertiaryColor: string = '#3a539b';
export const primaryTextColor: string = '#BCBCBC';
export const secondaryTextColor: string = '#1a1a1a';
export const textLightColor: string = '#9a9a9a';
export const textDarkColor: string = '#EEEEEE';
export const blackColor: string = '#222222';
export const bgLight: string = '#F8F9FA';
export const black = '#000000';
export const white = '#FFFFFF';
export const goldYellow = '#ffdf00';

export const primaryTextDark: string = '#050152';
export const primaryLightColor: string = '#a3d1ff';
export const primaryExtraLightColor: string = '#cfe7ff';
export const primaryDarkColor: string = '#10336B';

export const labelGreen: string = '#5cff00';
export const labelRed: string = '#ff9b6e';
export const labelYellow: string = '#ffcc00';

export const globalBorderRadius: number = 4;

export const screenWidth: number = Dimensions.get('window').width;
export const screenHeight: number = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
  normalTitle: {
    // fontFamily: 'SourceSansPro-Regular',
    fontStyle: 'normal',
    fontSize: RFValue(16),
    lineHeight: RFValue(18),
  },
  winners_Title: {
    // fontFamily: 'SourceSansPro-Regular',
    fontStyle: 'normal',
    fontSize: RFValue(18),
    lineHeight: RFValue(18),
  },
  normalText: {
    // fontFamily: 'SourceSansPro-Regular',
    fontStyle: 'normal',
    fontSize: RFValue(14),
    lineHeight: RFValue(16),
  },
  filterText: {
    // fontFamily: 'SourceSansPro-Regular',
    fontStyle: 'normal',
    fontSize: RFValue(10),
    lineHeight: RFValue(12),
  },
  hof_winner: {
    // fontFamily: 'SourceSansPro-Regular',
    fontStyle: 'normal',
    fontSize: RFValue(12),
    lineHeight: RFValue(16),
  },
  lightTitle: {
    // fontFamily: 'SourceSansPro-Light',
    fontStyle: 'normal',
    fontSize: RFValue(14),
    lineHeight: RFValue(16),
    // color: '#323232',
  },
  lightText: {
    // fontFamily: 'SourceSansPro-Light',
    fontStyle: 'normal',
    fontSize: RFValue(11),
    lineHeight: RFValue(14),
    // color: '#323232',
  },
  boldTitle: {
    // fontFamily: 'SourceSansPro-Bold',
    fontWeight: '300',
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  boldText: {
    // fontFamily: 'SourceSansPro-Bold',
    fontWeight: 'bold',
    fontSize: RFValue(12),
    lineHeight: RFValue(21),
  },
  greyBackgroundTextColor: {
    color: '#757575',
  },
});
