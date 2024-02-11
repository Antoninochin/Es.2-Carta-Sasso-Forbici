let person = window.prompt('Ciao Inserisci il tuo nome');
let pointPlayer;
let pointPc;

 if(person == null){
    person = prompt('Per favore inserisci il tuo nome')
 }
document.getElementById('saluto').innerHTML = `Ciao ${person} facciamo un gioco <i class="bi bi-emoji-smile"></i>!`

let sceltaPlayer;
function sasso(){
    sceltaPlayer = 'sasso';
    let sasso = document.getElementById('sasso');
    sasso.style.backgroundColor = 'blue';
    sasso.style.color = 'white';
    document.getElementById('scelta1').innerHTML = 'Hai scelto Sasso';
    document.getElementById('carta').style.display = 'none';
    document.getElementById('forbici').style.display = 'none';
}
function carta(){
    sceltaPlayer = 'carta';
    let carta = document.getElementById('carta');
    carta.style.backgroundColor = 'blue';
    carta.style.color = 'white';
    document.getElementById('scelta2').innerHTML = 'Hai scelto Carta';
    document.getElementById('sasso').style.display = 'none';
    document.getElementById('forbici').style.display = 'none';
}
function forbici(){
    sceltaPlayer = 'forbici';
    let forbici = document.getElementById('forbici');
    forbici.style.backgroundColor = 'blue';
    forbici.style.color = 'white';
    document.getElementById('scelta3').innerHTML = 'Hai scelto Forbici';
    document.getElementById('carta').style.display = 'none';
    document.getElementById('sasso').style.display = 'none';
}
function risultato(){
    document.getElementById('sasso').style.display = 'none';
    document.getElementById('carta').style.display = 'none';
    document.getElementById('forbici').style.display = 'none';
    document.getElementById('conferma').style.display = 'none';
    document.getElementById('scelta1').style.display = 'none';
    document.getElementById('scelta2').style.display = 'none';
    document.getElementById('scelta3').style.display = 'none';
    document.getElementById('continua').style.display = 'block';
    let p = document.querySelector('p');
    p.setAttribute('id', 'scegliere');
    document.getElementById('scegliere').style.display = 'none';
    let sceltaPc = ['sasso', 'carta', 'forbici'].sort(() => Math.random() - 0.5);
    if(sceltaPlayer == 'carta' && sceltaPc[0] == 'sasso'){
        pointPlayer = document.getElementById('pointPlayer').innerHTML = 1;
        document.getElementById('saluto').innerHTML = `Hai Vinto ${person}!!, tutta fortuna!`;
        document.getElementById('risultato').innerHTML = `Io ho scelto ${sceltaPc[0]}, tu invece ${sceltaPlayer}.`;
        }else if(sceltaPc[0] == 'carta' && sceltaPlayer == 'sasso'){
            pointPc = document.getElementById('pointPc').innerHTML =1;
            document.getElementById('saluto').innerHTML = `Purtroppo hai perso ${person}, la prossima volta sarai più fortunato!`;
            document.getElementById('risultato').innerHTML = `Io ho scelto ${sceltaPc[0]}, tu invece ${sceltaPlayer}.`;
        }else if(sceltaPlayer == 'forbici' && sceltaPc[0] == 'carta'){
            pointPlayer = document.getElementById('pointPlayer').innerHTML = 1;
            document.getElementById('saluto').innerHTML = `Hai Vinto ${person}!!, tutta fortuna!`;
            document.getElementById('risultato').innerHTML = `Io ho scelto ${sceltaPc[0]}, tu invece ${sceltaPlayer}.`;
        }else if(sceltaPc[0] == 'forbici' && sceltaPlayer == 'carta'){
            pointPc = document.getElementById('pointPc').innerHTML = 1;
            document.getElementById('saluto').innerHTML = `Purtroppo hai perso ${person}, la prossima volta sarai più fortunato!`;
            document.getElementById('risultato').innerHTML = `Io ho scelto ${sceltaPc[0]}, tu invece ${sceltaPlayer}.`;
        }else if(sceltaPlayer == 'sasso' && sceltaPc[0] == 'forbici'){
            pointPlayer = document.getElementById('pointPlayer').innerHTML = 1;
            document.getElementById('saluto').innerHTML = `Hai Vinto ${person}!!, tutta fortuna!`;
            document.getElementById('risultato').innerHTML = `Io ho scelto ${sceltaPc[0]}, tu invece ${sceltaPlayer}.`;
        }else if(sceltaPc[0] == 'sasso' && sceltaPlayer == 'forbici'){
            pointPc = document.getElementById('pointPc').innerHTML = 1;
            document.getElementById('saluto').innerHTML = `Purtroppo hai perso ${person}, la prossima volta sarai più fortunato!`;
            document.getElementById('risultato').innerHTML = `Io ho scelto ${sceltaPc[0]}, tu invece ${sceltaPlayer}.`;
        }else if(sceltaPlayer == sceltaPc || sceltaPc[0] == sceltaPlayer){
            document.getElementById('risultato').innerHTML = `${person} scegli di nuovo`;
            document.getElementById('saluto').innerHTML = `Abbiamo pareggiato, bella partita!`;
            document.getElementById('sasso').style.display = 'block';
            document.getElementById('carta').style.display = 'block';
            document.getElementById('forbici').style.display = 'block';
            document.getElementById('conferma').style.display = 'block';
            document.getElementById('scelta1').style.display = 'block';
            document.getElementById('scelta2').style.display = 'block';
            document.getElementById('scelta3').style.display = 'block';
        }else if(sceltaPlayer == undefined){
            document.getElementById('saluto').innerHTML = `${person} scegli qualcosa.`;
            document.getElementById('sasso').style.display = 'block';
            document.getElementById('carta').style.display = 'block';
            document.getElementById('forbici').style.display = 'block';
            document.getElementById('conferma').style.display = 'block';
            document.getElementById('scelta1').style.display = 'block';
            document.getElementById('scelta2').style.display = 'block';
            document.getElementById('scelta3').style.display = 'block';
            document.getElementById('saluto').innetHTMl;
        }
        console.log(pointPlayer, pointPc)
    
    console.log(sceltaPlayer)
}

    /*if(sceltaPlayer == 'sasso'){
        sceltaPc = 'carta'; 
    } else if(sceltaPlayer == 'carta'){
        sceltaPc = 'forbici'; 
    }else if(sceltaPlayer == 'forbici'){
        sceltaPc = 'sasso'; 
        document.getElementById('saluto').innerHTML = `Purtroppo hai perso ${person}, la prossima volta sarai più fortunato!`;
        document.getElementById('risultato').innerHTML = `Io ho scelto ${sceltaPc[0]}, tu invece ${sceltaPlayer}.`
    }*/
