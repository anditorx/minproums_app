import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts, formatRupiah} from '../../utils';
import {ILNoProfilePictPNG} from '../../assets/illustrations';
import {Gap, Header, ProductCard} from '../../components';
import {DumLaptopAsus, DumUsbSandisk} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {getDataProduct, getDataProductByCategory} from '../../redux/action';
import {API_HOST} from '../../config';

const Home = ({navigation}) => {
  const {product, atk, rumah_tangga, elektronik, masak} = useSelector(
    (state) => state.homeReducer,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getDataProduct());
    dispatch(getDataProductByCategory('atk', 30));
    dispatch(getDataProductByCategory('rt', 30));
    dispatch(getDataProductByCategory('elektronik', 30));
    dispatch(getDataProductByCategory('masak', 30));
    console.log('state : ', product);
  }, []);

  return (
    <View style={styles.container}>
      <Header type="header-homescreen" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Rumah Tangga */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Rumah Tangga</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            {rumah_tangga.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  onPress={() => navigation.navigate('ProductDetail', item)}
                  image={{
                    uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
                  }}
                  name={item.name}
                  price={formatRupiah(item.price)}
                />
              );
            })}
            <Gap width={20} />
          </ScrollView>
        </View>
        {/* Masak */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Masak</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            {masak.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  onPress={() => navigation.navigate('ProductDetail', item)}
                  image={{
                    uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
                  }}
                  name={item.name}
                  price={formatRupiah(item.price)}
                />
              );
            })}
            <Gap width={20} />
          </ScrollView>
        </View>
        {/* Elektronik */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Elektronik</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            {elektronik.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  onPress={() => navigation.navigate('ProductDetail', item)}
                  image={{
                    uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
                  }}
                  name={item.name}
                  price={formatRupiah(item.price)}
                />
              );
            })}
            <Gap width={20} />
          </ScrollView>
        </View>
        {/* ATK */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Alat Tulis Kantor</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            {atk.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  onPress={() => navigation.navigate('ProductDetail', item)}
                  image={{
                    uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
                  }}
                  name={item.name}
                  price={formatRupiah(item.price)}
                />
              );
            })}
            <Gap width={20} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },

  wrapperSlider: {backgroundColor: 'white', height: 250},
  slider: {
    flexDirection: 'row',
  },
  txtTitleWrapper: {
    paddingHorizontal: 24,
    paddingBottom: 5,
    fontFamily: Fonts.mediumPoppins,
    fontSize: 17,
  },
});
