import React, {useEffect, useState} from 'react';
import MainPresenter from './main-presenter';
import {FlatList, View} from 'react-native';
import BaseView from '../base/base-view';
import CountryAndLeagues from './components/country-and-leagues';
import D_C from '../design-constants';

function MainView(props) {
    const [countryAndLeaguesArray, setCountryAndLeaguesArray] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    let mainPresenter = new MainPresenter();

    useEffect(() => {
        getTodayFixture();
    }, []);

    function getTodayFixture() {
        mainPresenter.getTodayFixture()
            .then((_countryAndLeaguesArray) => {
                setCountryAndLeaguesArray(_countryAndLeaguesArray);
                setIsRefreshing(false);
            });
    }

    const onRefresh = () => {
        setIsRefreshing(true);
        getTodayFixture();
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
    </BaseView>;
}

export default MainView;
