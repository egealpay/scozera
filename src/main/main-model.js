import BaseModel from '../base/base-model';

class MainModel extends BaseModel {
    getTodayFixture(date) {
        return new Promise((resolve, reject) => {
            super.getMethod(`https://www.mackolik.com/perform/p0/ajax/components/competition/livescores/json?sports[]=Soccer&matchDate=${date}`)
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    console.log('Cannot fetch today fixture: ', err);
                });
        });
    }
}

export default MainModel;
