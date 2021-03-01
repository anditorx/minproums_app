import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DumLaptopAsus, DumSmartTVCello, DumUsbSandisk} from '../../assets';
import {
  Button,
  Counter,
  Gap,
  Header,
  List,
  Separator,
  TextInput,
} from '../../components';
import {Colors, Fonts, formatRupiah, useForm} from '../../utils';
import {
  getItemCartAction,
  getTotalPrice,
  paymentAction,
} from '../../redux/action';
import {API_HOST} from '../../config';

const Order = ({navigation}) => {
  const stateGlobalReducer = useSelector((state) => state.globalReducer);
  const cart = useSelector((state) => state.itemCartReducer);
  const stateToken = useSelector((state) => state.tokenReducer);
  const [invoice, setInvoice] = useState(stateGlobalReducer.invoice);
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    qty: 0,
  });
  useEffect(() => {
    getDataList();
  }, []);

  const getDataList = () => {
    setForm('qty', cart.qty);
    dispatch(getItemCartAction(invoice, stateToken.token));
  };

  const onPressPayment = () => {
    dispatch(paymentAction(invoice, stateToken.token, navigation));
    navigation.replace('PaymentConfirmation');
    dispatch(getTotalPrice(invoice, stateToken.token, navigation));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screen}>
        <Header
          withIconBack
          onPressBack={() => navigation.goBack()}
          title="Pesanan"
          subTitle="Ringkasan pesanan Anda"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {invoice ? <Text style={styles.titleInvoice}>Item:</Text> : <></>}
            {cart.dataCart !== [] &&
              cart.dataCart.map((item) => (
                <List
                  // type="list-item-cart"
                  key={item.id}
                  photo={{
                    uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
                  }}
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                  item={item}
                  invoice={invoice}
                  token={stateToken.token}
                />
              ))}
            <Gap height={15} />
          </View>
          <Gap height={10} />
          <View style={styles.contentSummary}>
            <View style={styles.wrapperInvoce}>
              <Text style={styles.titleInvoice}>Invoice</Text>
              <Text style={styles.txtValueInvoice}>{invoice}</Text>
            </View>
            <Gap height={15} />
            <Button text="Bayar" onPress={onPressPayment} />
          </View>
          <Gap height={15} />
        </ScrollView>
      </View>
    </>
  );
};

export default Order;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 26,
  },
  contentSummary: {
    backgroundColor: Colors.white,
    // flex: 1,
    paddingHorizontal: 26,
    paddingVertical: 25,
  },
  wrapperInvoce: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: Colors.greyLight,
    // padding: 20,
    // borderRadius: 12,
  },
  titleInvoice: {
    fontSize: 16,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
  },
  txtValueInvoice: {
    fontSize: 16,
    fontFamily: Fonts.lightPoppins,
    color: Colors.greyLight2,
  },
  txtItemName: {
    fontSize: 16,
    fontFamily: Fonts.mediumPoppins,
    color: Colors.black,
    paddingRight: 25,
  },
  txtItemPrice: {
    fontSize: 14,
    fontFamily: Fonts.regularPoppins,
    color: Colors.greyLight,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 70,
    width: 70,
    marginRight: 10,
  },
  //
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
  imgItem: {
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
