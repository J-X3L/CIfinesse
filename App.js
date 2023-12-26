
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './components/SplashScreen';
import OnboardingScreen from './components/OnboardingScreen';

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Onboarding: OnboardingScreen,
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
