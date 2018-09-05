import { Booking } from "./booking";

export abstract class BookingDecorator implements Booking {
    protected booking: Booking;

    constructor(booking: Booking) {
        this.booking = booking;
    }

    getCost = () => {
        return this.booking.getCost();
    };

    getDescription = () => {
        return this.booking.getDescription();
    };
}