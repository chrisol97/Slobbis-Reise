//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(scene1);

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    Actions.Click(velkommen, () => {
        GaaTil(scene1);
    })
}

function scene1() {
    const titlescreen = new Blocks.Image("Bilder/Bakgrunner/titlescreen.jpg", {x:0,y:0,width:1280,height:720});
    const startknapp = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:250,y:250,width:150,height:150});
    Actions.Click(startknapp, () => {
        GaaTil(scene3)
    })
}

function scene3() {
    const avdeling = new Blocks.Image("Bilder/Bakgrunner/avdeling.png", {x:0,y:0,width:1280,height:720});
    const slobbieavdeling = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:500,y:300,width:200,height:300, loop:true, auto:true});
    const speechbubbleavdeling = new Blocks.Image("Bilder/Snakkebobler/speechbubbleavdeling.png", {x:400,y:100,width:500,height:300});
    const cbscene3 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbscene3, () => {
        GaaTil(scene4);
    })
}


function scene4() {
    const garderobe = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:0,y:0,width:1280,height:720});
    const slobbiegarderobe = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png",], {x:500,y:400,width:200,height:300, loop:true, auto:true});
    const blshoe1 = new Blocks.Image("Bilder/Oppgaver/blueshoe.png", {x:800,y:500,width:100,height:125});
    const gshoe1 = new Blocks.Image("Bilder/Oppgaver/greenshoe.png", {x:350,y:600,width:100,height:125});
    const pshoe1 = new Blocks.Image("Bilder/Oppgaver/pinkshoe.png", {x:900,y:600,width:100,height:125});
    const oshoe1 = new Blocks.Image("Bilder/Oppgaver/orangeshoe.png", {x:350,y:300,width:100,height:125});
    const bshoe1 = new Blocks.Image("Bilder/Oppgaver/brownshoe.png", {x:725,y:570,width:100,height:125});
    const speechbubblegarderobe = new Blocks.Image("Bilder/Snakkebobler/speechbubblegarderobe.png", {x:400,y:200,width:500,height:300});
    const cbscene4 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbscene4, () => {
        GaaTil(scene5);
    })
}

function scene5() {
    const garderobespill = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:0,y:0,width:1280,height:720});
    const blshoe2 = new Blocks.Image("Bilder/Oppgaver/blueshoe.png", {x:800,y:500,width:100,height:125});
    Actions.Drag(blshoe2);
    const blshoe3 = new Blocks.Image("Bilder/Oppgaver/blueshoe.png", {x:400,y:475,width:100,height:125});
    Actions.Drag(blshoe3);
    const gshoe2 = new Blocks.Image("Bilder/Oppgaver/greenshoe.png", {x:600,y:500,width:100,height:125});
    Actions.Drag(gshoe2);
    const gshoe3 = new Blocks.Image("Bilder/Oppgaver/greenshoe.png", {x:250,y:500,width:100,height:125});
    Actions.Drag(gshoe3);
    const pshoe2 = new Blocks.Image("Bilder/Oppgaver/pinkshoe.png", {x:900,y:600,width:100,height:125});
    Actions.Drag(pshoe2);
    const pshoe3 = new Blocks.Image("Bilder/Oppgaver/pinkshoe.png", {x:700,y:576,width:100,height:125});
    Actions.Drag(pshoe3);
    const bshoe2 = new Blocks.Image("Bilder/Oppgaver/brownshoe.png", {x:350,y:600,width:100,height:125});
    Actions.Drag(bshoe2);
    const bshoe3 = new Blocks.Image("Bilder/Oppgaver/brownshoe.png", {x:700,y:600,width:100,height:125});
    Actions.Drag(bshoe3);
    const oshoe2 = new Blocks.Image("Bilder/Oppgaver/orangeshoe.png", {x:500,y:500,width:100,height:125});
    Actions.Drag(oshoe2);   
    const oshoe3 = new Blocks.Image("Bilder/Oppgaver/orangeshoe.png", {x:350,y:300,width:100,height:125});
    Actions.Drag(oshoe3);
    const obscene5 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(obscene5, () => {
        GaaTil(scene6);
    })
}

function scene6 () {
    const garderobe1 = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:0,y:0,width:1280,height:720});
    const slobbiegarderobe1 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbieopenmoutharmup.png",], {x:500,y:400,width:200,height:300, loop:true, auto:true});
   
}
function scene7 () {
    const closedgate = new Blocks.Image("Bilder/Bakgrunner/closedgate.png", {x:0,y:0,width:1280,height:720});
    const slobbieclosedgate = new Blocks.Image("Bilder/Karakterer/slobbiearmup.png", {x:700,y:450,width:200,height:300});
}