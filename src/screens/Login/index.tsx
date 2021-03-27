import React from 'react';
import {ImageBackground} from 'react-native';

import backgroundImage from '../../images/fundo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  ContainerBackground,
  ContainerForm,
  Form,
  Title,
  SubTitle,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <ContainerBackground>
        <ImageBackground
          source={backgroundImage}
          style={{
            flex: 1,
            resizeMode: 'contain',
            justifyContent: 'center',
          }}
        />
      </ContainerBackground>
      <ContainerForm>
        <Form>
          <Title>Olá, seja bem-vindo!</Title>
          <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>

          <Input name="E-MAIL" />
          <Input name="SENHA" />

          <Button
            onPress={() => {
              console.log('ok');
            }}>
            ENTRAR
          </Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
