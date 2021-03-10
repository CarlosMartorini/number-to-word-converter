let umADezenove = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quize', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];

let dezANoventa = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];

let cemAMil = ['', 'cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos', 'mil'];

function numbersToWords(){
    for(let counter = 0; counter <= 1000; counter++){
        if(counter < 20){
            console.log(umADezenove[counter]);
        }else if(counter > 19 && counter < 100){
            let extenso = counter.toString().split('');
            let primeiroNum = extenso[0];
            let segundoNum = extenso[1];
            if(segundoNum === '0'){
                console.log(`${dezANoventa[primeiroNum]}`);
            }else{
                console.log(`${dezANoventa[primeiroNum]} e ${umADezenove[segundoNum]}`);
            }
        }else if(counter > 99 && counter < 1000){
            let extenso = counter.toString().split('');
            let primeiroNum = extenso[0];
            let segundoNum = extenso[1];
            let terceiroNum = extenso[2];
            if(segundoNum === '0' && terceiroNum === '0'){
                console.log(`${cemAMil[primeiroNum]}`);
            }else if(primeiroNum === '1' && segundoNum === '0' && terceiroNum !== '0'){
                console.log(`cento e ${umADezenove[terceiroNum]}`);
            }else if(primeiroNum === '1' && segundoNum === '1' && terceiroNum === '0'){
                console.log(`cento e ${dezANoventa[segundoNum]}`);
            }else if(primeiroNum === '1' && segundoNum !== '1' && terceiroNum === '0'){
                console.log(`cento e ${dezANoventa[segundoNum]}`);
            }else if(primeiroNum === '1' && segundoNum === '1' && terceiroNum !== '0'){
                console.log(`cento e ${umADezenove[segundoNum + terceiroNum]}`);
            }else if(primeiroNum === '1' && segundoNum !== '1'){
                console.log(`cento e ${dezANoventa[segundoNum]} e ${umADezenove[terceiroNum]}`);
            }else if(segundoNum !== '0' && terceiroNum === '0'){
                console.log(`${cemAMil[primeiroNum]} e ${dezANoventa[segundoNum]}`);
            }else if(segundoNum === '0' && terceiroNum !== '0'){
                console.log(`${cemAMil[primeiroNum]} e ${umADezenove[terceiroNum]}`);
            }else if(segundoNum === '1' && terceiroNum !== '0'){
                console.log(`${cemAMil[primeiroNum]} e ${umADezenove[segundoNum + terceiroNum]}`);
            }else if(segundoNum !== '0' && terceiroNum !== '0'){
                console.log(`${cemAMil[primeiroNum]} e ${dezANoventa[segundoNum]} e ${umADezenove[terceiroNum]}`);
            }
        }else if(counter === 1000){
            console.log(`mil`);
        }
    }
}

numbersToWords();