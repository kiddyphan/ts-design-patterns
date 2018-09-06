import { Balance } from "./balance";

export class ATM implements Balance {
    deposit = () => {
        console.log('Deposit balance');
    };
}