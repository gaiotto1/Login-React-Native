import React from 'react';
import {TextInputProps} from 'react-native';

import {Label, Container, ContainerInput, TextInput} from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({name, ...rest}) => (
  <Container>
    <Label>{name}</Label>
    <ContainerInput>
      <TextInput {...rest} />
    </ContainerInput>
  </Container>
);

export default Input;
