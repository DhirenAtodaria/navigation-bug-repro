import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabNavigator, { TabA } from './TabNavigator';
import { ScreenA, ScreenB, ScreenC } from './Screens';

const Stack = createStackNavigator();

const RootNavigator: React.FunctionComponent = () => {
  return <Stack.Navigator initialRouteName='TabNavigator'>
    <Stack.Group
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"TabNavigator"} component={TabNavigator} />
      <Stack.Screen name={"ScreenA"} component={ScreenA} />
      <Stack.Screen name={"ScreenB"} component={ScreenB} />
      <Stack.Screen name={"ScreenC"} component={ScreenC} />
    </Stack.Group>
  </Stack.Navigator>
}

function App(): JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <NavigationContainer>
        <RootNavigator />
        {/* <TabA /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
