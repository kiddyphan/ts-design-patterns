import { Theme } from "./theme";

export class DarkTheme implements Theme {
    color = () => {
        return 'Dark Theme';       
    }
}