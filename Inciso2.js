var validation = [];
var index = 0;
validate("[hola]");

function validate(text) {
    try {
        validateText(text);
        console.log("Correcto");
    } catch (error) {
        console.log(error + ", posicion: " + index);
    }
}

function getNextLetter(text, index) {
    return text.substring(index, index+1);
}


function validateText(text) {
    for (index = 0; index < text.length; index++) {
        let character = getNextLetter(text, index);
        let validator = "";
        switch (character) {
            case "(":
            case "{":
            case "[":
                validation.push(character);
                break;
            case "]":
                validator = validation.pop();
                if(validator == null)
                {
                    throw "Error, se apertura para ]";
                }
                if(validator != "[")
                {
                    throw "Error, se esperaba cierre para: "+validator
                }
                break;
            case "}":
                validator = validation.pop();
                if(validator == null)
                {
                    throw "Error, se apertura para ]";
                }
                if(validator != "{")
                {
                    throw "Error, se esperaba cierre para: "+validator;
                }
                break;
            case ")":
                validator = validation.pop();
                if(validator == null)
                {
                    throw "Error, se apertura para ]";
                }
                if(validator != "(")
                {
                    throw "Error, se esperaba cierre para: "+validator
                }
                break;
            default:
                break;
        }
    }
    if(validation.length != 0)
    {
        throw "Error, revise existan (), [], {} de apertura y cierre";
    }
    

}