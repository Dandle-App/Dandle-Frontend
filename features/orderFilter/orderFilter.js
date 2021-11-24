import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { OrderProgressTab } from '../../components/molecules/Molecules';
import { colors, TextLight } from '../../styles/styles';
import { selectOrders, setOrders } from '../orders/orderSlice';
import { orderData } from '../orders/orderData';

const {background, primary, textLight, textDark} = colors;

export const OrderFilter = ({
    onPressTab,
    tabs,
    style,
    ...props
}) => {
    
    const [selectedTab, setSelectedTab] = React.useState(0)
    const dispatch = useDispatch();
    const order_data = useSelector(selectOrders);

    function handleTabPress(index, tab) {
      /**
       * @param {number} index - index of the tab
       * @param {string} tab - name of the tab
       * @returns {void}
       */
        setSelectedTab(index);
    }

    function filterOrders(tab) {
        /**
         * @param {string} tab - name of the tab
         * @returns {array} filteredOrders - array of orders filtered by the tab
         * @description Filters the orders by the tab name
         * */
        const filteredOrders = order_data.filter(order => order.status === tab);
        return filteredOrders;
    }

    return (
        <View style={{flexDirection: 'row', width:'90%'}}>
          {tabs.map((tab, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  height: 25,
                  backgroundColor: selectedTab === index ? primary : 'transparent',
                  borderWidth: selectedTab === index ? 0 : 1,
                  borderColor: '#ccc',
                  marginRight: 5, marginLeft: 5,
                }}
                onPress={() => handleTabPress(index, tab)}
              >
                <Text style={{color: selectedTab === index ? textLight : textDark}}>{tab}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}