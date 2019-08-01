import { parkCar } from '../pages/ParkCar.page';
import { context } from '../../data/Context';
import { parkCarValidation } from '../validations/ParkCar.validation';

describe('Authentication page.', () => {
    before(() => {
        parkCar.open();
    });

    it('Displays login message successfully.', () => {
        parkCar.login(context.parkCar.user);
        // loginValidation.checkUserLoggedMessage();
    });

    it('Displays user name on the page.', () => {
        parkCarValidation.checkUserName(context.parkCar.user.name);
    });
});
