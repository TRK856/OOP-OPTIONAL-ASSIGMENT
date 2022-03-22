class Character {
    constructor(name, phrase1, phrase2){
        this.name = name;
        this.phrase1 = phrase1;
        this.phrase2 = phrase2;
        this.level = 0;
        console.log(this)
    }
    speak(phraseNum) {
        if(phraseNum === 1){
            console.log(this.phrase1)
        } if (phraseNum === 2){
            console.log(this.phrase2)
        }
    }
    setLevel(newLevel){
        this.level = newLevel
        console.log(this.level)
    }
}

let character__KungFuPanda = new Character("Kung Fu Panda", "Skadoosh", "You have been blinded by pure awesomeness!");
let character__SpiderMan = new Character("Spiderman", "My Spider-Sense is tingling", "Your friendly neighbourhood spiderman");

character__KungFuPanda.speak(1)
character__SpiderMan.setLevel(2)
character__SpiderMan.speak(2)