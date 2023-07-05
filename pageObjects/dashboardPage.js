import Page from './page.js';

class DashboardPage extends Page {

    get haiText () {
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div/div[1]/div[1]/div/dl/dd');
    }

    get btnMenuPengguna () {
        return $('//*[@id="root"]/div/div/div[1]/div/a[7]/div/div/div');
    }

    get btnProfil () {
        return $('//*[@id="menu-button-6"]')
    }

    get btnLogout() {
        return $('//*[@id="menu-list-6-menuitem-4"]')
    }

    async getHaiText () {
        expect(this.haiText).toBeExisting()
    }

    // Tambahkan fungsi isLoggedIn untuk memeriksa status login
    async isLoggedIn() {
        return this.haiText.isExisting();
    }

    async clickPenggunaBtn(){
        return this.btnMenuPengguna.click()
    }

    async clickProfilBtn (){
        return this.btnProfil.click()
    }

    async clickLogoutBtn (){
        return this.btnLogout.click()
    }

}

export default new DashboardPage();