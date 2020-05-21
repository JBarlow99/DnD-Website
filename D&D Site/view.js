let John = {
    mana: 100,
    health: 100,
    stamina: 100,
};

function mana(current, full) {
    let x = current;
    let y = full;
    let answer = x / y;
    if(answer === 1) {
        answer = 100
    } else if (answer <= .99){
        answer *= 100
    }
    answer = Number(answer);
    let JSmana = document.getElementById("magicJS");
    JSmana.style.width = answer + "%";
    // JSmana.innerHTML = Math.round(x);
    JSmana.innerHTML = answer + "%";
}
mana(John.mana, 100);

function health(current, full) {
    let x = current;
    let y = full;
    let answer = x / y;
    if(answer === 1) {
      answer = 100
    } else if (answer <= .99){
        answer *= 100
    }
    answer = Number(answer);
    let JShealth = document.getElementById("healthJS");
    JShealth.style.width = answer + "%";
    // JShealth.innerHTML = Math.round(x);
    JShealth.innerHTML = answer + "%";
}
health(John.health, 100);

function stam(current, full) {
    let x = current;
    let y = full;
    let answer = x / y;
    if(answer === 1) {
        answer = 100
    } else if (answer <= .99){
        answer *= 100
    }
    answer = Number(answer);
    let JSstam = document.getElementById("stamJS");
    JSstam.style.width = answer + "%";
    // JSstam.innerHTML = Math.round(x);
    JSstam.innerHTML = answer + "%";
}
stam(John.stamina, 100);