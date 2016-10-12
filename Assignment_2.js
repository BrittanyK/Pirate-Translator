
var PirateTalk = [
    ["attractive", "comely"],
    ["bank", "buried treasure"],
    ["excuse me", "arrr"],
    ["friend", "me bucko"],
    ["happy", "grog-filled"],
    ["hello", "ahoy"],
    ["hi", "yo-ho-ho"],
    ["hotel", "fleabag inn"],
    ["how far", "how many leagues"],
    ["is", "be"],
    ["know", "be knowin'"],
    ["madam", "proud beauty"],
    ["miss", "comely wench"],
    ["my", "me"],
    ["nearby", "broadside"],
    ["officer", "foul blaggart"],
    ["old", "barnacle-covered"],
    ["pardon me", "avast"],
    ["pub", "Skull & Scuppers"],
    ["restroom", "head"],
    ["restaurant", "galley"],
    ["sir", "matey"],
    ["stranger", "scurvy dog"],
    ["tell", "be tellin'"],
    ["the", "th'"],
    ["where", "whar"],
    ["you", "ye"]
 ];

function upperCase(str)
    {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

function Translate(text)
    {
        for (var i = 0; i < PirateTalk.length; i++) {
            var newText = new RegExp("\\b"+PirateTalk[i][0]+"\\b", "i");

            var index = text.search(newText);
            while (index != -1) {
               if (text.charAt(index) >= "A" && text.charAt(index) <= "Z"){
               text = text.replace(newText, upperCase(PirateTalk[i][1]));
               }
               else{
               text = text.replace(newText, PirateTalk[i][1]);
               }
               index = text.search(newText);
            }
        }
        return text;
    }

var file = document.getElementById("yourFile").files[0];
var readFile = new FileReader();

readFile.onload = function(e) {
    var userText = document.getElementById("input");
    userText.value = e.target.result;
};

 readFile.readAsText(Blob);

 var replace = document.getElementById("btn");
 var normal = document.getElementById("input");
 var pirateText = document.getElementById("output");
 pirateText.disabled = true;

 normal.onkeyup = function(){
 pirateText.value = "";
 }

 replace.onclick = function(){
 pirateText.value = Translate(normal.value);
 }