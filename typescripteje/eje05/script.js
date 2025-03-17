"use strict";
(() => {
    const pokemon = "pikachu";
    function returnNombre(nombre, clase) {
        return `${nombre} ${clase}`;
    }
    let resultado = returnNombre(pokemon, "Electrico");
    console.log(resultado);
})();
