import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ProductItem = ({item, index, onClick}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onClick(index);
      }}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View>
        <Text style={styles.title}>
          {item.title.length > 20 ? item.title.substring(0, 20) : item.title}
        </Text>
        <Text style={styles.title}>{'₹' + item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 20,
    height: 100,
    backgroundColor: '#fff',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 20,
  },
});
