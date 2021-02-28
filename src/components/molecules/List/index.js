import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowRight, ICCounterAdd, ICCounterMin} from '../../../assets';
import {Colors, Fonts, formatRupiah, useForm} from '../../../utils';
import {Separator, TextInput} from '../../atoms';
import Counter from '../Counter';

const List = ({
  photo,
  name,
  price,
  type,
  onPress,
  qty,
  item,
  invoice,
  token,
}) => {
  const [totalItem, setTotalItem] = useState(qty);

  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  if (type === 'list-item-cart') {
    return (
      <>
        <View style={styles.listItem}>
          <Image source={photo} style={styles.img} />
          <View style={{flex: 1}}>
            <Text numberOfLines={1} style={styles.txtItemName}>
              {name}
            </Text>
            <Text style={styles.txtItemPrice}>
              Rp{`${formatRupiah(price)}`}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            <TextInput
              type="textinput-item-cart"
              value={`${qty}`}
              keyboardType="numeric"
              onChangeText={(value) => setForm('qty', value)}
            />
          </View>
        </View>
        <Separator />
      </>
    );
  }

  if (type == 'list-profile') {
    return (
      <>
        <TouchableOpacity onPress={onPress} style={styles.listItemNoImg}>
          <View style={{flex: 1}}>
            <Text numberOfLines={1} style={styles.txtItemName}>
              {name}
            </Text>
          </View>
          <View>
            <ICArrowRight />
          </View>
        </TouchableOpacity>
        <Separator />
      </>
    );
  }

  return (
    <>
      <View style={styles.listItem}>
        <Image source={photo} style={styles.img} />
        <View style={{flex: 1}}>
          <Text numberOfLines={1} style={styles.txtItemName}>
            {name}
          </Text>
          <Text style={styles.txtItemPrice}>Rp{`${formatRupiah(price)}`}</Text>
        </View>
        <View>
          <Counter
            onValueChange={onCounterChange}
            val={qty}
            type="counter-cart"
            item={item}
            invoice={invoice}
            token={token}
          />
        </View>
      </View>
      <Separator />
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  listItemNoImg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  img: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 12,
  },
  txtItemName: {
    fontSize: 16,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
    paddingRight: 25,
  },
  txtItemPrice: {
    fontSize: 14,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
  },
  wrapperCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueCounter: {
    fontSize: 16,
    fontFamily: Fonts.regularPoppins,
    color: Colors.black,
    marginHorizontal: 15,
  },
});
