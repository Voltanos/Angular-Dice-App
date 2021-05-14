import { FormGroup, FormControl } from "@angular/forms";

export class DiceModel {
    ID: number;
    Rolls: number;
    Sides: number;
    Modifier: number;
    Results: number;
    Title: string;
    SidesIsReadonly: boolean;

    constructor() {
        this.ID = -1;
        this.Rolls = -1;
        this.Sides = -1;
        this.Modifier = -1;
        this.Results = -1;
        this.Title = null;
        this.SidesIsReadonly = true;
    }

    public GetSingleRoll(): number {
        return this.RandomRoll(this.Sides);
    }

    public GetMultipleRolls(): number {
        return this.MultiRandomRoll(this.Sides, this.Rolls);
    }

    public ToFormGroup(): FormGroup {
        let formGroup = new FormGroup({
            ID:  new FormControl(this.ID),
            Rolls: new FormControl(this.Rolls),
            Sides: new FormControl(this.Sides),
            Modifier: new FormControl(this.Modifier),
            Results: new FormControl(this.Results),
            Title: new FormControl(this.Title),
            SidesIsReadonly: new FormControl(this.SidesIsReadonly)
        });

        return formGroup;
    }

    private RandomRoll(max): number {
        return Math.floor((Math.random() * max) + 1);
    }

    private MultiRandomRoll(max, multiplier): number {
        var total = 0;

        for (var i = 0; i < multiplier; i += 1) {
            total += this.RandomRoll(max);
        }

        return total;
    }
}