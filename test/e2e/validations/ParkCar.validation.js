import { assert } from 'chai';
import { parkCar } from '../pages/ParkCar.page';

class ParkCarValidation {

    checkUserName(userName) {
        assert.equal(parkCar.userLoggedIn.getText(), userName);
    }
}

export const parkCarValidation = new (ParkCarValidation);