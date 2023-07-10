module.exports = (...nomes) =>{
    const cumprimento = nome => `Bom dia ${nome}`
    return nomes.map(cumprimento)
}