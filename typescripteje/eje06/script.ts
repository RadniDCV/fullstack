(()=>{
    let pokemon:{nombre:string,poder:string,clase:string,peso?: number, nivel:number[],getPoder?:()=>string} ={
        nombre: "picachu",
        poder: "impactrueno",
        clase:"electrico",
        peso:6,
        nivel:[1,2,3]
    }
    pokemon={
        nombre: "picachu2",
        poder:"impactrueno2",
        clase:"electrico",
        peso: 8,
        nivel:[2,3,4],
        getPoder(){
            return this.poder
        }
    }

    console.log(pokemon.getPoder?.())
})()