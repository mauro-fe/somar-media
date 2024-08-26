const cxN1 = document.getElementById('cxN1')
const cxN2 = document.getElementById('cxN2')
const calc = document.getElementById('calc')
const clear = document.getElementById('clear')
const cxMedia = document.getElementById('cxMedia')
const situacao = document.getElementById('situacao')
const aviso = document.getElementById('aviso')

function calcMedia(n1, n2) {
    return (parseFloat(n1) + parseFloat(n2)) / 2
}

calc.addEventListener('click', function (e) {
    let cxN1Val = cxN1.value
    let cxN2Val = cxN2.value

    if (cxN1Val < 0 || cxN1Val > 10 || cxN2Val < 0 || cxN2Val > 10 || cxN1Val === '' || cxN2Val === '') {
        aviso.classList.add('aviso')
        aviso.innerHTML = `*Digite numeros entre 0 e 10*<br>`
        situacao.value = ''
        situacao.classList.remove('reprovado')
        situacao.classList.remove('recuperacao')
        situacao.classList.remove('aprovado')
        setTimeout(function () {
            aviso.innerHTML = ''
            aviso.classList.remove('aviso')

        }, 3000)
    } else {
        let media = calcMedia(cxN1Val, cxN2Val)
        cxMedia.value = media
        situacaoFinal()
        situacaoo()
    }
    e.preventDefault()
})

function situacaoFinal() {

    let cxMediaVal = cxMedia.value
    if (cxMediaVal >= 7) {
        situacao.value = "Aprovado"
    } else if (cxMediaVal < 3) {
        situacao.value = "Reprovado"
    } else {
        situacao.value = "Recuperação"
    }
}

function situacaoo() {
    switch (situacao.value) {
        case 'Aprovado':
            situacao.classList.remove('reprovado')
            situacao.classList.remove('recuperacao')
            situacao.classList.add('aprovado')
            break
        case 'Reprovado':
            situacao.classList.remove('aprovado')
            situacao.classList.remove('recuperacao')
            situacao.classList.add('reprovado')
            break
        case 'Recuperação':
            situacao.classList.remove('aprovado')
            situacao.classList.remove('reprovado')
            situacao.classList.add('recuperacao')
            break

    }
}

clear.addEventListener('click', function () {
    cxN1.value = ''
    cxN2.value = ''
    cxMedia.value = ''
    situacao.value = ''
    situacao.classList.remove('reprovado')
    situacao.classList.remove('recuperacao')
    situacao.classList.remove('aprovado')
})
