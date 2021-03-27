import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');

export const Container = styled(RectButton)`
  position: absolute;
  bottom: -22px;
  width: ${window.width >= 500 ? '100%' : '168px'};
  height: 48px;
  background-color: #9d25b0;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  color: #fff;
`;
