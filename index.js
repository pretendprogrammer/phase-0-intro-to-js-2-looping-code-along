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
    let newArray = []
    while (i < names.length) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
        i++;
    }
    return newArray;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(num) {
    while (!(num < 0)) {
        console.log(num);
        num--;
    }
}

countDown(10);