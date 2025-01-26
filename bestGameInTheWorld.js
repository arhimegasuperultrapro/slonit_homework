function getRandomInteger() {
    return Math.ceil(Math.random() * 100) 
}


function getRandomSmile(numComp) {
    const comp2Smiles = ["😓", "😡", "😟", "😖", "😠", "😈", "😤", "😱", "😭"]
    const comp1Smiles = ["😌", "😂", "😉", "😜", "😆", "😘", "😇", "😁", "😃"]
    if (numComp == 1) return comp1Smiles[Math.ceil(Math.random() * 8)] // 
    return comp2Smiles[Math.ceil(Math.random() * 8)]
}


// функция принимает вероятность шутки, и в зависимости от последней мы производим сравнение
// допустим вероятность шутки - 20 %, тогда чтобы пошутить rand должен быть в диапазоне от 0.8 до 1 - а вероятность этого 20 %
function isJoke(probability) {
    let rand = Math.random()
    if (rand > (1 - probability / 100)) console.log(`Компьютер 1: верно!\nКомпьютер 2: правда?\nКомпьютер 1: шучу!`)
}


function guessInteger(randNum) {
    let firstNum = 0;
    let lastNum = 100;
    let guessNum = 0;
    let i = 0;
    console.log(`Компьютер 1 загадал число ${randNum}${getRandomSmile(1)}\n`)
    do {
        guessNum = Math.ceil(guessNum + ((-1)**i*(lastNum - firstNum)) / 2) // использую i чтобы менять знак (в зависимости от больше/меньше)
        console.log(`Компьютер 2: Пробую число ${guessNum}${getRandomSmile(2)}`)
        isJoke(20)
        if (randNum > guessNum) {
            firstNum = guessNum
            console.log(`Компьютер 1: Больше.${getRandomSmile(1)}\n`)
            i = 0
        }
        else if (randNum < guessNum) {
            lastNum = guessNum
            console.log(`Компьютер 1: Меньше.${getRandomSmile(1)}\n`)
            i = 1
        }
    } while (randNum != guessNum);
    console.log("Компьютер 1: ты угадал!✨")
}

guessInteger(getRandomInteger())