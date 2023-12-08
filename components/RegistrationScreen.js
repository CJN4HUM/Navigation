import React, {useState} from 'react';
import fetchServices from '../services/fetchServices';
import {View, Text, TextInput, Button, StyleSheet, ToastAndroid} from 'react-native';


const RegistrationScreen = ({navigation}) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [isError, setisError] = useState(false);

   const showToast = (message = "Something went Wrong") => {
      ToastAndroid.show(message, 3000);
   }

   const handleRegistration = async () => {
      try{
         setLoading(true);
         if(name === "" || email === "" || password === ""){
            showToast("Please input required data.");
            setisError(true);
            return false;
         }

         const url = "http://192.168.1.2/api/v1/register";
         const data = {
            name,
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
            navigation.navigate("Login");
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
         <Text style={styles.title}>Registration Screen</Text>
         <TextInput
         style={styles.input}
         placeholder="Name"
         value={name}
         onChangeText={setName}
         error={isError}
         />
         <TextInput
         style={styles.input}
         placeholder="Email"
         value={email}
         onChangeText={setEmail}
         
         error={isError}
         />
         <TextInput
         style={styles.input}
         placeholder="Password"
         value={password}
         onChangeText={setPassword}
         error={isError}
         secureTextEntry
         />
         <Button
         disabled={loading}
         loading={loading}
         title="Create Account"
         onPress={handleRegistration}
         color="black"
         />
      </View>
   );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
 button: {
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 20,
    width: '80%',
 },
 buttonText: {
    color: 'white',
    textAlign: 'center',
 },
});

export default RegistrationScreen;