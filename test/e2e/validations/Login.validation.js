import { assert } from 'chai';
import { loginPage } from '../pages/Login.page';

class LoginValidation {

    checkUserName(userName) {
        assert.equal(loginPage.userLoggedIn.getText(), userName);
    }
}

export const loginValidation = new LoginValidation();
