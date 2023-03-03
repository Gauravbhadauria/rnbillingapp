import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LIGHT_GRAY, THEME_COLOR} from '../common/Colors';
import ProductItem from '../common/ProductItem';

const AddNewBill = () => {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
      });
  };
  const addItems = ind => {
    let temData = addedItems;
    temData.push(products[ind]);
    let temp = [];
    temData.map(item => {
      temp.push(item);
    });
    setAddedItems(temp);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../images/back.png')} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image source={require('../images/add.png')} style={styles.icons} />
        </TouchableOpacity>
      </View>
      {addedItems.length > 0 ? (
        <FlatList
          data={addedItems}
          renderItem={({item, index}) => {
            return <ProductItem item={item} index={index} />;
          }}
        />
      ) : (
        <View style={styles.noItems}>
          <Text>No Item Found</Text>
        </View>
      )}
      {addedItems.length > 0 && (
        <View style={styles.bottomView}>
          <Text style={styles.total}>{'Total : 2000'}</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>Submit Bill</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal transparent visible={modalVisible}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}>
            <Image
              source={require('../images/back.png')}
              style={[styles.icons, {margin: 20}]}
            />
          </TouchableOpacity>
          <View style={styles.searchBox}>
            <Image
              source={require('../images/search.png')}
              style={styles.icons}
            />
            <TextInput placeholder="Search Item by Code" style={styles.input} />
          </View>
          <FlatList
            data={products}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  index={index}
                  onClick={ind => {
                    setModalVisible(false);
                    addItems(ind);
                  }}
                />
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default AddNewBill;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    elevation: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icons: {
    width: 30,
    height: 30,
  },
  bottomView: {
    position: 'absolute',
    height: 100,
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    elevation: 5,
  },
  btn: {
    width: '40%',
    height: 50,
    borderRadius: 10,
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  total: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    backgroundColor: '#fff',
  },
  searchBox: {
    width: '86%',
    height: 50,
    backgroundColor: LIGHT_GRAY,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    width: '70%',
    marginLeft: 10,
  },
  noItems: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addItem: {
    width: '100%',
    height: 100,
  },
});
