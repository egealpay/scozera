import React from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import D_C from '../../design-constants';

function Match(props) {

    function renderScores() {
        return <View>
            <Text style={{fontSize: D_C.fontSizeL}}>{props.match.score.home}</Text>
            <Text style={{fontSize: D_C.fontSizeL}}>{props.match.score.away}</Text>
        </View>;
    }

    function renderTeamNames() {
        return <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 1, backgroundColor: D_C.lightGray, marginRight: 8}}/>
            <View>
                <Text style={{fontSize: D_C.fontSizeL}}>{props.match.homeTeam.name}</Text>
                <Text style={{fontSize: D_C.fontSizeL}}>{props.match.awayTeam.name}</Text>
            </View>
        </View>;
    }

    function renderDate() {
        return <Text
            style={{marginRight: 8, fontSize: D_C.fontSizeL}}>{moment(props.match.mstUtc).format('HH:mm')}</Text>;
    }

    return <View style={{flexDirection: 'row', marginVertical: 12, alignItems: 'center'}}>
        {renderDate()}
        {renderTeamNames()}
        {renderScores()}
    </View>;
}

export default Match;
