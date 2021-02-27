import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../../utils';
import {ILNoProfilePictPNG} from '../../assets/illustrations';
import {Gap, Header, ProductCard} from '../../components';
import {DumLaptopAsus, DumUsbSandisk} from '../../assets';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header type="header-homescreen" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Rekomendasi */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Top Rekomendasi</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
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
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
            <Gap width={20} />
          </ScrollView>
        </View>
        {/* Rumah Tangga */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Rumah Tangga</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
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
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
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
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumLaptopAsus}
              name="Laptop Asus AMD FX Ram 4GB HDD 500GB"
              price="6.500.000"
            />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="50.000"
            />
            <Gap width={20} />
          </ScrollView>
        </View>
        {/* <View
          style={{
            backgroundColor: 'white',
            alignItems: 'flex-start',
            paddingTop: 0,
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingLeft: 24,
          }}>
          <ProductCard
            onPress={() => navigation.navigate('ProductDetail')}
            image={DumUsbSandisk}
            name="USB Sandisk 16GB"
            price="50.000"
          />
          <ProductCard
            onPress={() => navigation.navigate('ProductDetail')}
            image={DumUsbSandisk}
            name="USB Sandisk 16GB"
            price="50.000"
          />
          <ProductCard
            onPress={() => navigation.navigate('ProductDetail')}
            image={DumUsbSandisk}
            name="USB Sandisk 16GB"
            price="50.000"
          />
          <ProductCard
            onPress={() => navigation.navigate('ProductDetail')}
            image={DumUsbSandisk}
            name="USB Sandisk 16GB"
            price="50.000"
          />
          <ProductCard
            onPress={() => navigation.navigate('ProductDetail')}
            image={DumUsbSandisk}
            name="USB Sandisk 16GB"
            price="50.000"
          />
          <ProductCard
            onPress={() => navigation.navigate('ProductDetail')}
            image={DumUsbSandisk}
            name="USB Sandisk 16GB"
            price="50.000"
          />
        </View> */}
        {/* <Gap height={50} /> */}
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
