import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StatusBar,
  StyleSheet,
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
];

// const ITEMS_PER_PAGE = 8;

type GameListProps = {
  title: string;
};

const ListView = ({title}: GameListProps) => (
  <View style={styles.gameItems}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
});

export default function FlatListComponent() {
  console.log('rendering');

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const totalPageCount = Math.ceil(GameList.length / ITEMS_PER_PAGE);
  //   const visibleData = GameList.slice(
  //     (currentPage - 1) * ITEMS_PER_PAGE,
  //     currentPage * ITEMS_PER_PAGE,
  //   );

  //   const handleNextPage = () => {
  //     if (currentPage < totalPageCount) {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   };

  //   const handlePrevPage = () => {
  //     if (currentPage > 1) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        //data={visibleData}
        data={GameList}
        renderItem={({item}) => <ListView title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled={true}
      />
      {/* <View style={styles.pagination}>
        <Button
          title="Previous Page"
          onPress={handlePrevPage}
          disabled={currentPage === 1}
        />
        <Text>{`Page ${currentPage} of ${totalPageCount}`}</Text>
        <Button
          title="Next Page"
          onPress={handleNextPage}
          disabled={currentPage === totalPageCount}
        />
      </View> */}
    </SafeAreaView>
  );
}
