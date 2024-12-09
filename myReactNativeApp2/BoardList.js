import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const DATA = [
  {
    id: '1',
    title: '1',
  },
  {
    id: '2',
    title: '2',
  },
  {
    id: '3',
    title: '3',
  },
  {
    id: '4',
    title: '4',
  },
  {
    id: '5',
    title: '5',
  },
  {
    id: '6',
    title: '6',
  },
  {
    id: '7',
    title: '7',
  },
];

const styles = StyleSheet.create({
  item: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    backgroundColor: 'pink',
    color: 'black'
  },
});

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const BoardList = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <FlatList
    	data={DATA}
  		renderItem={renderItem}
		keyExtractor={item => item.id}
	/>
  );
}

export default BoardList;