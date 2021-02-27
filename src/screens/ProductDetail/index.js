import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DumSmartTVCello, ICArrowBackWhiteSVG} from '../../assets';
import {Colors, FlashMessage, Fonts, formatRupiah} from '../../utils';
import {Button, Counter, Gap} from '../../components';
import {API_HOST} from '../../config';

const ProductDetail = ({navigation, route}) => {
  const {name, category, price, picture_path} = route.params;
  const [totalItem, setTotalItem] = useState(1);

  const onCounterChange = (value) => {
    console.log('counter', value);
    setTotalItem(value);
  };

  const addToCart = () => {
    FlashMessage('Success', 'Menambahkan ke keranjang', 'success');
  };

  return (
    <View style={styles.page}>
      <ImageBackground
        source={{
          uri: `${API_HOST.base_url}/storage/${picture_path}`,
        }}
        style={styles.coverImg}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btnBack}>
          <ICArrowBackWhiteSVG />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productCounter}>
            <View style={{width: '70%'}}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.label}>{category}</Text>
            </View>
            <View>
              <Counter onValueChange={onCounterChange} />
            </View>
          </View>
          <Gap height={15} />
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.wrapperPrice}>
            <Text style={styles.label}>Harga</Text>
            <Text style={styles.title}>
              Rp{formatRupiah(totalItem * price)}
            </Text>
          </View>
          <View style={styles.wrapperBtn}>
            <Button
              type="shopping-cart"
              text="Masukkan ke Keranjang"
              onPress={addToCart}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  coverImg: {
    height: 330,
  },
  btnBack: {
    backgroundColor: Colors.primary,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35 / 2,
    marginLeft: 20,
    marginTop: 20,
  },
  content: {
    backgroundColor: Colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
    // borderColor: Colors.greyLight,
    // borderWidth: 1,
    elevation: 20,
  },
  productCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContent: {flex: 1},
  title: {
    fontSize: 20,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
    textTransform: 'uppercase',
  },
  desc: {
    fontSize: 14,
    fontFamily: Fonts.regularPoppins,
    color: Colors.black,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperPrice: {flex: 1},
  wrapperBtn: {
    width: 100,
  },
});
