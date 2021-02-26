import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DumLaptopAsus, DumSmartTVCello, DumUsbSandisk} from '../../assets';
import {Button, Counter, Gap, Header, List} from '../../components';
import {Colors, Fonts} from '../../utils';

const Order = ({navigation}) => {
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
            <Text style={styles.titleInvoice}>Item:</Text>
            <List photo={DumLaptopAsus} name="Laptop Asus" price="5000.000" />
            <List
              photo={DumSmartTVCello}
              name="Smart TV Cello"
              price="4300.000"
            />
            <List
              photo={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="45.000"
            />
            <List
              photo={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="45.000"
            />
            <List
              photo={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="45.000"
            />
            <List
              photo={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="45.000"
            />
            <List
              photo={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="45.000"
            />
            <List
              photo={DumUsbSandisk}
              name="USB Sandisk 16GB"
              price="45.000"
            />
            <Gap height={15} />
          </View>
          <Gap height={10} />
          <View style={styles.contentSummary}>
            <View style={styles.wrapperInvoce}>
              <Text style={styles.titleInvoice}>Invoice</Text>
              <Text style={styles.txtValueInvoice}>INV-500-2021</Text>
            </View>
            <Gap height={15} />
            <View style={styles.wrapperInvoce}>
              <Text style={styles.titleInvoice}>Total</Text>
              <Text style={styles.txtValueInvoice}>Rp12.000.000</Text>
            </View>
            <Gap height={15} />
            <Button
              text="Bayar"
              onPress={() => navigation.navigate('PaymentConfirmation')}
            />
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
});
