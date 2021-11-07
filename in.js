const maxSpendedTime = 1000;
const trainingTime = 200;
let groupeAstronauts = [];
let groupeAstronauts1 = [];

const createCosmonauts = new Promise((resolve, reject) => {
    const newAstronauts = [{
            name: 'Bob',
            time: 0,
            result: '',
        },
        {
            name: 'Den',
            time: 0,
            result: '',
        },
        {
            name: 'Ket',
            time: 0,
            result: '',
        }
    ]
    if (newAstronauts.length > 0 && Array.isArray(groupeAstronauts)) {
        newAstronauts.forEach(element => {
            groupeAstronauts.push(element);
        })
        resolve();
    } else {
        reject(console.error("Error data - createCosmonauts"));
    }
})

function traning(astronaut, time) {
    if (Math.random() > 0.3) {
        astronaut.time += time;
    }
}

function isHero(astronaut, time) {
    if (astronaut.time === time) {
        astronaut.result = 'Hero';
    } else {
        astronaut.result = 'Looser';
    }
}

const fullCourse = new Promise((resolve, reject) => {
    if (groupeAstronauts.length > 0) {
        for (let i = 0; i < maxSpendedTime / trainingTime; ++i) {
            groupeAstronauts.forEach(astronaut => {
                traning(astronaut, trainingTime);
                isHero(astronaut, maxSpendedTime);
            });
        }
        resolve();
    } else {
        reject(console.log('Error data - fullCourse'));
    }
})

const showAstronauts = new Promise((resolve, reject) => {
    if (groupeAstronauts.length > 0) {
        groupeAstronauts.forEach(astonaut => {
            console.log(astonaut.name, astonaut.time, astonaut.result);
            resolve();
        })
    } else {
        reject(console.log("Error data - showAstronauts"));
    }
})

console.log('=========================================================');

const promises = [createCosmonauts, fullCourse, showAstronauts];

const resultReq = Promise.allSettled(promises).then(
    (promises) => promises.forEach(promise => {
        console.log(promise.status);
    })
);