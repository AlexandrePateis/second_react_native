import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { data } from '../data/jsonlist';

const List = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Campeões da Copa do Mundo</Text>
        {data.map((item) => (
          <View style={styles.containerStyle} key={item.id}>
            <Text style={styles.fontContainer} key={item.id}>Pais campeão: {item.pais}</Text>
            <Text style={styles.fontContainer} key={item.id}>Ano: {item.ano}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default List;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 5,
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    color: 'black',
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fontContainer: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  containerStyle: {
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
  },
});
