import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SectionListComponent from './screens/SectionList';
import FlatListComponentWithScroll from './screens/FlatListWithScroll';
import SignUpScreen from './screens/SignUpScreen';
import GameDetailScreenComponent from './screens/GameDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Platform, TouchableOpacity, Text, Alert} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

 const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const TopTab = createMaterialTopTabNavigator();

// const CustomTabIcon = ({imageSource}: {imageSource: any}) => (
//   <Image
//     source={imageSource}
//     style={styles.imageContainer}
//     resizeMode="contain"
//   />
// );

function StackNavigationComponent() {
  return (
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
  )
}

// function BottomTabs() {
//   return (
//     <Tab.Navigator initialRouteName="Home"
//     activeColor="#f0edf6"
//     inactiveColor="#3e2465"
//     barStyle={{ backgroundColor: '#694fad' }}>
//       <Tab.Screen
//         name="Game List Sec"
//         component={SectionListComponent}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabIcon
//               imageSource={
//                 focused
//                   ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/house.fill.png')
//                   : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/house.png')
//               }
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Game List Flat"
//         component={FlatListComponentWithScroll}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabIcon
//               imageSource={
//                 focused
//                   ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/gamecontroller.fill.png')
//                   : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/gamecontroller.png')
//               }
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Sign Up"
//         component={SignUpScreen}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabIcon
//               imageSource={
//                 focused
//                   ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/person.fill.png')
//                   : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/person.png')
//               }
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Game Detail"
//         component={SectionListComponent}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabIcon
//               imageSource={
//                 focused
//                   ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/paperplane.fill.png')
//                   : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/paperplane.png')
//               }
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function DrawerComponent() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Sign Up" component={SignUpScreen} />
//       <Drawer.Screen name="Game Detail" component={SectionListComponent} />
//       <Drawer.Screen
//         name="Game List Flat"
//         component={FlatListComponentWithScroll}
//       />
//     </Drawer.Navigator>
//   );
// }

// function MaterialTabs() {
//   return (
//     <Tab.Navigator initialRouteName="Home"
//     activeColor="#f0edf6"
//     inactiveColor="#3e2465"
//     barStyle={{ backgroundColor: '#694fad' }}>
//       <Tab.Screen
//         name="Game List Sec"
//         component={SectionListComponent}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabIcon
//               imageSource={
//                 focused
//                   ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/house.fill.png')
//                   : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/house.png')
//               }
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Game List Flat"
//         component={FlatListComponentWithScroll}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabIcon
//               imageSource={
//                 focused
//                   ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/gamecontroller.fill.png')
//                   : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/gamecontroller.png')
//               }
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Sign Up"
//         component={SignUpScreen}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabIcon
//               imageSource={
//                 focused
//                   ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/person.fill.png')
//                   : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/person.png')
//               }
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Game Detail"
//         component={SectionListComponent}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <CustomTabIcon
//               imageSource={
//                 focused
//                   ? require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/paperplane.fill.png')
//                   : require('/Users/mac-obs-51/Documents/RN Learning/RNAdvanced/assets/paperplane.png')
//               }
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function TopTabComponent() {
//   return (
//     <TopTab.Navigator>
//       <Tab.Screen name="Sign Up Screen" component={SignUpScreen}/>
//       <Tab.Screen name="Game List Flat" component={FlatListComponentWithScroll} />
//       {/* <Tab.Screen name="Game List" component={GameDetailScreenComponent} /> */}
//       <Tab.Screen name="Game List Section" component={SectionListComponent} />
//     </TopTab.Navigator>
//   )
// }

export default function App() {
  return (
    <>
      {/* <SignUpScreen /> */}
      {/* <FlatListComponent /> */}
      {/* <SectionListComponent /> */}
      {/* <FlatListComponentWithScroll /> */}

      <NavigationContainer>

        <StackNavigationComponent />

        {/* <BottomTabs /> */}

        {/* <DrawerComponent /> */}

        {/* <MaterialTabs /> */}

        {/* <TopTabComponent /> */}

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
