import React from 'react';
import {KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity,  Keyboard} from 'react-native';
import { styles } from './LoginScreens.styled';

export default function LoginScreens({ state, setState, setIsShowKeyboard, isShowKeyboard, initialState}) {
  
    const formSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  }

  return (
    <KeyboardAvoidingView style={{ ...styles.loginContainer, paddingBottom: isShowKeyboard ? 10 : 45 }} >
      
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Увійти</Text>
      </View>
        
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Електронна пошта'}
          value={state.email}
          onFocus={() => setIsShowKeyboard(true)}
          onChangeText={(value) => setState((prevState) => ({...prevState, email: value})) }
        />
        <TextInput style={styles.input}
          placeholder={'Пароль'}
          secureTextEntry={true}
          value={state.password}
          onFocus={() => setIsShowKeyboard(true)}
          onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
        />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={formSubmit}>
        <Text style={styles.btnText}> Увійти</Text>
      </TouchableOpacity>

    <View style={styles.loginBlock}>
      <Text style={styles.loginText}>Немає акаунту? Зареєструватись</Text>
    </View>

    </KeyboardAvoidingView>
  );
}
