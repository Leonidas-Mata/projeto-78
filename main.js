var Nomes = ["Márcio e Alessandra","Leônidas e Helena"];
var Fotos = ["fotopem.jpg","fotoeei.jpg"];

var i = 0;
function ProximaFoto(){
    i++
    var numero = 5
    if(i > numero)
    {
        i = 0;
    }
    var updateImage = Fotos[i];
    var updateName = Nomes[i];
    document.getElementById("familymemberimage").src = updateImage;
    document.getElementById("familimembername").src = updateName
}