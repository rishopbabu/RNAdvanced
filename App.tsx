import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import SectionListComponent from './screens/SectionList';
import FlatListComponentWithScroll from './screens/FlatListWithScroll';
import SignUpScreen from './screens/SignUpScreen';
import GameDetailScreenComponent from './screens/GameDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Platform, TouchableOpacity, Text, Button, Alert, View, PermissionsAndroid, AppRegistry} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ImagePicker from 'react-native-image-crop-picker';
import {PERMISSIONS, check, RESULTS, requestMultiple, request} from 'react-native-permissions';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import store from './Redux/store';
import ReduxComponent from './screens/ReduxComponent';


// Define the list of permissions you want to request
const permissionsToRequest = [
  PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
  PERMISSIONS.ANDROID.CAMERA,
  PERMISSIONS.ANDROID.READ_CONTACTS,
  PERMISSIONS.ANDROID.RECORD_AUDIO,
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.READ_PHONE_STATE,
  PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
];

// Request the specified permissions
requestMultiple(permissionsToRequest).then((statuses) => {
  console.log('Permission statuses:', statuses);

  // Start the app after permissions are requested
  AppRegistry.registerComponent(appName, () => App);
});

// const Stack = createNativeStackNavigator();
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

// function StackNavigationComponent() {
//   return (
//     <Stack.Navigator
//     screenOptions={{
//       headerTintColor: '#fff',
//       headerStyle: {
//         backgroundColor: 'blue',
//       },
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       headerTitleAlign: 'center',
//     }}>
//       <Stack.Screen
//         name="Game List Section"
//         component={SectionListComponent}
//         options={{
//           title: 'Game List Section',
//         }}
//       />

//       <Stack.Screen
//         name="Game List Flat"
//         component={FlatListComponentWithScroll}
//         options={{
//           title: 'Game List Flat',
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => Alert.alert('This is info button')}>
//               <Text style={styles.infoButtonConatainer}>Info</Text>
//             </TouchableOpacity>
//           ),
//         }}
//       />

//       <Stack.Screen name="Signup Screen" component={SignUpScreen} />
    
//       <Stack.Screen
//         name="Detail Screen"
//         component={GameDetailScreenComponent}
//         options={{title: 'Detail Screen'}}
//       />
  
//     </Stack.Navigator>
//   )
// }

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

  // const [selectedImage, setSelectedImage] = useState(null as any);

  // const openPicker = async () => {
  //   console.log('openPicker')
  //   try {
  //     const image = await ImagePicker.openCamera({
  //       width: 300,
  //       height: 400,
  //       cropping: true,
  //     });
  //     setSelectedImage(image);
  //   } catch (error) {
  //     console.log('Image picker error:', error);
  //   }
  // };

  // const [cameraPermissionStatus, setCameraPermissionStatus] = useState('');

  // useEffect(() => {
  //   checkCameraPermission();
  // }, []);

  // const checkCameraPermission = async () => {
  //   try {
  //     const status = await check(PERMISSIONS.ANDROID.CAMERA);
  //     setCameraPermissionStatus(status);
  //   } catch (error) {
  //     console.error('Error checking camera permission:', error);
  //   }
  // };

  // const requestCameraPermission = async () => {
  //   try {
  //     const status = await request(PERMISSIONS.ANDROID.CAMERA);
  //     setCameraPermissionStatus(status);
  //   } catch (error) {
  //     console.error('Error requesting camera permission:', error);
  //   }
  // };

  // const requestMicrophonePermission = async () => {
  //   try {
  //     const status = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
  //     setCameraPermissionStatus(status);
  //   } catch (error) {
  //     console.error('Error requesting microphone permission:', error);
  //   }
  // }

  // const requestReadContactsPermission = async () => {
  //   try {
  //     const status = await request(PERMISSIONS.ANDROID.READ_CONTACTS);
  //     setCameraPermissionStatus(status);
  //   } catch (error) {
  //     console.error('Error requesting microphone permission:', error);
  //   }
  // }

  return (
    <>
      {/* <SignUpScreen /> */}
      {/* <FlatListComponent /> */}
      {/* <SectionListComponent /> */}
      {/* <FlatListComponentWithScroll /> */}

      {/* <NavigationContainer> */}

        {/* <StackNavigationComponent /> */}

        {/* <BottomTabs /> */}

        {/* <DrawerComponent /> */}

        {/* <MaterialTabs /> */}

        {/* <TopTabComponent /> */}

      {/* </NavigationContainer> */}

      {/* Permissions */}

    {/* <View>
      <Text>Camera Permission Status: {cameraPermissionStatus}</Text>
      {cameraPermissionStatus === RESULTS.GRANTED ? (
        <Text>Camera permission granted. You can use the camera.</Text>

      ) : (
        <View>
          <Text>Camera permission not granted.</Text>
          <Button title="Request Camera Permission" onPress={requestCameraPermission} />
        </View>
        
      )}
      <View>
        <Button title="Request Mic Permission" onPress={requestMicrophonePermission} />
      </View>

      <View>
        <Button title="Request Read Contacts Permission" onPress={requestReadContactsPermission} />
      </View>
    
    </View> */}

      <Provider store={store}>
        <ReduxComponent />
      </Provider>

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
