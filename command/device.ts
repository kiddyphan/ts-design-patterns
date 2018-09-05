// Reciever
export interface Device {
    on: () => void;
    off: () => void;
    volumeUp: () => void;
    volumeDown: () => void;
}