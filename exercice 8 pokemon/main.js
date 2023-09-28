class pokemon1 {
    constructor (name, atk, def, hp, luck) {
        this.name=name
        this.atk=atk 
        this.def=def 
        this.hp=hp
        this.luck=luck
    }
    attack1 (pikachu){
        pokemon2.hp-=(pokemon1.atk-pokemon2.def)
    }    
    }

class pokemon2 {
    constructor (name, atk, def, hp, luck) {
        this.name=name
        this.atk=atk 
        this.def=def 
        this.hp=hp
        this.luck=luck
    }
    attack2 (miaouss){
        pokemon1.hp-=(pokemon2.atk-pokemon1.def)
    }
    }




let pikachu=new pokemon1 ("pikachu", 60, 30, 180, 0.7)
let miaouss=new pokemon2 ("miaouss", 80, 30, 140, 0.6)

console.log (pikachu)
console.log (miaouss)

var sentencemiss= " attack missed "
var sentencehit= " attack hitted "
let result
while (pikachu.hp>0 && miaouss.hp>0){
    if (Math.random()<pikachu.luck){
       result=attack1(pikachu)&&sentencehit
    }
    else{
        result=sentencemiss
    }
       console.log (miaouss.hp)
    
    if(Math.random()<miaouss.luck){
       result=attack2(miaouss)&&sentencehit
    }
    else{
        result=sentencemiss
    }
        console.log (pikachu.hp)
    if (pikachu.hp<=0||miaouss.hp<=0){
        break
    }
}



