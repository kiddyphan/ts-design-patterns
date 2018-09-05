export interface BasicCommand {
    execute: () => void;
    undo: () => void;
    redo: () => void;
}