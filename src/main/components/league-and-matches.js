import React from "react";
import {View, Text} from "react-native";
import Match from './match';
import D_C from '../../design-constants';

function LeagueAndMatches(props) {

    function renderMatches() {
        return props.competition.matches.map(match => {
            return <Match match={match}/>
        });
    }

    function renderLeagueTitle() {
        return <Text style={{color: D_C.lightGray, fontSize: D_C.fontSizeL}}>{props.competition.leagueName}</Text>;
    }

    return <View>
        {renderLeagueTitle()}
        {renderMatches()}
    </View>
}

export default LeagueAndMatches;
