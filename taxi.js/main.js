var playlist=[
    "Anissa-Wejdene",
    "Don't wake me up-Chris Brown",
    "Fire To The Fuse-Jackson Wang",
    "ZOMBIFIED-Falling In Reverse",
    "Pump it-Black eyed peas"]
var goodPlaylist=[
    "Don't wake me up-Chris Brown",
    "Fire To The Fuse-Jackson Wang",
    "ZOMBIFIED-Falling In Reverse",
    "Pump it-Black eyed peas"]   

class character{
    constructor(name,hp){
        this.name=name
        this.hp=hp
    }
    traject(){
        var taxiChange=0
        var redlight=0
        var goodMusic
        while (redlight<30&&this.hp>0){
            redlight++
            console.log("il est au "+redlight+"e feux")
            var max=5
        
            if (Math.floor(Math.random()*max)==0){
                console.log("La musique qui est tombée est Anissa-Wejdene aïe aïe aïe...")
            this.hp--
            console.log("il ne lui reste plus que "+this.hp+" hp")
            taxiChange++
            goodMusic=false
            console.log("le nombre de changement de taxi jusqu'ici est de "+taxiChange)
            }
            else {
                goodMusic=true
            }
            if (goodMusic=true){
                console.log("la musique actuelle est "+goodPlaylist[Math.floor(Math.random()*goodPlaylist.length)])
                continue   
            }
            if (redlight>=30&&this.hp==0){
                console.log ("si près du but c'est dommage..."+this.name+
                " explose quand même..")
                break
            }
            if (this.hp==0){
                console.log(this.name+" explose")
                break
            }
            if (redlight>=30){
                break

            }
        }
    }
}
 
 function count(playlist){
    return playlist.length
 }

var john=new character ("John",10)

console.log(john)
john.traject(playlist)