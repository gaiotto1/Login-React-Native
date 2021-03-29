import React, {useState} from 'react';
import {ImageBackground, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as UsersActions from '../../store/ducks/users/actions';
import {ApplicationState} from '../../store';
import {flashMessage} from '../../utils/index';

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
  ForgotPassword,
  ForgotPasswordText,
  Link,
} from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usersData = useSelector((state: ApplicationState) => state.users.data);
  const dispatch = useDispatch();

  const loginValidate = () => {
    loadUsersData();

    const login: any = usersData.find(element => element.email == email);
    const pass: any = usersData.find(element => element.password == password);

    if (login && pass) {
      flashMessage('Wiser app', 'Bem vindo', 'success');
    } else {
      flashMessage('Falha ao logar', 'E-mail ou senha incorreto(s).', 'danger');
    }
  };

  const loadUsersData = async () => {
    try {
      await dispatch(UsersActions.loadRequest());
    } catch (error) {
      flashMessage('Falha ao logar', error, 'danger');
    }
  };

  const confirm = () => {
    loginValidate();
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <Container>
          <ContainerBackground>
            <ImageBackground
              source={backgroundImage}
              style={{flex: 1, resizeMode: 'contain', justifyContent: 'center'}}
            />
          </ContainerBackground>
          <ContainerForm>
            <Form>
              <Title>Olá, seja bem-vindo!</Title>
              <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>

              <Input
                name="E-MAIL"
                value={email}
                onChangeText={email => setEmail(email)}
              />
              <Input
                name="SENHA"
                value={password}
                onChangeText={password => setPassword(password)}
              />

              <Button
                onPress={() => {
                  confirm();
                }}>
                ENTRAR
              </Button>
            </Form>

            <ForgotPassword>
              <ForgotPasswordText>
                Esqueceu seu login ou senha?Clique <Link>aqui</Link>
              </ForgotPasswordText>
            </ForgotPassword>
          </ContainerForm>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
