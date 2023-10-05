document.getElementById("rezervacijaBtn").onclick = function(){
    let institucija = document.getElementById("institucija").value;
    let brLjudi = document.getElementById("brLjudi").value;
    let datum = document.getElementById("datum").value;
    institucija = Boolean(institucija);
    brLjudi = Boolean(brLjudi);
    datum = Boolean(datum);

    if (institucija = true && brLjudi == true && datum == true){
        alert("Uspesna rezervacija!");
        location.reload();
    }

    else{
        alert("Niste uneli sve podatke!");
        location.reload();
    }
    
}