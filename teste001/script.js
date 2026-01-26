function abrir() {
    let menu = document.getElementById('menu');
    let escon = document.getElementById('escondido');
    let bu = document.getElementById('botao');

    if (escon.style.display === 'block') {
        escon.style.display = 'none'
    } else {
        escon.style.display = 'block'
    }

    if (bu.style.display === 'none') {
        bu.style.display = 'block'
    } else {
        bu.style.display = 'none'
    }
}

function voltar() {
    let menu = document.getElementById('menu');
    let escon = document.getElementById('escondido');
    let bu = document.getElementById('botao');

    if (escon.style.display === 'none') {
        escon.style.display = 'block'
    } else {
        escon.style.display = 'none'
    }

    if (bu.style.display === 'block') {
        bu.style.display = 'none'
    } else {
        bu.style.display = 'block'
    }
}