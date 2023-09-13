import React from 'react';
import SectionListComponent from './screens/SectionList';
import FlatListComponentWithScroll from './screens/FlatListWithScroll';
import SignUpScreen from './screens/SignUpScreen';
import GameDetailScreenComponent from './screens/GameDetailScreen';
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
            options={{
              title: 'Game List Section',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Game List Flat"
            component={FlatListComponentWithScroll}
            options={{
              title: 'Game List Flat',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#000',
              },
            }}
          />
          <Stack.Screen name="Signup Screen" component={SignUpScreen} />
          <Stack.Screen
            name="Detail Screen"
            component={GameDetailScreenComponent}
            options={{title: 'Detail Screen'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
