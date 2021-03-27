import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

export const ContainerBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
`;

export const ContainerForm = styled.View`
  width: 100%;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  margin-top: 82px;
`;

export const Form = styled.View`
  width: 90%;
  background-color: #faf5ff;
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  width: 100%;
  max-width: 139px;
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  color: #383e71;
  margin-bottom: 12px;
  font-family: 'Montserrat-Regular';
`;

export const SubTitle = styled.Text`
  width: 100%;
  text-align: center;
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
  color: #fff;
  line-height: 22px;
  text-align: center;
  font-family: 'Montserrat-Regular';
`;

export const Link = styled.Text`
  text-decoration: underline;
`;
