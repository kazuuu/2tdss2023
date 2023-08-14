import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import api from '../constants/dummyData'
import CategoryItem from '../components/categoryItem';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
              style={{
                flexDirection: 'row'
              }}
              data={api.categories}
              renderItem={({item}) => (
                <CategoryItem data={item} />
              )}
              keyExtractor={item => item.id.toString()}
            />
        </View>
    );
  };
  
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
  });
  
  export default HomeScreen;