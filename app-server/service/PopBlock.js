var jsondb = require('lo-jsondb');
var pokemons = jsondb('pokemons', {pretty: true});

let p = null ;

class popBlock {
    async init(id){
        let data = pokemons.findOne(id);
        return await data;
    }
}




module.exports = new popBlock();