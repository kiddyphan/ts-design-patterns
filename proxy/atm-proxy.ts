import { Balance } from "./balance";
import { ATM } from "./atm";

export class ATMProxy implements Balance {

    private secureCode: string;
    private atm: ATM;

    constructor(secureCode: string) {
        this.secureCode = secureCode;
    }

    authenticate = (): boolean => {
        return this.secureCode === '123456';
    }

    deposit = () => {
        if (this.authenticate()) {
            this.atm = new ATM();
            this.atm.deposit();
        } else {
            console.log('Secure Code Invalid!!!');
        }
    };
}