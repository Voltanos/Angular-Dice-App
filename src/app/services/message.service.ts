import { Observable, of } from "rxjs";

export class MessageService {
    private Message: string;
    private readonly defaultMessage: string = "\n\nThis field records your latest roll at its top.";

    constructor() {
        this.Message = this.defaultMessage;
    }

    getMessage(): string {
        return this.Message;
    }

    setMessage(newMessage: string): void {
        this.Message = newMessage;
    }

    pushMessage(newMessage: string): void {
        newMessage += this.Message;
        this.Message = newMessage;
    }

    clearMessage(): void {
        this.Message = this.defaultMessage;
    }
}