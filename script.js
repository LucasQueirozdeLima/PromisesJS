// criar promises
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Lonardo'

    if (nome === 'Leonardo') {
        resolve('usuário encontrado ')
    } else {
        reject('usuário não encontrado ')
    }
})

myPromise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log("Algo aconteceu: " + error)
})

// encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Leonardo'

    if (nome === 'Leonardo') {
        resolve('usuário encontrado ')
    } else {
        reject('usuário não encontrado ')
    }
})

myPromise2.then((data) => {
    return data.toUpperCase();
}).then((stringModified) => {
    console.log(stringModified)
})

//resolver varios promises com all - vai levar em consideração o tempo da maior promise para ser resolvido
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('P1 OK!')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    console.log('P2 OK!')
})

const p3 = new Promise((resolve, reject) => {
    console.log('P3 OK!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})

// resolvendo varias promises com race - respeita o tempo individual de cada promise
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('P4 OK!')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    console.log('P5 OK!')
})

const p6 = new Promise((resolve, reject) => {
    console.log('P6 OK!')
})

const resolveRace = Promise.race([p4,p5,p6]).then((data) => {
    console.log(data)
}) 

// fetch API - API GitHub
const userName = 'LucasQueirozdeLima'

fetch('https://api.github.com/users/'+userName, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    },
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data.nome)
}).catch((error) => {
    console.log(error)
})

//||| alt+123 ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥