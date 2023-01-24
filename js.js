let score = 7;
let attempts = 0;
let attempt = document.querySelector('.attempt');
let scoreText = document.querySelector('.times');
let random = Math.floor(Math.random() * 20);
let GuessText = document.querySelector('.value_q_text');
let InpValue = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let btnAgain = document.querySelector('.btnAgain');
let arrow = document.querySelector('.pp');
let windows = document.querySelector('.hidden');
let main = document.querySelector('main');
let win = document.querySelector('.win');
console.log(random);
scoreText.textContent = `Score: ${score}`;

function a() {
    score--;
    attempts++;
    scoreText.textContent = `Score: ${score}`;
    console.log(score);
    if(score === 0){
        main.style.filter = "blur(2px)";
        windows.style.display = 'flex';
        GuessText.textContent="fuck";
        document.body.style.backgroundColor = "black";
        score = 5;
        console.log(random);
    }else if(InpValue.value == random){
        main.style.filter = "blur(2px)";
        windows.style.display = 'flex';
        score = 5;
        attempt.textContent = `Attempt: ${attempts}!`;
        win.textContent = `YOU WIN!`;
        GuessText.textContent=`${random}`;
        document.body.style.backgroundColor = "green";
    }else if(InpValue.value < random){
        attempt.textContent = `Attempt: ${attempts}!`;
        win.textContent = `You LOSE!`;
        arrow.textContent = `the number is greater `;
        GuessText.textContent = `${InpValue.value}`;
        console.log(InpValue.value);
    }else if(InpValue.value > random){
        attempt.textContent = `Attempt: ${attempts}!`;
        win.textContent = `You LOSE!`;
        arrow.textContent = `LESS`;
        GuessText.textContent = `${InpValue.value}`;
        console.log(InpValue.value);
    }
};
function backGame(){
    arrow.textContent = `greater or Less`;
    random = Math.floor(Math.random() * 20);
    console.log(random);
    GuessText.textContent="0";
    windows.style.display = 'none';
    document.body.style.backgroundColor = "#14121c";
    main.style.filter = "blur(0px)";
    scoreText.textContent = `Score: ${score}`;
};


btn.addEventListener('click', a);

btnAgain.addEventListener('click', backGame);
