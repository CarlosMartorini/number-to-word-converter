let umADezenove = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quize', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];

let dezANoventa = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];

let cemAMil = ['', 'cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos', 'mil'];

let counter;
let numExtenso;

function numbersToWords(){
    for(counter = 0; counter <= 1000; counter++){
        if(counter < 20){
            numExtenso = umADezenove[counter];
        }else if(counter > 19 && counter < 100){
            let extenso = counter.toString().split('');
            let primeiroNum = extenso[0];
            let segundoNum = extenso[1];
            if(segundoNum === '0'){
                numExtenso = `${dezANoventa[primeiroNum]}`;
            }else{
                numExtenso = `${dezANoventa[primeiroNum]} e ${umADezenove[segundoNum]}`;
            }
        }else if(counter > 99 && counter < 1000){
            let extenso = counter.toString().split('');
            let primeiroNum = extenso[0];
            let segundoNum = extenso[1];
            let terceiroNum = extenso[2];
            if(segundoNum === '0' && terceiroNum === '0'){
                numExtenso = `${cemAMil[primeiroNum]}`;
            }else if(primeiroNum === '1' && segundoNum === '0' && terceiroNum !== '0'){
                numExtenso = `cento e ${umADezenove[terceiroNum]}`;
            }else if(primeiroNum === '1' && segundoNum === '1' && terceiroNum === '0'){
                numExtenso = `cento e ${dezANoventa[segundoNum]}`;
            }else if(primeiroNum === '1' && segundoNum !== '1' && terceiroNum === '0'){
                numExtenso = `cento e ${dezANoventa[segundoNum]}`;
            }else if(primeiroNum === '1' && segundoNum === '1' && terceiroNum !== '0'){
                numExtenso = `cento e ${umADezenove[segundoNum + terceiroNum]}`;
            }else if(primeiroNum === '1' && segundoNum !== '1'){
                numExtenso = `cento e ${dezANoventa[segundoNum]} e ${umADezenove[terceiroNum]}`;
            }else if(segundoNum !== '0' && terceiroNum === '0'){
                numExtenso = `${cemAMil[primeiroNum]} e ${dezANoventa[segundoNum]}`;
            }else if(segundoNum === '0' && terceiroNum !== '0'){
                numExtenso = `${cemAMil[primeiroNum]} e ${umADezenove[terceiroNum]}`;
            }else if(segundoNum === '1' && terceiroNum !== '0'){
                numExtenso = `${cemAMil[primeiroNum]} e ${umADezenove[segundoNum + terceiroNum]}`;
            }else if(segundoNum !== '0' && terceiroNum !== '0'){
                numExtenso = `${cemAMil[primeiroNum]} e ${dezANoventa[segundoNum]} e ${umADezenove[terceiroNum]}`;
            }
        }else if(counter === 1000){
            numExtenso = `mil`;
        }

        printResult();
    }
}

document.getElementById('generate').onclick = numbersToWords;

function printResult(){
    const getResult = document.getElementById('result');
    const createPrint = document.createElement('span');
    createPrint.textContent = `${counter}: ${numExtenso}`;
    getResult.appendChild(createPrint);
    createPrint.classList.add();
}