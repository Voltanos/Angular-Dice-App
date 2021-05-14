import { Component } from '@angular/core';
import { MessageService } from "../services/message.service";

@Component({
    selector: "dice-message",
    templateUrl: "./dice-message.component.html"
})

export class DiceMessageComponent {
    constructor(
        public messageService : MessageService
    ) {}

    Reset($event) {
        this.messageService.clearMessage();
    }
}