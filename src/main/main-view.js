import React, {useEffect, useState} from 'react';
import MainPresenter from './main-presenter';
import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import BaseView from '../base/base-view';
import CountryAndLeagues from './components/country-and-leagues';
import D_C from '../design-constants';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

function MainView(props) {
    const [countryAndLeaguesArray, setCountryAndLeaguesArray] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    let mainPresenter = new MainPresenter();
    const nav = useNavigation();

    useEffect(() => {
        nav.setOptions({
            headerRight: () => renderDateButton(),
        });
    }, []);

    useEffect(() => {
        getFixture();
    }, [selectedDate]);

    function renderDateButton() {
        return <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Feather name={'calendar'} size={32} color={D_C.white} style={{marginRight: 16}}/>
        </TouchableOpacity>;
    }

    function getFixture() {
        mainPresenter.getFixtureByDate(selectedDate)
            .then((_countryAndLeaguesArray) => {
                setCountryAndLeaguesArray(_countryAndLeaguesArray);
                setIsRefreshing(false);
            });
    }

    const onRefresh = () => {
        setIsRefreshing(true);
        getFixture();
    };

    const onConfirm = (date) => {
        setShowDatePicker(false);
        setSelectedDate(date);
    };

    const onCancel = () => {
        setShowDatePicker(false);
    };

    const flatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    marginLeft: 16,
                    marginRight: 16,
                    backgroundColor: D_C.lightGray,
                }}
            />
        );
    };

    return <BaseView>
        <FlatList
            data={countryAndLeaguesArray}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            renderItem={({item, index, separators}) => <CountryAndLeagues countryAndLeagues={item}/>}
            keyExtractor={countryAndLeagues => countryAndLeagues.countryName}
            ItemSeparatorComponent={flatListItemSeparator}
        />
        <DateTimePickerModal
            cancelTextIOS={'İptal'}
            locale={'tr_TR'}
            confirmTextIOS={'Onayla'}
            headerTextIOS={'Tarih Seçiniz'}
            isVisible={showDatePicker}
            date={selectedDate}
            mode="date"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    </BaseView>;
}

export default MainView;
