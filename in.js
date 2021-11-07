const maxSpendedTime = 1000;
const trainingTime = 200;
let groupeAstronauts = [];
let groupeAstronauts1 = [];

const _hero = 'hero';
const _looser = 'looser';

const button = document.querySelector('button')
button.addEventListener('click', onClick)
const containerEl = document.querySelector('#container')

const createAustranauts = new Promise((resolve, reject) => {
    console.log('create');
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
        // groupeAstronauts = newAstronauts
    if (newAstronauts.length > 0 && Array.isArray(groupeAstronauts)) {
        newAstronauts.forEach(element => {
            groupeAstronauts.push(element);
        })
        resolve();
    } else {
        reject(console.error("Error data - createCosmonauts"));
    }
    resolve(newAstronauts);
})

function traning(astronaut, time) {
    if (Math.random() > 0.3) {
        astronaut.time += time;
    }
}

function isHero(astronaut, time) {
    if (astronaut.time === time) {
        astronaut.result = _hero;
    } else {
        astronaut.result = _looser;
    }
}

const fullCourseForGroupe = new Promise((resolve, reject) => {
    console.log('course');
    if (groupeAstronauts.length > 0) {
        for (let i = 0; i < maxSpendedTime / trainingTime; ++i) {
            groupeAstronauts.forEach(astronaut => {
                traning(astronaut, trainingTime);
                isHero(astronaut, maxSpendedTime);
            });
        }
        resolve(groupeAstronauts);
    } else {
        reject(console.log('Error data - fullCourse'));
    }
})

const showAstronauts = new Promise((resolve, reject) => {
    console.log('show');
    if (groupeAstronauts.length > 0) {
        groupeAstronauts.forEach(astonaut => {
            console.log(astonaut.name, astonaut.time, astonaut.result);
            resolve();
        })
    } else {
        reject(console.log("Error data - showAstronauts"));
    }
})

function fullCourse(groupeAstronauts) {
    if (groupeAstronauts.length > 0) {
        for (let i = 0; i < maxSpendedTime / trainingTime; ++i) {
            groupeAstronauts.forEach(astronaut => {
                traning(astronaut, trainingTime);
                isHero(astronaut, maxSpendedTime);
            });
        }
    }
}

function showResult(astronauts) {
    astronauts.forEach(astonaut => {
        console.log(astonaut.name, astonaut.time, astonaut.result);
    })
}


// createAustranauts.then(austronauts => {
//     console.log('first promise');
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 fullCourse(austronauts);
//                 resolve(austronauts);
//             }, 2000)
//         })
//         .then(austronauts => {
//             console.log('second promise')
//             setTimeout(() => {
//                 showResult(austronauts)
//             }, 2000)
//         })
// })

// fullCourseForGroupe.then(data => {
//     console.log('second pr', data);
// })


const promises = [createAustranauts, fullCourseForGroupe, showAstronauts];

const resultReq = Promise.allSettled(promises).then(
    (promises) => promises.forEach(promise => {
        console.log(promise.status);
    })
);

console.log('=========================================================');


function onClick() {
    ShowUI(groupeAstronauts);
}


function ShowUI(austronauts) {
    austronauts.forEach(element => {
        if (element.result === _hero) {
            createElement(element, containerEl, 'div', _hero)
        } else {
            createElement(element, containerEl, 'div', _looser)

        }
    });
}

function createElement(data, containerEl, tag, classList) {
    const element = document.createElement(tag);
    element.textContent = data.name + ' : ' + data.result;
    element.classList.add(classList);
    containerEl.append(element);
};