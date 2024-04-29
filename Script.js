//console.log(1)
let zina = document.querySelector('.zina').value;
let zinas = document.querySelector('.CataZina');
function sutitZinu()

{

console.log('sutitZinu()darbojas');

zinas.innerHTML = zinas.innerHTML+ '<br>'+zina.value;

}

async function ieladetChataZinas()

{

let datiNoServera = await fetch('chatazinas.txt');

let dati =await datiNoServera.text;

//console.log(dati);

zinas.innerHTML = dati;

}