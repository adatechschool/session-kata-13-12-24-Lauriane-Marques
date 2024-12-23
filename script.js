// ETAPE 1

let codemaker = ['red','blue'] //combinaison à deviner 

let codebreaker = ['blue','red'] //proposition du joueur

const possibleColors = ['blue', 'yellow', 'red', 'green', 'pink', 'purple', 'orange', 'black' ] //Les 4 choix de couleurs possibles pour l'étape 1 + 4 autres pour l'étape 2


function checkOptions(proposal){ //ici on vérifie que les propositions faites par le joueur sont bien dans la liste des couleurs possibles
    let allOptions = 0
    for (const option of proposal){
        if (possibleColors.includes(option)){
            //console.log(`true ${option}`)
            allOptions += 1
        }
        // else{
        //     console.log(`false ${option}`)
        // }
    }
    if (allOptions == proposal.length){
        //console.log("All options are valid")
        return true
    }
    else {
        //console.log("At least one option is not valid")
        return false
    }
}

//checkOptions(codebreaker)

//Pour le moment ma fonction a l'air de me renvoyer ce dont j'ai besoin alors je vais la garder comme ça même si elle est sûrement à optimiser
// J'avais commencé sans la variable allOptions mais j'ai supposé que je ne pouvais pas retourner true à chaque tour de boucle sinon ça risquait
// de poser problème si le deuxième élément était faux ?

function checkAnswer(proposal,correctAnswer){ //on vérifie maintenant si la proposition du codebreaker correspond à la combinaison du codemaker
    let answer =[]
    for(let i=0; i<proposal.length; i++){
        if(proposal[i] == correctAnswer[i]){
            console.log(`Color ${proposal[i]} is in the right position.`)
            answer.push('1')
        }
        else if (correctAnswer.includes(proposal[i])){
            console.log(`Color ${proposal[i]} is correct but not in the right position`)
            answer.push('0')
        }
        else{
            console.log(`Color ${proposal[i]} is not correct.`)
            answer.push('0')
        }
    }
    //console.log(answer)
    return answer
}

//checkAnswer(codebreaker, codemaker)

function game(proposal, correctAnswer){
    if (checkOptions(proposal)){
        //console.log("You can play")
        if (checkAnswer(proposal,correctAnswer).includes('0')){
            console.log('Keep trying!')
        }
        else{
            console.log("Congrats, you guessed the correct combination, you're a real mastermind!")
        }
    }
    else{
        console.log("At least one color is not valid, please change your selection")
    }
}

//Comme il n'y a pas d'interaction avec l'utilisateur (input ou prompt etc) cette fonction n'est pas "complète", elle ne fait pas vraiment continuer l'éxecution de mon code
//Plus tard avec une interface/interaction avec l'utilisateur je pourrais ajouter des choses



//let codebreaker1 = ['red','test'] //cas où une couleur n'est pas valide
//let codebreaker2 = ['blue','yellow']//couleurs valides, une mal placée et l'autre incorrecte (étape 1)
//let codebreaker3 = ['blue', 'red'] //les deux couleurs sont correctes mais mal placées (étape 1)
//let codebreaker4 = ['red','blue'] //bonne réponse (étape 1)
//game(codebreaker4, codemaker)


// ETAPE 2

//Pour cette étape je n'ai qu'à modifier mes variables car mes fonctions utilisent déjà des boucles qui parcourent mes tableaux
//J'ajoute 4 couleurs à ma constante possibleColors

//let codemaker2 = ['blue', 'green', 'red', 'pink'] //nouvelle combinaison à deviner

//let codebreaker5 = ['red', 'blue', 'green', 'test'] //couleur non valide
//let codebreaker6 = ['red', 'blue', 'green', 'purple'] //3 mal placées et une incorrecte
//let codebreaker7 = ['red', 'blue', 'green', 'pink'] //3 mal placées et une bien placée

//game(codebreaker6, codemaker2)


//ETAPE 3

//Comme pour l'étape 2, mes fonctions restent valables avec plusieurs fois la même couleur
//J'ai quand même fait quelques tests

// let codemaker3 = ['blue', 'blue', 'yellow', 'green']

// let codebreaker8 = ['blue', 'yellow', 'pink', 'blue']
// let codebreaker9 = ['blue', 'blue', 'green', 'yellow']
// let codebreaker10 = ['blue', 'blue', 'yellow', 'green']

// game(codebreaker10,codemaker3)


//ETAPE 4

function randomIndex(min, max) { //On veut récupérer un chiffre aléatoire pour aller chercher une couleur à un index aléatoire du tableau possibleColors
    return Math.floor(Math.random() * (max - min));
  }

//console.log(randomIndex(0,8))

function getRandomCodemaker(){
    let randomCodemaker = []
    for (let i =0; i<4; i++){
        let randomColor = possibleColors[randomIndex(0,8)]
        randomCodemaker.push(randomColor)

        //console.log(randomColor)
        //console.log(randomCodemaker)  
    }
    return randomCodemaker
}

//console.log(getRandomCodemaker())

let randomizedCodemaker = getRandomCodemaker()
console.log(randomizedCodemaker)

//Ma fonction me renvoie bien un codemaker aléatoire, mais comme je n'ai pas ce principe d'interaction utilisateur je dois relancer mon code à chaque fois
//ce qui me génère un nouveau codemaker. Je ne peux donc pas "jouer" pour le moment


// Bilan personnel
//Beaucoup de choses sont (à mon avis) à améliorer et à optimiser dans chaque étape mais je suis contente de mon travail car tout fonctionne comme je le voulais.
// Prochain objetcif, faire une interface graphique à poster sur mon github perso pour mon portfolio 