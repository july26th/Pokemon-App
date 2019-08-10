class GetPokemon {
    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      this.types = data.types;
      this.height = data.height;
      this.weight = data.weight;
      this.speed = data.stats[0].base_stat;
      this.defense = data.stats[3].base_stat;
      this.attack = data.stats[4].base_stat;
      this.hp = data.stats[5].base_stat;
    }
  }
  
  export default GetPokemon;