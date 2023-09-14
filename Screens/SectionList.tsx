import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

const GameList = [
  {
    title: 'Red Dead Redemption',
    data: ['Red Dead Redemption 1', 'Red Dead Redemption 2'],
  },

  {
    title: 'Grand Theft Auto',
    data: [
      'Grand Theft Auto Vice City',
      'Grand Theft Auto san Andreas',
      'Grnad Theft Auto IV',
      'Grnad Theft Auto V',
    ],
  },

  {
    title: "Assassin's Creed",
    data: [
      "Assassin's Creed I",
      "Assassin's Creed II",
      "Assassin's Creed Brotherhood",
      "Assassin's Creed Revelation",
      "Assassin's Creed III",
      "Assassin's Creed IV Black Flag",
      "Assassin's Creed Rouge",
      "Assassin's Creed Unity",
      "Assassin's Creed Syndicate",
      "Assassin's Creed Origins",
      "Assassin's Creed Odessey",
      "Assassin's Creed Valhalla",
    ],
  },

  {
    title: 'Co-Op Story',
    data: ['It Takes Two', 'A Way Out'],
  },

  {
    title: 'God of War',
    data: ['God of War IV', 'God of War Ragnarok'],
  },

  {
    title: 'The Last of Us',
    data: ['The Last of Us I', 'The Last of Us II'],
  },

  {
    title: 'Watch Dogs',
    data: ['Watch Dogs I', 'Watch Dogs II', 'Watch Dogs Legion'],
  },

  {
    title: 'Devil May Cry',
    data: [
      'Devil May Cry I',
      'Devil May Cry II',
      'Devil May Cry III',
      'Devil May Cry IV',
      'Devil May Cry V',
    ],
  },

  {
    title: 'Just Cause',
    data: [
      'Just Cause I',
      'Just Cause II',
      'Just Cause III',
      'Just Cause IV',
      'Just Cause V',
    ],
  },
];

const navigateToFlatList = (navigation: {
  dispatch: (arg0: CommonActions.Action) => void;
}) => {
  navigation.dispatch(
    CommonActions.navigate({
      name: 'Game List Flat',
    }),
  );
};

export default function SectionListComponent({}) {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigateToFlatList(navigation);
  };
  const updateTitle = () => {
    navigation.setOptions({title: 'Game List'});
    ToastAndroid.show('Title changed to Game List', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={GameList}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={styles.buttonTitle}>Go to FlatList Content</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={updateTitle}>
        <Text style={styles.buttonTitle}>Update title</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },

  item: {
    backgroundColor: 'pink',
    padding: 16,
    marginVertical: 8,
    borderRadius: 5,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'blue',
  },

  title: {
    fontSize: 20,
  },

  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 5,
  },

  buttonTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
