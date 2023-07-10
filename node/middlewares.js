// middlewares pattern (chain of responsability)
//aqui é só pra mostrar a implementação do padrão. No express, ctx seria o (req, res)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}


const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}


const passo3 = ctx => {
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middleawares) => {
    const execPasso = indice => {
        middleawares && indice < middleawares.length
            && middleawares[indice](ctx, () => {
                execPasso(indice + 1)
            })
    }
    execPasso(0)
}

const ctx = {}
// exec(ctx, passo3, passo2, passo1)
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
