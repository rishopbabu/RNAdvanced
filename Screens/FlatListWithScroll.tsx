import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

// Data for FlatList
const GameList = [
  {
    id: '1',
    title: 'Red Dead Redemption 1',
  },

  {
    id: '2',
    title: 'Red Dead Redemption 2',
  },

  {
    id: '3',
    title: 'Grand Theft Auto Vice City',
  },

  {
    id: '4',
    title: 'Grand Theft Auto san Andreas',
  },

  {
    id: '5',
    title: 'Grnad Theft Auto IV',
  },

  {
    id: '6',
    title: 'Grnad Theft Auto V',
  },

  {
    id: '7',
    title: "Assassin's Creed",
  },

  {
    id: '8',
    title: "Assassin's Creed II",
  },

  {
    id: '9',
    title: "Assassin's Creed Brotherhood",
  },

  {
    id: '10',
    title: "Assassin's Creed Revelation",
  },

  {
    id: '11',
    title: "Assassin's Creed III",
  },

  {
    id: '12',
    title: "Assassin's Creed IV Black Flag",
  },

  {
    id: '13',
    title: "Assassin's Creed Rouge",
  },

  {
    id: '14',
    title: "Assassin's Creed Unity",
  },

  {
    id: '15',
    title: "Assassin's Creed Syndicate",
  },

  {
    id: '16',
    title: "Assassin's Creed Origins",
  },

  {
    id: '17',
    title: "Assassin's Creed Odyssey",
  },

  {
    id: '18',
    title: "Assassin's Creed Valhalla",
  },

  {
    id: '19',
    title: 'It Takes Two',
  },

  {
    id: '20',
    title: 'A Way Out',
  },

  {
    id: '21',
    title: 'God Of War',
  },

  {
    id: '22',
    title: 'God Of War Ragnarok',
  },

  {
    id: '23',
    title: 'The Last of Us I',
  },

  {
    id: '24',
    title: 'The Last of Us II',
  },

  {
    id: '25',
    title: 'Watch Dogs I',
  },

  {
    id: '26',
    title: 'Watch Dogs II',
  },

  {
    id: '27',
    title: 'Watch Dogs Legion',
  },

  {
    id: '28',
    title: 'Devil May Cry 4',
  },

  {
    id: '29',
    title: 'Just Cause 3',
  },

  {
    id: '30',
    title: 'Just Cause 4',
  },
];

const ITEMS_PER_PAGE = 12;

type GameListProps = {
  title: string;
};

type IsLoadingMoreProps = {
  isLoadingMore: boolean;
};

const ListView = ({title}: GameListProps) => (
  <View style={styles.gameItems}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FooterView = ({isLoadingMore}: IsLoadingMoreProps) =>
  isLoadingMore ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  ) : null;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  gameItems: {
    backgroundColor: 'cyan',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
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

export default function FlatListComponentWithScroll({
  navigation,
}: {
  navigation: any;
}) {
  console.log('rendering');

  const [currentPage, setCurrentPage] = useState(1);

  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const totalPageCount = Math.ceil(GameList.length / ITEMS_PER_PAGE);

  const visibleData = GameList.slice(0, currentPage * ITEMS_PER_PAGE);

  const handleEndReached = () => {
    if (!isLoadingMore && currentPage < totalPageCount) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsLoadingMore(false);
      }, 3000);
    } else if (currentPage >= totalPageCount) {
      ToastAndroid.show('No more data', ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    if (currentPage >= totalPageCount) {
      setIsLoadingMore(false);
      ToastAndroid.show('All data loaded', ToastAndroid.SHORT);
    }
  }, [currentPage, totalPageCount]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        data={visibleData}
        renderItem={({item}) => <ListView title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListFooterComponent={() => <FooterView isLoadingMore={isLoadingMore} />}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Game List Flat')}>
        <Text style={styles.buttonTitle}>Go again to FlatList Content</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonTitle}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Signup Screen')}>
        <Text style={styles.buttonTitle}>Go to Login Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Detail Screen', {
            itemId: '01',
            otherParam: 'hello',
          })
        }>
        <Text style={styles.buttonTitle}>Go to Next Item with Params</Text>
      </TouchableOpacity>
      {/* <View style={styles.pagination}>
        <Text>{`Page ${currentPage} of ${totalPageCount}`}</Text>
      </View> */}
    </SafeAreaView>
  );
}
