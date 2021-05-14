import { FormGroup, FormControl } from "@angular/forms"
import { D2, D4, D6, D8, D10, D12, D20, D100, Custom } from "../models/DiceList";

export class DiceTypeService {
    public D2() {
        return new D2();
    }

    public D4() {
        return new D4();
    }

    public D6() {
        return new D6();
    }

    public D8() {
        return new D8();
    }

    public D10() {
        return new D10();
    }

    public D12() {
        return new D12();
    }

    public D20() {
        return new D20();
    }

    public D100() {
        return new D100();
    }

    public ToList() {
        return [
            new D2(),
            new D4(),
            new D6(),
            new D8(),
            new D10(),
            new D12(),
            new D20(),
            new D100(),
            new Custom()
        ]
    }

    public ToFormGroupList(): FormGroup[] {
        let formGroupList: FormGroup[] = [];

        this.ToList().forEach((dice) => {
            formGroupList.push(dice.ToFormGroup());
        });

        return formGroupList;
    }
}