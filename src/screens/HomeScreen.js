import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CustomButton, CustomText, SafeAreaContainer } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const data = [
  {
    itemName: 'ABC',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 200,
    quantity: 10,
  },
  {
    itemName: 'DEF',
    details:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 150,
    quantity: 20,
  },
  {
    itemName: 'GHI',
    details:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 300,
    quantity: 8,
  },
];

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const isInCart = name => cartItems.some(item => item.itemName === name);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
    Alert.alert('Success', 'Item added to cart');
  };

  const renderItem = ({ item }) => {
    const inCart = isInCart(item.itemName);
    return (
      <View style={styles.itemContainer}>
        <CustomText fontSize={16} fontWeight="bold" style={{ marginBottom: 8 }}>
          {item?.itemName}
        </CustomText>
        <CustomText fontSize={13} fontWeight="400" style={{ marginBottom: 8 }}>
          {item?.details}
        </CustomText>
        <View style={styles.foramteContainer}>
          <View style={{ width: '50%' }}>
            <CustomText fontSize={14} fontWeight="400">
              Price: ${item?.price}
            </CustomText>
          </View>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <CustomButton
              btnTitle={inCart ? 'View Cart' : 'Add To Cart'}
              btnContainer={{ height: 30, width: '60%' }}
              onPress={() =>
                inCart ? navigation.navigate('Cart') : handleAddToCart(item)
              }
              btnTextStyle={{ fontSize: 13 }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          extraData={cartItems}
          renderItem={({ item }) => renderItem({ item })}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  foramteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
