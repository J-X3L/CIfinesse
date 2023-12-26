import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getImageSource = (imageName) => {
    return { uri: `asset:/app/src/assets/${imageName}` };
  };

  const handleCreateAccount = () => {
    console.log('Create Account button pressed');
    // navigation logic for creating an account
  };

  const handleAlreadyHaveAccount = () => {
    console.log('Already Have an Account button pressed');
    //  navigation logic for already having an account
  };

  return (
    <View style={styles.container}>
      <ViewPager
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(event) => handlePageChange(event.nativeEvent.position)}
      >
        <View key="1">
          <Image source={getImageSource('image1.jpg')} style={styles.image} />
        </View>
        <View key="2">
          <Image source={getImageSource('image2.jpg')} style={styles.image} />
        </View>
        <View key="3">
          <Image source={getImageSource('image3.jpg')} style={styles.image} />
        </View>
      </ViewPager>
      <View style={styles.buttonContainer}>
        <Button title="Create an Account" onPress={handleCreateAccount} />
        <Button title="I Already Have an Account" onPress={handleAlreadyHaveAccount} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default OnboardingScreen;
