let myArray = [];

const myRedNumbers = document.querySelector('.red');

const myGreenNumbers = document.querySelector('.green');

for (let i = 0; i < 20; i++) {
    myArray.push(Math.floor(Math.random() * 1000 + 1));

    console.log(myArray);

    if (myArray[i] % 2 === 0) {
        myRedNumbers.append(myArray[i] + ' - ');
    } else {
        myGreenNumbers.append(myArray[i] + ' - ');
    };
};

