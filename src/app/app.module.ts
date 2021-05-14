import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DiceTableComponent } from "./dice-table/diceTable.component";
import { DiceMessageComponent } from "./dice-message/dice-message.component";

//Services
import { StringBuilderService } from "./services/StringBuilder.service";
//import { DiceService } from "./services/Dice.service";
import { DiceTypeService } from "./services/DiceType.service";
import { MessageService } from "./services/message.service";

//Components

@NgModule({
  declarations: [
    AppComponent,
    DiceTableComponent,
    DiceMessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    StringBuilderService,
    //DiceService,
    DiceTypeService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
