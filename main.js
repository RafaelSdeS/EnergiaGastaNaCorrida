function a(){
var peso = document.getElementById('peso').value
var altura = document.getElementById('altura').value
var tempo = (60*document.getElementById('tempo').value)
var velocidade = document.getElementById('ms').value
var elemento = document.getElementById('força')
var elemento2 = document.getElementById('energia')
var elemento3= document.getElementById('potência')
var elemento4= document.getElementById('lamp')
var força = parseFloat((1.3*0.5*velocidade*velocidade*altura) + (0.68*peso*10)).toFixed(2)
var potência = parseFloat(força*velocidade/4200).toFixed(2)
var energia = parseInt(potência*tempo).toFixed(2)
var lamp = parseInt(potência*420)
elemento.innerHTML=força
elemento2.innerHTML=energia
elemento3.innerHTML=potência
elemento4.innerHTML=lamp


}
