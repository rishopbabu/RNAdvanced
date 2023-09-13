import React from 'react';
import SectionListComponent from './screens/SectionList';
import FlatListComponentWithScroll from './screens/FlatListWithScroll';
import SignUpScreen from './screens/SignUpScreen';
import GameDetailScreenComponent from './screens/GameDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <SignUpScreen /> */}
      {/* <FlatListComponent /> */}
      {/* <SectionListComponent /> */}
      {/* <FlatListComponentWithScroll /> */}

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Game List Section"
            component={SectionListComponent}
            options={{
              title: 'Game List Section',
            }}
          />
          <Stack.Screen
            name="Game List Flat"
            component={FlatListComponentWithScroll}
            options={{
              title: 'Game List Flat',
              // eslint-disable-next-line react/no-unstable-nested-components
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => Alert.alert('This is info button')}>
                  <Text style={styles.infoButtonConatainer}>Info</Text>
                </TouchableOpacity>
              ),
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

const styles = StyleSheet.create({
  infoButtonConatainer: {
    flex: 1,
    color: 'white',
    marginRight: 10,
  },
});
