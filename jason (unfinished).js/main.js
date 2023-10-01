class killer{
    constructor(name, hp){
        this.name=name
        this.hp=hp
    }
    attack(survivor){
        survivor=[Math.floor(Math.random()*survivors.length)]
        dead=console.log ("Le survivant "+survivor+ " nous a quitté")
        if((Math.random())<deathluck){
            survivor=dead
            splice(survivor)
            }
        if ((Math.random())<dmgluck){
            this.hp-10
        }
     

        }
    }
}
class character{
    constructor(name, caracteristic, deathluck, dmgluck, tryAndDie){
        this.name=name
        this.caracteristic=caracteristic
        this.deathluck=deathluck
        this.dmgluck=dmgluck
        this.tryAndDie=tryAndDie
    }
}

let jason=new killer("Jason",100)
let claudette=new character ("Claudette","biology student",0.5,0.2,0.3)
let dwight=new character ("Dwight", "project chef",0.6,0.1,0.3)
let jake=new character ("jake", "camper",0.5,0.2,0.3)
let david=new character ("David", "bartender",0.1,0.4,0.5)
let meg=new character ("Meg", "athlete",0.3,0.4,0.3)

let survivors=[claudette, dwight, jake, david, meg]

