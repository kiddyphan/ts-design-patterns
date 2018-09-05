import { Device } from "./device";
import { TV } from "./tv";
import { Radio } from "./radio";
import { TurnOff } from "./turnoff-command";
import { TurnOn } from "./turnon-command";
import { RemoteControl } from "./remote-control";
import { VolumeUp } from "./volumeup-command";
import { VolumeDown } from "./volumedown-command";

/*
    In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.
*/
class CommandDemo {

    constructor() {

        // Reciever
        let deviceList: Device[] = [];
        let tv = new TV();
        let radio = new Radio();
        deviceList.push(tv);
        deviceList.push(radio);

        let commandOn = new TurnOn(deviceList);

        // Invoker
        let remoteControl = new RemoteControl(commandOn);
        remoteControl.press(1);


        let commandOff = new TurnOff(deviceList);
        remoteControl = new RemoteControl(commandOff);
        remoteControl.press(1);

        let commandVolumeUp = new VolumeUp(tv);
        remoteControl = new RemoteControl(commandVolumeUp);
        remoteControl.press(1);

        let commandVolumeDown = new VolumeDown(radio);
        remoteControl = new RemoteControl(commandVolumeDown);
        remoteControl.press(1);
        
    }
}

new CommandDemo();
