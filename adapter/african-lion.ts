import { Lion } from "./lion";

export class AfricanLion implements Lion {
    roar = () => {
        console.log('AfricanLion Roar');
    }
}