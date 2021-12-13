import React from 'react';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { OrderProgressTab } from '../../components/molecules/Molecules';
import { colors, TextLight } from '../../styles/styles';
import { selectOrders } from '../orders/orderSlice';
import { selectFilter, setFilteredOrders } from './orderFilterSlice';

const {background, backgroundLight, primary, textLight, 
  textDark, bgWhite} = colors;

export const OrderFilter = ({
    onPressTab,
    tabs,
    style,
    ...props
}) => {
    
    const [selectedTab, setSelectedTab] = React.useState(0)
    const [searchText, setSearchText] = React.useState('')
    const dispatch = useDispatch();
    const allOrders = useSelector(selectOrders);

    function handleTabPress(index, tab) {
      /**
       * @param {number} index - index of the tab
       * @param {string} tab - name of the tab
       * @returns {void}
       */
        setSelectedTab(index);
        filterOrders(tab);
    }

    function handleSeachChange(text) {
        /**
         * @param {string} text - text to filter by
         * @returns {void}
         */
        setSearchText(text);
        filterOrders(text);
    }

    function filterOrders(query) {
      /**
       * @param {string} query
       * @returns {array} filteredOrders
       * @description Filters the orders array based on query
       */
      const filteredOrders = allOrders.filter((order) => {
        return order.order_id.toLowerCase().includes(query.toLowerCase()) ||
          order.customerName.toLowerCase().includes(query.toLowerCase()) ||
          order.orderStatus.toLowerCase().includes(query.toLowerCase()) ||
          order.orderDate.toLowerCase().includes(query.toLowerCase());
      });
      dispatch(setFilteredOrders(filteredOrders));
    }

    return (
      <View style={{paddingBottom:20}}>
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
        <SearchBar
          placeholder="search"
          onChangeText={(text) => handleSeachChange(text)}
          value={searchText}
          onClear={() => setSearchText('')}
          onSubmitEditing={() => filterOrders(searchText)}
          containerStyle={{
            backgroundColor: backgroundLight,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginTop: 10,
            marginBottom: 10,
          }}
          inputContainerStyle={{
            backgroundColor: bgWhite,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#ccc',
            marginTop: 10,
            height: 35,
            marginBottom: 10,
          }}
        />
      </View>
    );
}