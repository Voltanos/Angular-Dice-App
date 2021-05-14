export class StringBuilderService {
    constructor() {}

    Create() {
        return new StringBuilder();
    }
}

function StringBuilder() {
    /////////////////////////////////////////////////
    //Private Variables

    var StringList = [];

    /////////////////////////////////////////////////

    /////////////////////////////////////////////////
    //Public Methods

    this.Append = function (value) {
        try {
            AppendToStringList(value);
        }

        catch (error) {
            console.log(error);
        }
    }

    this.AppendFormat = function (pattern, array) {
        try {
            ModifyPattern(pattern, array);
        }

        catch (error) {
            console.log(error);
        }
    }

    this.Insert = function (value, index) {
        try {
            InsertIntoStringList(value, index);
            
        }

        catch (error) {
            console.log(error);
        }
    }

    this.Remove = function (startIndex) {
        try {
            RemoveFromStringList(startIndex);
        }

        catch (error) {
            console.log(error);
        }
    }

    this.Replace = function (startIndex, newValue) {
        try {
            ReplaceFromStringList(startIndex, newValue);
        }

        catch (error) {
            console.log(error);
        }
    }

    this.Clear = function () {
        try {
            ClearStringList();
        }

        catch (error) {
            console.log(error);
        }
    }

    this.ToString = function () {
        try {
            return ConvertStringListToString();
        }

        catch (error) {
            console.log(error);
            return "";
        }
    }

    /////////////////////////////////////////////////

    /////////////////////////////////////////////////
    //Private Methods

    function ReplaceFromStringList(startIndex, newValue) {
        if (IndexIsInStringList(startIndex) === false) {
            return;
        }

        if (ValueIsNotNullOrUndefined(newValue) === false) {
            return;
        }

        StringList.splice(startIndex, 1, newValue);
    }

    function ValueIsNotNullOrUndefined(value) {
        if ((value === null) || (value === undefined)) {
            return false;
        }

        return true;
    }

    function RemoveFromStringList(startIndex) {
        if (IndexIsInStringList(startIndex) === false) {
            return;
        }

        StringList.splice(startIndex, 1);
    }

    function IndexIsInStringList(index) {
        if (index < StringList.length) {
            return true;
        }

        return false;
    }

    function InsertIntoStringList(value, index) {
        StringList.splice(index, 0, value);
    }

    function ModifyPattern(pattern, array) {
        ///////////////////////////////////////////
        //Local Variables

        var x = 0;

        ///////////////////////////////////////////

        for (x = 0; x < array.length; x += 1) {
            pattern = pattern.replace("{" + x + "}", array[x]);
        }

        AppendToStringList(pattern);
    }

    function AppendToStringList(value) {
        if (ValueIsNotNullOrUndefined(value) === true) {
            StringList.push(value);
        }
    }

    function ClearStringList() {
        StringList = [];
    }

    function ConvertStringListToString() {
        return StringList.join("");
    }

    /////////////////////////////////////////////////
}