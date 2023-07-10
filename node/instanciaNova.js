// uma factory retorna um novo objeto sempre
module.exports = ()=>{
    return{
        valor:1,
        inc(){
            this.valor++
        }
    }
}