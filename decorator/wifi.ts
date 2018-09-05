import { BookingDecorator } from "./booking-decorator";

export class Wifi extends BookingDecorator {
    private price: number = 300;

    getCost = () => {
        return this.booking.getCost() + this.price;
    }

    getDescription = () => {
        return this.booking.getDescription() + ' with Wifi';
    }
}