
const game = document.querySelector('.game')
let attempt = 0;
const result = document.createElement('p')
const tries = document.createElement('p')
result.classList.add('result')
tries.classList.add('try')




let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum) + 1)
console.log(answer)

function checkAnswer(){
    let display = document.getElementById('input').value
    display = Number(display)
    
    game.appendChild(result)
    game.appendChild(tries)

    if (isNaN(display)){
        result.textContent = `Result: Input a Valid Number`
    }
    else if(display < minNum || display > maxNum){
        result.textContent = `Result: Input a Valid Number`
    }
    else {
        attempt++;
        if(display < answer){
            tries.textContent = `Attempt: ${attempt}`
            result.textContent = `Result: TOO LOW! TRY AGAIN`
        }
        else if (display > answer){
            tries.textContent = `Attempt: ${attempt}`
            result.textContent = `Result: TOO HIGH! TRY AGAIN`
        }
        else{
            result.textContent=`You are correct after ${attempt} attempts, answer is ${answer}`
        }
    }
}