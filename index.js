const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i =0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(names,occasion) {
    let i = 0;
    while (i < names.length) {
        console.log(`Thank you ${names[i]} for the amazing ${occasion} gift!`)
        i++;
    }
    return gifts;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num) {
    while (!(num < 0)) {
        console.log(num);
        num--;
    }
}

countDown(10);