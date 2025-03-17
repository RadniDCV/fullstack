(()=>{
    const pokemon:string="pikachu"
    function returnNombre(nombre:string, clase:string):string{
        return `${nombre} ${clase}`
    }
    let resultado = returnNombre(pokemon,"Electrico")
    console.log(resultado)
})()