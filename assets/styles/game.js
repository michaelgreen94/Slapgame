// let charName = ' Dummy';
// let health = 100;
// let hits = 0;

let targets = {

    target1: {
        name: 'Dummy',
        health: 100,
        hits: 0,
        attacks: {
            slap: 1,
            punch: 5,
            kick: 10
        },
        items: [],
        dumImg: 'assets/images/target.png'
    },
    target2: {
        name: 'Not Dummy',
        health: 150,
        hits: 0,
        attacks: {
            stab: 2,
            Slash: 8,
            gouge: 13
        },
        items: [],
        dumImg: 'assets/images/PracticeDummy.png'
    }
}


let items = {
    fire: {
        name: 'fire',
        modifier: 2,
        description: 'IT BURNS!'
    },
    water: {
        name: 'water',
        modifier: -4,
        description: 'Fluid you must be!'
    },
    time: {
        name: 'time',
        modifier: 10,
        description: 'IT BURNS!'
    }
}

function results() {
    if (targets.target1.health == 0) {
        alert("Defeat")
    }
}

function slap() {
    targets.target1.health -= Math.floor(Math.random() * 2 + 1) + addMods();
    update()
    results()
}

function punch() {
    targets.target1.health -= 5 + addMods();
    update()
    results()
}

function kick() {
    targets.target1.health -= 10 + addMods();
    update()
    results()
}

function reset() {
    targets.target1.health = 100;
    targets.target1.hits = 0;
    targets.target1.items = []
    update()
}

let poison

function givePoison() {
    let tick = 0
    if (poison) {
        clearInterval(poison)
    }
    poison = setInterval(function () {
        tick++;
        targets.target1.health -= 1;
        targets.target1.hits--
        if (tick == 3) {
            clearInterval(poison)
            poison = undefined
        }
        update()
    }, 1000);


}

function giveWater() {
    targets.target1.items.push(items.water)
}

function giveTime() {
    targets.target1.items.push(items.time)
}

function addMods() {
    let arr = targets.target1.items
    let runningTotal = 0
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        runningTotal += item.modifier
    }
    return runningTotal
}

// function drawButtons() {
//     let template = ""
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//     }
// }

function update() {
    if (targets.target1.health <= 0) {
        targets.target1.health = 0
    }
    document.getElementById('health').innerText = ' ' + targets.target1.health;
    document.getElementById('hits').innerText = ' ' + targets.target1.hits++;
    document.getElementById("charName").innerHTML = targets.target1.name;
}
update()