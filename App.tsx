import React from 'react';
import SectionListComponent from './screens/SectionList';
import FlatListComponentWithScroll from './screens/FlatListWithScroll';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <SignUpScreen /> */}
      {/* <FlatListComponent /> */}
      {/* <SectionListComponent /> */}
      {/* <FlatListComponentWithScroll /> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Game List Section"
            component={SectionListComponent}
          />
          <Stack.Screen
            name="Game List Flat"
            component={FlatListComponentWithScroll}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
