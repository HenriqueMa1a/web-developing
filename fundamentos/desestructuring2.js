function round([min = 0, max = 1000]) {
    if (min < max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

console.log(round([]))

console.log(round([100]))
console.log(round([, 50]))
console.log(round([1000, 100])) // invertido 