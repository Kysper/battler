
const Player = {
    charName: undefined,
    stats: [str, dex, end, wis, int],
    currentEquips: {
        head: undefined,
        torso: undefined,
        legs: undefined,
        boots: undefined,
        gloves: undefined
    },

    methods: {
        attack: {},
        defend: {},
        skills: [skill_1, skill_2, skill_3, skill_4, skill_5]
    },
}

const ClassTypes = {
    barbarian: {
        str: 9,
        dex: 6,
        end: 8,
        wis: 4,
        int: 2,

    },
    wizard: {
        str: 2,
        dex: 5,
        end: 3,
        wis: 8,
        int: 9,
    },
    ranger: {
        str: 4,
        dex: 9,
        end: 5,
        wis: 4,
        int: 4,
    },
    rogue: {
        str: 6,
        dex: 9,
        end: 4,
        wis: 7,
        int: 3,
    },
    shieldmaster: {
        str: 9,
        dex: 6,
        end: 6,
        wis: 4,
        int: 2,
    },
    tempest: {
        str: 9,
        dex: 6,
        end: 6,
        wis: 4,
        int: 2,
    },
    blademaster: {
        str: 9,
        dex: 6,
        end: 6,
        wis: 4,
        int: 2,
    }
}


const Equips = {}



init();


function init() {

}

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const chosenClass = document.querySelectorAll('.chooseClass').value
    
    const inputNameValue = document.querySelector('#inputName').value
    const Player = new Player(inputNameValue,findClassType(chosenClass));
    localStorage.setItem('player', player)
})

function findClassType(classType){
classType.forEach((element)=>{if(element == choseClass.value){
    return element
}})
}