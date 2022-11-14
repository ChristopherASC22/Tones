let musicBtn= document.getElementById("musicBtn")
const loop = new Tone.Loop(repeat,"8n").start(0);
let index=0;

musicBtn.onclick=function(){
    if(musicBtn.innerHTML=="Play"){
        musicBtn.innerHTML="Stop"
        Tone.Transport.start();
    }
    else{
        musicBtn.innerHTML="Play"
        Tone.Transport.stop()
    }
}

function repeat(){
    console.log(index%8)
    const sound1 = new Tone.Player("samples/clap-808.wav").toDestination();
    let sound1CurrNote= "s1n"+((index%8)+1)
    if(document.getElementById(sound1CurrNote).checked){
        sound1.autostart= true;
    }
    const sound2= new Tone.Player("samples/kick-808.wav").toDestination()
    let sound2CurrNote= "s2n"+((index%8)+1)
    if (document.getElementById(sound2CurrNote).checked){
        sound2.autostart=true
    }
    index++;
}