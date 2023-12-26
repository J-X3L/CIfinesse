
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      {/* asset name */}
      <Image source={require('C:\Users\Jerry Walker\Documents\creative\assets\your-splash-image.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, 
    height: 200, 
  },
});

export default SplashScreen;
