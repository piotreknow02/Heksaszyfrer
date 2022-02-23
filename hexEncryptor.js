
function Encrypt(message)
{
    if(!message) return "";
    let result = "";
    
    for (let i = 0; i < message.length; i++)
    {
        result += parseInt(message.charCodeAt(i)).toString(16) + " ";
    }
    return result;
}
function Decrypt(code)
{
    if(!code) return "";
    let result = "";

    hexMessage = hexStrToArray(code);
    if (!hexMessage) return ;
    for (let i = 0; i < hexMessage.length; i++)
    {
        result += String.fromCharCode(parseInt(hexMessage[i], 16));
    }
    return result;
}
function hexStrToArray(hexStr)
{
    if (!hexStr) return [];
    let arrIndex = 0;
    let result = [];
    for (let hs = 0; hs < hexStr.length; hs++)
    {
        if (hexStr[hs] == " ") { arrIndex++; continue; }
        if(result[arrIndex] == undefined) result[arrIndex] = "";
        result[arrIndex] += hexStr[hs];
    }
    return result;
}
module.exports = { Encrypt, Decrypt };