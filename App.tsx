import React from 'react';
import SectionListComponent from './screens/SectionList';
import FlatListComponentWithScroll from './screens/FlatListWithScroll';
import SignUpScreen from './screens/SignUpScreen';
// import GameDetailScreenComponent from './screens/GameDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabIcon = ({imageSource}: {imageSource: any}) => (
  <Image
    source={imageSource}
    style={styles.imageContainer}
    resizeMode="contain"
  />
);

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({tabBarStyle: {backgroundColor: 'black'}})}>
      <Tab.Screen
        name="Game List Sec"
        component={SectionListComponent}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              imageSource={
                focused
                  ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/house.fill.png')
                  : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/house.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Game List Flat"
        component={FlatListComponentWithScroll}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              imageSource={
                focused
                  ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/gamecontroller.fill.png')
                  : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/gamecontroller.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              imageSource={
                focused
                  ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/person.fill.png')
                  : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/person.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Game Detail"
        component={SectionListComponent}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              imageSource={
                focused
                  ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/paperplane.fill.png')
                  : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/paperplane.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      {/* <SignUpScreen /> */}
      {/* <FlatListComponent /> */}
      {/* <SectionListComponent /> */}
      {/* <FlatListComponentWithScroll /> */}

      <NavigationContainer>
        {/* <Stack.Navigator
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
        </Stack.Navigator> */}

        <BottomTabs />
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

  imageContainer: {
    width: 24,
    height: 24,
  },
});
