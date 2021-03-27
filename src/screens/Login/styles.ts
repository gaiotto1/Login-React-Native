import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const window = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${window.width >= 500 ? '#faf5ff' : '#130525'};
`;

export const ContainerBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${window.width >= 500 ? '40%' : '100%'};
  height: ${window.width >= 500 ? '100%' : '60%'};
`;

export const ContainerForm = styled.View`
  width: ${window.width >= 500 ? '60%' : '100%'};
  margin-left: auto;
  justify-content: center;
  align-items: center;
  padding-top: ${window.width >= 500 ? '0px' : '82px'};
`;

export const Form = styled.View`
  width: 90%;
  background-color: #faf5ff;
  justify-content: center;
  align-items: center;
  padding: 28px 30px 45px 30px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  width: 100%;
  max-width: ${window.width >= 500 ? '100%' : '139px'};
  text-align: ${window.width >= 500 ? 'left' : 'center'};
  font-size: 24px;
  line-height: 32px;
  color: #383e71;
  margin-bottom: 12px;
  font-family: 'Montserrat-Regular';
`;

export const SubTitle = styled.Text`
  width: 100%;
  text-align: ${window.width >= 500 ? 'left' : 'center'};
  font-size: 14px;
  line-height: 20px;
  color: #989fdb;
  margin: 10px 0px 16px 0px;
  font-family: 'Montserrat-SemiBold';
`;

export const ForgotPassword = styled.View`
  width: 100%;
  margin-top: 43px;
`;

export const ForgotPasswordText = styled.Text`
  width: 100%;
  max-width: 240px;
  margin: auto;
  font-size: 15px;
  color: ${window.width >= 500 ? '#989FDB' : '#fff'};
  line-height: 22px;
  text-align: center;
  font-family: 'Montserrat-Regular';
`;

export const Link = styled.Text`
  text-decoration: underline;
`;
