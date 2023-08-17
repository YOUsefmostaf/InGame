import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {fetchData} from '../../../../redux/reservationSlice';
import Card from './components/Card';
import {styles} from './styles';
import COLORS from '../../../../values/colors';

const Previous = () => {
  const data = useSelector((state: RootState) => state.reservation.value);
  const dispatch = useDispatch();
  const [first, setfirst] = useState([]);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchData());
  }, []);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={item => (
            <Card
              name={item.item.name}
              userName={item.item.username}
              phone={item.item.phone}
            />
          )}
        />
      ) : (
        <Text style={styles.noData}>
          <ActivityIndicator color={COLORS.blue} size={'large'}></ActivityIndicator>
        </Text>
      )}
    </View>
  );
};

export default Previous;
