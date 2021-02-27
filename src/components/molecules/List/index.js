import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowRight} from '../../../assets';
import {Colors, Fonts} from '../../../utils';
import {Separator} from '../../atoms';
import Counter from '../Counter';

const List = ({photo, name, price, type, onPress}) => {
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
          <Text style={styles.txtItemPrice}>Rp{price}</Text>
        </View>
        <View>
          <Counter />
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
});
