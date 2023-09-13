import React from 'react';
import {View, Text, Button} from 'react-native';

export default function GameDetailScreenComponent({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const {itemId} = route.params;
  const {otherParam} = route.params;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Detail Screen', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Game List Section')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
