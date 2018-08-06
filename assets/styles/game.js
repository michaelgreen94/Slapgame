// let charName = ' Dummy';
// let health = 100;
// let hits = 0;

let target = {
    name: 'Dummy',
    health: 100,
    hits: 0,
    attacks: {
        slap: 1,
        punch: 5,
        kick: 10
    },
    items: []
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
    if (target.health == 0) {
        alert("Defeat")
    }
}

function slap() {
    target.health -= Math.floor(Math.random() * 2 + 1) + addMods();
    update()
    results()
}

function punch() {
    target.health -= 5 + addMods();
    update()
    results()
}

function kick() {
    target.health -= 10 + addMods();
    update()
    results()
}

function reset() {
    target.health = 100;
    target.hits = 0;
    target.items = []
    update()
}

let poison

function giveFire() {
    let tick = 0
    if (poison) {
        clearInterval(poison)
    }
    poison = setInterval(function () {
        tick++;
        target.health -= 1;
        if (tick == 3) {
            clearInterval(poison)
            poison = undefined
        }
        update()
    }, 1000);


}

function giveWater() {
    target.items.push(items.water)
}

function giveTime() {
    target.items.push(items.time)
}

function addMods() {
    let arr = target.items
    let runningTotal = 0
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        runningTotal += item.modifier
    }
    return runningTotal
}

function update() {
    if (target.health <= 0) {
        target.health = 0
    }
    document.getElementById('health').innerText = ' ' + target.health;
    document.getElementById('hits').innerText = ' ' + target.hits++;
    document.getElementById("charName").innerHTML = target.name;
}
update()