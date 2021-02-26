import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DumSmartTVCello, ICArrowBackWhiteSVG} from '../../assets';
import {Colors, Fonts} from '../../utils';
import {Button, Gap} from '../../components';

const ProductDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DumSmartTVCello} style={styles.coverImg}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btnBack}>
          <ICArrowBackWhiteSVG />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.label}>Alat Tulis Kantor</Text>
          <Gap height={15} />
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.wrapperPrice}>
            <Text style={styles.label}>Harga</Text>
            <Text style={styles.title}>Rp50.000</Text>
          </View>
          <View style={styles.wrapperBtn}>
            <Button text="Beli Sekarang" />
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
  mainContent: {flex: 1},
  title: {
    fontSize: 24,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
  },
  label: {
    fontSize: 14,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
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
    width: 165,
  },
});
