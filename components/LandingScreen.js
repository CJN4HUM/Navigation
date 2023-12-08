import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';

const LandingScreen = ({navigation}) => {
 return (
    <ImageBackground
    source={require('../assets/black.png')}
      style={styles.backgroundImage}
    > 
      <View style={styles.content}>
        <Text style={styles.title}>WELCOME TO MY APP</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          Nulla quis sem at nibh elementum imperdiet.
        </Text>
        <Button style={styles.button}
          title="Get Started"
          onPress={() => navigation.navigate('Login')}
          color="black"
        />
      </View>
    </ImageBackground>
 );
};

const styles = StyleSheet.create({
 backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 content: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
 },
 description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 100,
 },
});

export default LandingScreen;