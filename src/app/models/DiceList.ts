//import { DiceInterface } from "./DiceInterface";
import { DiceModel } from "./DiceModel";

export class D2 extends DiceModel {
    ID = 1;
    Rolls = 1;
    Sides = 2;
    Modifier = 0;
    Results = 0;
    Title = "D2";
    SidesIsReadonly = true;
}

export class D4 extends DiceModel {
    ID = 2;
    Rolls = 1;
    Sides = 4;
    Modifier = 0;
    Results = 0;
    Title = "D4";
    SidesIsReadonly = true;
};

export class D6 extends DiceModel {
    ID = 3;
    Rolls = 1;
    Sides = 6;
    Modifier = 0;
    Results = 0;
    Title = "D6";
    SidesIsReadonly = true;
};

export class D8 extends DiceModel {
    ID = 4;
    Rolls = 1;
    Sides = 8;
    Modifier = 0;
    Results = 0;
    Title = "D8";
    SidesIsReadonly = true;
};

export class D10 extends DiceModel {
    ID = 5;
    Rolls = 1;
    Sides = 10;
    Modifier = 0;
    Results = 0;
    Title = "D10";
    SidesIsReadonly = true;
};

export class D12 extends DiceModel {
    ID = 6;
    Rolls = 1;
    Sides = 12;
    Modifier = 0;
    Results = 0;
    Title = "D12";
    SidesIsReadonly = true;
};

export class D20 extends DiceModel {
    ID = 7;
    Rolls = 1;
    Sides = 20;
    Modifier = 0;
    Results = 0;
    Title = "D20";
    SidesIsReadonly = true;
};

export class D100 extends DiceModel {
    ID = 8;
    Rolls = 1;
    Sides = 100;
    Modifier = 0;
    Results = 0;
    Title = "D100";
    SidesIsReadonly = true;
};

export class Custom extends DiceModel {
    ID = 9;
    Rolls = 1;
    Sides = 0;
    Modifier = 0;
    Results = 0;
    Title = "Custom";
    SidesIsReadonly = false;
};