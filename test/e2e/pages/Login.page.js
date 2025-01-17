class LoginPage {
    open() {
        browser.url('/');
    }

    get inputEmail() {
        return $('body #email');
    }

    get inputPassword() {
        return $('body #password');
    }

    get buttonSignIn() {
        return $('body #submit');
    }

    get userLoggedIn() {
        return $('body #username');
    }

    login(user) {
        this.inputEmail.waitForEnabled();
        this.inputEmail.setValue(user.login);
        this.inputPassword.setValue(user.password);
        this.buttonSignIn.click();
    }
}

export const loginPage = new LoginPage();
