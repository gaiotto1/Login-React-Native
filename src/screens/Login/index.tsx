import React from 'react';
import {Text, ImageBackground} from 'react-native';

import {Container, ContainerBackground, ContainerForm} from './styles';

import backgroundImage from '../../images/fundo.png';

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
        <Text>formulario</Text>
      </ContainerForm>
    </Container>
  );
};

export default Login;
