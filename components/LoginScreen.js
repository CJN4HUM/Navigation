import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import fetchServices from '../services/fetchServices';

const LoginScreen = ({navigation}) => {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');


 const handleLogin = async () => {
   try{
      setLoading(true);
      if(email === "" || password === ""){
         showToast("Please input required data.");
         setisError(true);
         return false;
      }

      const url = "http://192.168.1.2/api/v1/login";
      const data = {
         email,
         password
      };

      const headers = {
         'Accept': 'application/json', 
         'Content-Type': 'application/json',
       };
   
       const result = await fetch(url, {
         method: 'POST',
         headers,
         body: JSON.stringify(data),
       });
      console.debug(data);


      if (result.message != null){
         showToast(result?.message);
      }else{
         navigation.navigate("Home");
      }
   }catch(e){
      console.debug(e.toString());
      showToast(e.toString());
   }finally{
      setLoading(false);
   }
}

 return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="black" />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Registration')}
          color="black"
        />
        <Button
          title="Recover"
          onPress={() => navigation.navigate('AccountRecovery')}
          color="black"
        />
      </View>
    </View>
 );
 };

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
 },
 title: {
    fontSize: 24,
    marginBottom: 20,
 },
 input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    width: '80%',
 },
 buttonContainer: {
    width: '80%',
    justifyContent: "space-around",
    alignItems: 'center',
    flexDirection: 'row',
 },
 button: {
    backgroundColor: 'black',
    padding: 5,
    marginBottom: 20,
    width: '100%',
 },
 buttonText: {
    color: 'white',
    textAlign: 'center',
 },
});

export default LoginScreen;