const exec = (ctx, ...middlewares) => {
    const run = indice_metodo_exec => {
        middlewares && indice_metodo_exec < middlewares.length &&
        middlewares[indice_metodo_exec](ctx, () => run(indice_metodo_exec + 1))
    }
    run(0)
}

const mid1 = (ctx, next) => {
    ctx.info1 = 'mid1'
    next() //passa para o próximo middleware
}


const mid2 = (ctx, next) => {
    ctx.info2 = 'mid2'
    next()
}


const mid3 = ctx => ctx.info3 = 'mid3'

const ctx = {}
exec(ctx, mid1, mid2, mid3)
console.log(ctx)
