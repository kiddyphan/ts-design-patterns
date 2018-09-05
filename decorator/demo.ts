import { BookingDecorator } from "./booking-decorator";
import { Wifi } from "./wifi";
import { Breakfast } from "./breakfast";
import { Lunch } from "./lunch";
import { Room } from "./booking";

export class DecoratorDemo {
    constructor() {
        let booking = new Wifi(new Breakfast(new Lunch(new Room(404))));
        console.log(booking.getCost());
        console.log(booking.getDescription());
    }
}

new DecoratorDemo();