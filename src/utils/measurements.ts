import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function getWidth(percent: number) {
  return deviceWidth * (percent / 100);
}

function getHeight(percent: number) {
  return deviceHeight * (percent / 100);
}
const Measurements = {
  deviceHeight,
  deviceWidth,
  getHeight,
  getWidth,
};
export default Measurements;
