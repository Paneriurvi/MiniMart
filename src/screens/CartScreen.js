import React from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/slices/cartSlice';
import { CustomButton, CustomText, SafeAreaContainer } from '../components';
import image from '../assets/images';

const CartScreen = () => {
  const { cartItems, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    console.log('cart item', item);
    return (
      <View style={styles.card}>
        <View style={styles.formateView}>
          <CustomText fontSize={16} fontWeight="bold">
            {item.itemName}
          </CustomText>
          <CustomButton
            isIconButton
            icon={image.delete}
            onIconPress={() => dispatch(removeFromCart(item))}
            iconBtnStyle={{}}
          />
        </View>

        <View style={styles.formateView}>
          <View style={styles.formateContainer}>
            <CustomButton
              btnTitle="-"
              onPress={() => dispatch(decreaseQuantity(item))}
              btnContainer={{ width: 30, height: 30 }}
            />
            <CustomText>{item.cartQuantity}</CustomText>
            <CustomButton
              btnTitle="+"
              disabled={item?.quantity <= item.cartQuantity ? true : false}
              onPress={() => {
                dispatch(increaseQuantity(item));
              }}
              btnContainer={{ width: 30, height: 30 }}
              btnBgColor={
                item?.quantity <= item.cartQuantity ? 'gray' : 'black'
              }
            />
          </View>
          <CustomText>Price: ₹ {item.price * item.cartQuantity}</CustomText>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListFooterComponent={
            cartItems.length > 0 && (
              <View style={styles.totalContainer}>
                <CustomText fontSize={18} fontWeight="bold">
                  Total: ₹ {totalAmount}
                </CustomText>
              </View>
            )
          }
        />
      </View>
    </SafeAreaContainer>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  card: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  formateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 8,
  },
  formateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    borderTopWidth: 1,
    alignItems: 'flex-end',
  },
});
