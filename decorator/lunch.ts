import { BookingDecorator } from "./booking-decorator";

export class Lunch extends BookingDecorator {
    private price: number = 50;

    getCost = () => {
        return this.booking.getCost() + this.price;
    }

    getDescription = () => {
        return this.booking.getDescription() + ' with Lunch';
    }
}