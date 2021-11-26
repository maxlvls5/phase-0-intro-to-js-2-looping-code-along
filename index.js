function writeCards(names, eventName) {
    const thanks =[];
    for (let i = 0; i < names.length; i++) {
        //`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return thanks
}
//console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"))

function countDown() {
    let countDown = 10
    while (countDown >= 0){
        console.log(countDown--)
    }
}
countDown()