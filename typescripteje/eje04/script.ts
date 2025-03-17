(()=>{
    const pokemon:string="pikachu";
    function returnNombre(): string{
        return pokemon
    }
    const returnNombre2=():string=>{
        return pokemon
    }
    const nombre = returnNombre();
    console.log(nombre)
    console.log(typeof returnNombre2)
})()