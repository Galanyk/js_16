/*const trainingTime = 200;
const maxSpendedTime = 1000;
const faild = 'Faild';
const keyResult = 'result';
const hero = 'Hero'
const astronauts = [{
        firstName: "Petia",
        timeSpended: 0,
        result: '',
    },
    {
        firstName: "Vasia",
        timeSpended: 0,
        result: '',
    },
    {
        firstName: "Gosha",
        timeSpended: 0,
        result: '',
    },
];

function training(astronut, time) {
    astronut.timeSpended += time;
}

// function groupTraning(astronauts) {
//     astronauts.forEach((element) => {
//         if (Math.random() > 0.7) {
//             element[keyResult] = faild;
//         }
//         if (element[keyResult] !== faild) {
//             training(element, trainingTime);
//             element[keyResult] = hero;
//         }
//     });
// }

function fullCourse(astronauts) {
    for (let i = 0; i < maxSpendedTime / trainingTime; ++i) {
        groupTraning(astronauts);
    }
}

function groupTraning(astronauts) {
    const traningGroup = new Promise((resolve, reject) => {
        astronauts.forEach((element) => {
            if (Math.random() > 0.7) {
                element[keyResult] = faild;
                reject('faild');
            }
            if (element[keyResult] !== faild) {
                training(element, trainingTime);
                element[keyResult] = hero;
                resolve(element[keyResult]);
            }
        });
    })
}

function showResult(astronauts) {
    astronauts.forEach(element => {
        console.log(element['firstName'], ' :', element['timeSpended'], ': ', element['result']);
    });
}

fullCourse(astronauts);
//showResult(astronauts);


// function astroRace(astronauts) {
//     astronauts.forEach((astro, i) => {
//         trainingTime(astronauts, astro, i)
//     });
// }

// function trening(astronauts, astro, index) {
//     const a = new Promise((res, rej) => {
//         setTimeout(() => {
//             if (Math.random() < 0.6) {
//                 rej('failed');
//                 if (astro.timeSpended >= maxSpendedTime) {
//                     astro.result = "Failed one";
//                 }
//             } else {
//                 astro.result = 'Our hero'
//                 astro.timeSpended += trainingTime;
//                 res(astro);
//             }
//         }, trainingTime);
//     })
//}

// static getByClassName(className) {
//     return document.querySelector(`.${className}`);
// };

// setListener(element, event, callBack) {
//     element.addEventListener(event, callBack);
// };

// function createElement(data, containerEl, tag, classList) {
//     const element = document.createElement(tag);
//     element.textContent = data;
//     element.classList.add(classList);
//     containerEl.append(element);
// };*/