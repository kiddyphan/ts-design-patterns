import { BookingDecorator } from "./booking-decorator";

export class Breakfast extends BookingDecorator {
    private price: number = 30;

    getCost = () => {
        return this.booking.getCost() + this.price;
    }

    getDescription = () => {
        return this.booking.getDescription() + ' with Breakfast';
    }
}