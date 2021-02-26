import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DumLaptopAsus, DumUsbSandisk} from '../../../assets';
import {Colors, Fonts} from '../../../utils';

const ProductCard = ({image, name, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image source={image} style={styles.imgProduct} />
      <View style={styles.wrapperDesc}>
        <Text numberOfLines={1} style={styles.txtProduct}>
          {name}
        </Text>
        <Text style={styles.txtPrice}>Rp{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    width: 150,
    backgroundColor: Colors.white,
    borderColor: Colors.greyLight,
    borderWidth: 0.5,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 7,
    overflow: 'hidden',
    marginRight: 10,
    marginBottom: 10,
  },
  imgProduct: {
    height: 120,
    width: 150,
  },
  wrapperDesc: {
    padding: 15,
  },
  txtProduct: {
    // textAlign: 'center',
    fontFamily: Fonts.regularPoppins,
    fontSize: 16,
    color: Colors.black,
  },
  txtPrice: {
    // textAlign: 'center',
    fontFamily: Fonts.lightPoppins,
    fontSize: 12,
    color: Colors.greyLight2,
  },
});
