import { Before, Given, Then, When } from "@wdio/cucumber-framework";
import penggunaPage from "../pageObjects/penggunaPage";
import dashboardPage from "../pageObjects/dashboardPage";
import utils from "../helper/utils";
import loginPage from "../pageObjects/loginPage";
import Page from "../pageObjects/page";

const page = new Page();
Before(async () => {
    await page.open();
    utils.pause(1);

    const isLoggedIn = await dashboardPage.isLoggedIn();
    if (!isLoggedIn) {
        await loginPage.login('jaya@gmail.com', '123456')
        await loginPage.clickLoginBtn()
    }
});

Given('I am on the admin dashboard', async () => {
    await dashboardPage.getHaiText()
});

When('I click on the "pengguna" menu item', async () => {
    await dashboardPage.clickPenggunaBtn();
});

When('I click on the "tambah" button on the pengguna page', async () => {
    await penggunaPage.clickTambahBtn();
});

When('I input nama as {string} and email as {string} and password as {string}', async (nama,email,password) => {
    await penggunaPage.simpan(nama,email,password);
});

When('I click on the "simpan" button', async () => {
    await penggunaPage.clickSimpanBtn();
});

Then('I should see a success alert', async () => {
    await penggunaPage.getSuccessMsg();
});

Then('I should see an error message for the "password" field', async () => {
    await penggunaPage.getErrMsgEmptyName();
});

