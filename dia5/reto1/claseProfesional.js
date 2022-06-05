class Professional2 {
    name;       
    age;        
    genre;      
    weight;     
    height;     

    constructor( name, age, genre, weight, height ){
        this.name        = name;
        this.age         = age; 
        this.genre       = genre;
        this.weight      = weight;
        this.height      = height;
    }

    printAll(){
        console.log(`name: ${this.name}
        age: ${this.age}
        genre: ${this.genre}
        weight: ${this.weight}
        height: ${this.height}`);
    }

}



