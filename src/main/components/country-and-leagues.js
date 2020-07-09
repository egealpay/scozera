import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import D_C from '../../design-constants';
import Feather from 'react-native-vector-icons/Feather';
import LeagueAndMatches from './league-and-matches';


function CountryAndLeagues(props) {
    const [showDetails, setShowDetails] = useState(false);

    function renderLeaguesAndMatches() {
        if (!showDetails) {
            return null;
        }

        return props.countryAndLeagues.competitions.map(competition => {
            return <LeagueAndMatches competition={competition}/>;
        });
    }

    function onCountryPressed() {
        console.log('country pressed');
        setShowDetails(!showDetails);
    }

    return <View style={{
        paddingVertical: 20,
        paddingLeft: 16,
        paddingRight: 16,
    }}>
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            onPress={() => onCountryPressed()}>
            <Text style={{color: '#000', fontSize: D_C.fontSizeXL}}>{props.countryAndLeagues.countryName}</Text>
            <Feather name={showDetails ? 'chevron-up' : 'chevron-down'} size={30} color={D_C.lightGray}/>
        </TouchableOpacity>
        {renderLeaguesAndMatches()}
    </View>;
}

export default CountryAndLeagues;
