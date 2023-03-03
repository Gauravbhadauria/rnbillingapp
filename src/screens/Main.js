import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {THEME_COLOR} from '../common/Colors';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../images/nodata.png')} style={styles.noData} />
      <Text>No Bill Found</Text>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          navigation.navigate('AddNewBill');
        }}>
        <Text style={styles.btnTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  btnTxt: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
  },
  noData: {
    width: 100,
    height: 100,
  },
});
