class ParkCar {
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
        return $('#username');
    }

    login(user) {
        this.inputEmail.waitForEnabled();
        this.inputEmail.setValue(user.login);
        this.inputPassword.setValue(user.password);
        this.buttonSignIn.click();
    }
}

export const parkCar = new ParkCar();