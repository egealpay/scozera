import moment from 'moment';
import MainModel from './main-model';
import BasePresenter from '../base/base-presenter';

class MainPresenter extends BasePresenter {
    mainModel = new MainModel();

    parseFixture(jsonObject) {
        let result = {};

        let competitions = jsonObject.competitions;
        for (const competitionId of Object.keys(competitions)) {
            result[competitionId] = {};
            result[competitionId].leagueName = competitions[competitionId].name;
            result[competitionId].countryName = competitions[competitionId].country.name;
            result[competitionId].matches = [];
        }

        let matches = jsonObject.matches;
        for (const matchId of Object.keys(matches)) {
            let currentMatch = matches[matchId];
            result[currentMatch.competitionId].matches.push(currentMatch);
        }

        let countryBasedArray = [];
        for(const competitionId of Object.keys(result)) {
            let filteredArray = countryBasedArray.filter((countryBasedObject) => countryBasedObject.countryName === result[competitionId].countryName);
            if (filteredArray.length === 0) {
                let newCountryBasedObject = {};
                newCountryBasedObject.countryName = result[competitionId].countryName;
                newCountryBasedObject.competitions = [result[competitionId]];
                countryBasedArray.push(newCountryBasedObject);
            } else {
                let tmpArr = filteredArray[0].competitions;
                tmpArr.push(result[competitionId]);
            }
        }

        return countryBasedArray;
    }

    async getFixtureByDate(date) {
        let dateFormatted = moment(date).format("YYYY-MM-DD");
        let dateFixture = await this.mainModel.getTodayFixture(dateFormatted);
        return this.parseFixture(dateFixture);
    }



}

export default MainPresenter;
