import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Text, View, TextInput, Image, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './RegistrationScreen.styled';

export default function RegistrationScreens({ state, setState, setIsShowKeyboard, isShowKeyboard, initialState}) {

  const formSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
    console.log(state);
  }

  return (
    <KeyboardAvoidingView style={{ ...styles.registarationContainer, paddingBottom: isShowKeyboard ? 10 : 45 }}>
    <View style={styles.imgContainer}>
      <Image
        style={styles.imgForm}
        source={require('../../images/avatar.png')}>
        </Image>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Реєстрація</Text>
    </View>
  
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={'Логін'}
        value={state.login}
        onFocus={() => setIsShowKeyboard(true)}
        onChangeText={(value) => setState((prevState) => ({...prevState, login: value})) } />
      <TextInput
        style={styles.input}
        placeholder={'Електронна пошта'}
        value={state.email}
        onFocus={() => setIsShowKeyboard(true)}
        onChangeText={(value) => setState((prevState) => ({...prevState, email: value})) }/>
      <TextInput style={styles.input}
        placeholder={'Пароль'}
        secureTextEntry={true}
        value={state.password}
        onFocus={() => setIsShowKeyboard(true)}
        onChangeText={(value) => setState((prevState) => ({...prevState, password: value})) }/>
      </View>
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={formSubmit}>
        <Text style={styles.btnText}> Зареєструватись</Text>
      </TouchableOpacity>

    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
    </View>

    </KeyboardAvoidingView>
  );
}
