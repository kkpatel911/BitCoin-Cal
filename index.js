const btc = 3.5;
const btcUsdbought = 10000;
const btcUsdNow = 12000;

const invested = btc * btcUsdbought;
const currrent = btc * btcUsdNow;

const profit = currrent - invested;
const growth = calcGrowth(invested, currrent)

//Function Declaration
function calcGrowth(pastVal, currentVal) {
    return (currentVal - pastVal) / pastVal * 100;
}


var message = "";
if (profit > 0) {
    message = `Great! You made a profit of $${profit} (${growth}%)`
} else if (profit < 0) {
    message = `Oh no ! You ate loss $${profit} (${growth}%)`
} else {
    message = 'You are breaking even!'
}


document.querySelector('.investment__btn')
    .addEventListener('click', function () {
        const whenBought = document.querySelector('.price__input--bought').value;
        const btcUsdNow = document.querySelector('.price__input--now').value;
        const btc = document.querySelector('.investment__btc').value;


        const invested = btc * whenBought;
        const currrent = btc * btcUsdNow;
        const profit = currrent - invested;
        const growth = calcGrowth(invested, currrent)

        var message = "";
        if (profit > 0) {
            message = `Great! You made a profit of $${profit} (${growth}%)`;
            document.querySelector('.result').style.color = 'green';
        } else if (profit < 0) {
            message = `Oh no ! You ate loss $${profit} (${growth}%)`
            document.querySelector('.result').style.color = 'red';
        } else {
            message = 'You are breaking even!'
        }

        document.querySelector('.result').innerHTML = message;


    });





