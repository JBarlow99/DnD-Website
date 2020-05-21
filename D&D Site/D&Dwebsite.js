function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function chaos(level, spent) {
    let x = level;
    let y = spent;
    let total = x * 10;
    let current = total - y;
    current = Number(current);
    document.getElementById("chaosPoints").innerHTML = current + " Chaos Points available";
}
// chaos(15, 97);

function skillPoint(level, other, spent) {
    let x = level;
    let y = spent;
    let z = other;
    let current = x + z - y;
    current = Number(current);
    console.log(current);
    document.getElementById("skill").innerHTML = Math.floor(current) + " SP available";
}
// skillPoint(15, 3.3, 10);
let John = {
    level: 15,
    SPspent: 10,
    auraSP: 4.9,
    CPspent: 97,
};

document.getElementById("levelTitle").innerHTML = "Level " + John.level;

let Character = new skillPoint(John.level, John.auraSP, John.SPspent);
Character = new chaos(John.level, John.CPspent);