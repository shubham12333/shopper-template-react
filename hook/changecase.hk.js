

export function ChangeCase(str)
{ 
    var firstChar = str.charAt(0);
    var restChar = str.charAt(1);
    
    var sentence = firstChar.toUpperCase()+restChar.toLowerCase();

    return sentence;
}