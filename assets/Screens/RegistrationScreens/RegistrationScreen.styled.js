import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  registarationContainer: {
    position: "absolute",
    width: 392,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    borderColor: '#212121',
    
  },
  imgContainer: {
    position: "relative",
    top: -60,
     alignItems: 'center',
    justifyContent: 'center',
  },
  imgForm: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  titleContainer: {
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#212121',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,

  },
  inputContainer: {
  gap: 16,  
  },

  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    backgroundColor: '#f6f6f6',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  button: {
    backgroundColor: '#FF6C00',
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
     padding: 16,
    fontSize: 16,
    lineHeight: 19,
  },
  loginContainer: {
     alignItems: 'center',
    justifyContent: 'center',
     marginTop: 16,
    // marginBottom: 45,
  },
  loginText: {
    color: '#1B4371',
    fontSize: 16,
    lineHeight: 19
  },
});