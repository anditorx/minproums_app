import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ILNoImg, ILNoImgSVG} from '../../assets';
import {Button, Gap, Header, TextInput} from '../../components';
import {getTotalPrice, paymentConfirmationAction} from '../../redux/action';
import {Colors, Fonts, formatRupiah} from '../../utils';

const PaymentConfirmation = ({navigation}) => {
  const stateGlobalReducer = useSelector((state) => state.globalReducer);
  const stateToken = useSelector((state) => state.tokenReducer);
  const stateTotalPrice = useSelector((state) => state.totalPriceReducer);
  const [hasPhoto, setHasPhoto] = useState(null);
  const [invoice, setInvoice] = useState(stateGlobalReducer.invoice);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getTotalPrice(invoice, stateToken.token, navigation));
    console.log(stateTotalPrice);
  };

  const onPressConfirm = () => {
    dispatch(paymentConfirmationAction(invoice, stateToken.token, navigation));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <Header title="Pembayaran" subTitle="Konfirmasi Pembayaran Anda" />
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Detail Pembayaran</Text>
            <View style={styles.wrapperTotal}>
              <Text style={styles.txtTotal}>Invoce</Text>
              <Text style={styles.txtInvoice}>{invoice}</Text>
            </View>
            <View style={styles.wrapperTotal}>
              <Text style={styles.txtTotal}>Total</Text>
              <Text style={styles.txtPrice}>
                Rp{formatRupiah(stateTotalPrice.totalPrice)}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.wrapper}
              // onPress={onPress}
              hasPhoto={hasPhoto}>
              <Image source={ILNoImg} style={styles.imgUpload} />
            </TouchableOpacity>
            <Text style={styles.txtNote}>*Unggah bukti pembayaran</Text>
            {/* <TextInput
              type="textarea"
              label="Keterangan"
              placeholder="Ada keterangan? Silahkan masukkan keterangan Anda di sini"
            /> */}
          </View>
          <View style={styles.wrappingBtn}>
            <Button
              text="Konfirmasi Pembayaran"
              onPress={onPressConfirm}
              // onPress={() => navigation.replace('PaymentSuccess')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default PaymentConfirmation;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 26,
    justifyContent: 'space-between',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  wrapperTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgUpload: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  wrappingBtn: {
    paddingVertical: 20,
  },
  title: {
    fontFamily: Fonts.mediumPoppins,
    fontSize: 16,
  },
  txtTotal: {
    fontFamily: Fonts.regularPoppins,
    fontSize: 14,
  },
  txtPrice: {
    fontFamily: Fonts.boldPoppins,
    fontSize: 14,
    color: Colors.primary,
  },
  txtInvoice: {
    fontFamily: Fonts.regularPoppins,
    fontSize: 14,
    color: Colors.greyLight2,
  },
  txtNote: {
    fontFamily: Fonts.regularPoppins,
    fontSize: 14,
    color: Colors.greyLight2,
    textAlign: 'center',
  },
});
