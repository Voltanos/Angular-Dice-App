import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { StringBuilderService } from "../services/StringBuilder.service";
import { DiceService } from "../services/Dice.service";
import { DiceTypeService } from "../services/DiceType.service";
import { MessageService } from "../services/message.service";
import { DiceModel } from "../models/DiceModel";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'dice-table',
    templateUrl: './DiceTable.component.html'
})

export class DiceTableComponent {
    DiceList = [];
    DiceFormGroupList: FormGroup[];
    SelectedDice: DiceModel = null;
    
    constructor(
        private readonly diceTypeService: DiceTypeService,
        private readonly stringBuilderService: StringBuilderService,
        //private readonly diceService: DiceService,
        private readonly messageService: MessageService
    ) {

    }

    ngOnInit() {
        this.DiceList = this.diceTypeService.ToList();
    }

    Roll(selectedDice) {
        this.SelectedDice = selectedDice;
        this.SelectedDice.Results = 0;

        let builder = this.stringBuilderService.Create();

        builder.Append("\n");
        builder.Append("\n");
        builder.AppendFormat("Roll({0}):", [this.SelectedDice.Sides]);
        builder.Append("\n");

        builder = this.MakeIndividualRollsAndPutInStringBuilder(builder);

        builder.Append("\n");

        builder = this.CheckForModifier(builder);

        builder.AppendFormat("Total:  {0}", [this.SelectedDice.Results]);

        this.messageService.pushMessage(builder.ToString());
    }

    MakeIndividualRollsAndPutInStringBuilder(builder) {
        let roll = 0;
        const maxRolls = this.SelectedDice.Rolls;

        for (let i = 0; i < maxRolls; i += 1) {
            if (i !== 0) {
                builder.Append("+");
            }

            roll = this.SelectedDice.GetSingleRoll();
            builder.Append(roll);
            this.SelectedDice.Results += roll;
        }

        return builder;
    }

    CheckForModifier(builder) {
        const modifier = this.SelectedDice.Modifier;

        if (modifier !== 0) {
            this.SelectedDice.Results += modifier;
            builder.AppendFormat("+ ( {0} ) Modifier", [modifier]);
            builder.Append("\n");
        }

        return builder;
    }

    onBlurRolls($event, index) {
        this.DiceList[index].Rolls = $event.target.valueAsNumber;
    }

    onBlurModifier($event, index) {
        this.DiceList[index].Modifier = $event.target.valueAsNumber;
    }

    onBlurSides($event, index) {
        this.DiceList[index].Sides = $event.target.valueAsNumber;
    }
}