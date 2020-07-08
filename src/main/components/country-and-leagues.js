import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import D_C from '../../design-constants';
import Feather from 'react-native-vector-icons/Feather';


function CountryAndLeagues(props) {
    const [showDetails, setShowDetails] = useState(false);

    function onCountryPressed() {
        console.log('country pressed');
        setShowDetails(!showDetails);
    }

    return <TouchableOpacity style={{
        paddingVertical: 20,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }} onPress={() => onCountryPressed()}>
        <Text style={{color: '#000', fontSize: D_C.fontSizeL}}>{props.countryAndLeagues.countryName}</Text>
        <Feather name={showDetails ? 'chevron-up' : 'chevron-down'} size={30} color={D_C.lightGray}/>
    </TouchableOpacity>;
}

export default CountryAndLeagues;
