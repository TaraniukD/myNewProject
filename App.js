import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, StyleSheet, View, ImageBackground, Keyboard } from 'react-native';
import RegistrationScreens from './assets/Screens/RegistrationScreens/RegistrationScreens';
import LoginScreens from './assets/Screens/LoginScreens/LoginScreens';

export const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const BgImage = {uri: 'https://pibig.info/uploads/posts/2022-11/1669841130_1-pibig-info-p-altai-oboi-na-telefon-krasivo-1.jpg'};

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss(); 
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={BgImage}
      >
        <RegistrationScreens
            keyboardHide={keyboardHide}
            setIsShowKeyboard={setIsShowKeyboard}
            isShowKeyboard={isShowKeyboard}
            setState={setState}
            state={state}
            initialState={initialState}
          /> 
          {/* <LoginScreens
          keyboardHide={keyboardHide}
          setIsShowKeyboard={setIsShowKeyboard}
          isShowKeyboard={isShowKeyboard}
          setState={setState}
          state={state}
          initialState={initialState} 
          /> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  innerBox: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
