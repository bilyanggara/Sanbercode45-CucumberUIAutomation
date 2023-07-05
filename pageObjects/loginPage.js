import Page from "./page.js";

class LoginPage extends Page {

    get emailField () {
        return $('#email');
    }

    get passwordField () {
        return $('#password');
    }

    get btnSubmit () {
        return $('//*[@id="root"]/div/div/div/div[2]/div/button');
    }

    get errMsgIncorrectPass(){
        return $('//*[@id="root"]/div/div/div/div[2]/div/div[1]')
    }

    async clickLoginBtn(){
        return this.btnSubmit.click()
    }

    async login (email, password) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.btnSubmit.click();
    }

    async getErrMsgIncorrectPass(){
        await expect(this.errMsgIncorrectPass).toBeExisting()
    }

}

export default new LoginPage();