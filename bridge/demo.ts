import { DarkTheme } from "./dark-theme";
import { AboutPage } from "./about-page";
import { LightTheme } from "./light-theme";
import { HomePage } from "./home-page";

/*
    Decouple an abstraction from its implementation so that the two can vary independently.
*/
class BridgeDemo {

    constructor() {
        let lightTheme = new LightTheme();
        let homePage = new HomePage(lightTheme);

        homePage.render();

        let darkTheme = new DarkTheme();
        let aboutPage = new AboutPage(darkTheme);

        aboutPage.render();
    }
}

new BridgeDemo();
