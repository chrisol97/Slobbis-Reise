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

// QUICK SKIPBUTTON
//const skipbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:750,y:250,width:150,height:150});
//Actions.Click(skipbutton, () => {
        //GaaTil();
//})

Start(scene1);
 
function scene1() {
    const titlescreen = new Blocks.Image("Bilder/Bakgrunner/titlescreen.jpg", {x:0,y:0,width:1280,height:720});
    const startknapp = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:250,y:250,width:150,height:150});
    Actions.Click(startknapp, () => {
        GaaTil(scene3);
    })
}

function scene3() {
    const avdeling = new Blocks.Image("Bilder/Bakgrunner/avdeling.png", {x:0,y:0,width:1280,height:720});
    const slobbieavdeling = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:500,y:300,width:200,height:300, loop:true, auto:true});
    const speechbubbleavdeling = new Blocks.Image("Bilder/Snakkebobler/speechbubbleavdeling.png", {x:400,y:100,width:500,height:300});
    const cbscene3 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    const playknapp = new Blocks.Image("Lydfiler/speechbutton.png", {x:750,y:200,width:400,height:300});
    let scene3audio = new Audio("Lydfiler/scene3.mp3");
    Actions.Click(playknapp, () => {
        scene3audio.play();
    })
    Actions.Click(cbscene3, () => {
        scene3audio.pause();
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
    const speechbubblegarderobe1 = new Blocks.Image("Bilder/Snakkebobler/speechbubblegarderobe1.png", {x:400,y:200,width:500,height:300});
    const cbscene6 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbscene6, () => {
        GaaTil(scene7);
    })
}

function scene7 () {
    const closedgate = new Blocks.Image("Bilder/Bakgrunner/closedgate.png", {x:0,y:0,width:1280,height:720});
    const slobbieclosedgate = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmup.png","Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbieopenmoutharmup.png",], {x:700,y:450,width:200,height:300, loop:true, auto:true});
    const speechbubbleclosedgate = new Blocks.Image("Bilder/Snakkebobler/speechbubbleclosedgate.png", {x:600,y:250,width:500,height:300});
    const cbscene7 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:100,y:200,width:150,height:150});
    Actions.Click(cbscene7, () => {
        GaaTil(scene8);
    })
}

function scene8 () {
    const closedgate2 = new Blocks.Image("Bilder/Bakgrunner/closedgatekeyless.png", {x:0,y:0,width:1280,height:720});
    const frameforkey = new Blocks.Image("Bilder/Oppgaver/frameforkey.png", {x:375,y:75,width:550,height:325});
    const brokenkeyback = new Blocks.Image("Bilder/Oppgaver/brokenkeyback.png", {x:1000,y:550,width:200,height:200});
    Actions.Drag(brokenkeyback);
    const brokenkeyfront = new Blocks.Image("Bilder/Oppgaver/brokenkeyfront.png", {x:50,y:50,width:200,height:200});
    Actions.Drag(brokenkeyfront);
    const brokenkeymiddle = new Blocks.Image("Bilder/Oppgaver/brokenkeymiddle.png", {x:1000,y:20,width:200,height:200});
    Actions.Drag(brokenkeymiddle);
    const cbscene8 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:75,y:500,width:150,height:150});
    Actions.Click(cbscene8, () => {
        GaaTil(scene9);
    })
}

function scene9 () {
    const opengate = new Blocks.Image("Bilder/Bakgrunner/opengate.png", {x:0,y:0,width:1280,height:720});
    const slobbieopengate = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmup.png","Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbieopenmoutharmup.png",], {x:600,y:350,width:275,height:425, loop:true, auto:true});
    const speechbubbleopengate = new Blocks.Image("Bilder/Snakkebobler/speechbubbleopengate.png", {x:500,y:200,width:500,height:300});
    const cbscene9 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:75,y:500,width:150,height:150});
    Actions.Click(cbscene9, () => {
        GaaTil(scene10);
    })
}

function scene10 () {
    const village = new Blocks.Image("Bilder/Bakgrunner/village.jpg", {x:0,y:0,width:1280,height:720});
    const slobbievillage = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:300,y:350,width:325,height:450, loop:true, auto:true});
    const speechbubblevillage = new Blocks.Image("Bilder/Snakkebobler/speechbubblevillage.png", {x:290,y:230,width:500,height:300});
    const cbscene10 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:75,y:350,width:150,height:150});
    Actions.Click(cbscene10, () => {
        GaaTil(scene11);
    })
}

function scene11 () {
    const village1 = new Blocks.Image("Bilder/Bakgrunner/village.jpg", {x:0,y:0,width:1280,height:720});
    const slobbievillage1 = new Blocks.Image("Bilder/Karakterer/slobbiearmdown.png", {x:300,y:350,width:325,height:450});
    const arrowgreen = new Blocks.Image("Bilder/Knapper/arrowgreen.png", {x:570,y:380,width:400,height:230});
    Actions.Click(arrowgreen, () => {
        GaaTil(scene12);
    })
}

function scene12 () {
    const veivalg = new Blocks.Image("Bilder/Bakgrunner/veivalg.png", {x:0,y:0,width:1280,height:720});
    const slobbieveivalg = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png",], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleveivalg = new Blocks.Image("Bilder/Snakkebobler/speechbubbleveivalg.png", {x:500,y:300,width:500,height:300});
    const cbscene12 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:500,y:150,width:150,height:150});
    Actions.Click(cbscene12, () => {
        GaaTil(scene13);
    })
}

function scene13 () {
    const veivalg2 = new Blocks.Image("Bilder/Bakgrunner/veivalg.png", {x:0,y:0,width:1280,height:720});
    const continuebuttonMountain = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:120,y:550,width:150,height:150});
    Actions.Click(continuebuttonMountain, () => {
        GaaTil(sceneMountain1);
    })
    const continuebuttonSwamp = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:580,y:550,width:150,height:150});
    Actions.Click(continuebuttonSwamp, () => {
        GaaTil(sceneSwamp1);
    })
    const continuebuttonForest = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:1000,y:550,width:150,height:150});
    Actions.Click(continuebuttonForest, () => {
        GaaTil(sceneForest1);
    })
    const nameplateForest = new Blocks.Image("Bilder/Bakgrunner/forestnameplate.png", {x:900,y:50,width:350,height:200});
    const nameplateSwamp = new Blocks.Image("Bilder/Bakgrunner/swampnameplate.png", {x:470,y:50,width:350,height:200});
    const nameplateMountain = new Blocks.Image("Bilder/Bakgrunner/mountainnameplate.png", {x:25,y:50,width:350,height:200});
}

function sceneMountain1 () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1280,height:720});
    const slobbiemountain1 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubblemountain1 = new Blocks.Image("Bilder/Snakkebobler/speechbubblemountain1.png", {x:500,y:300,width:500,height:300});
    const cbMountain1 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:600,y:150,width:150,height:150});
    Actions.Click(cbMountain1, () => {
        GaaTil(sceneMountain2);
    })
}

function sceneMountain2 () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1280,height:720});
    const chancebackM2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    const questionbackM2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    const challengebackM2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    const slobbiemountain2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speecbubblemountain2 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules1.png", {x:500,y:300,width:500,height:300});
    const cbMountain2 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:120,y:550,width:150,height:150});
    Actions.Click(cbMountain2, () => {
        GaaTil(sceneMountain3);
    })
}

function sceneMountain3 () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1280,height:720});
    const chancebackM2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    const questionbackM2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    const challengebackM2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    const slobbiemountain2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speecbubblemountain2 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules2.png", {x:500,y:300,width:500,height:300});
    const cbMountain2 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:120,y:550,width:150,height:150});
    Actions.Click(cbMountain2, () => {
        GaaTil(sceneMountain4);
    })
}

function sceneMountain4 () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1280,height:720});
    const chancebackM2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    Actions.Click(chancebackM2, () => {
        GaaTil(sceneMountainChanceFront);
    })
    const questionbackM2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    Actions.Click(questionbackM2, () => {
        GaaTil(sceneMountainQuestionFront);
    })
    const challengebackM2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    Actions.Click(challengebackM2, () => {
        GaaTil(sceneMountainChallengeFront);
    })
    const cbMountain4 =  new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:550,y:25,width:150,height:150});
    Actions.Click(cbMountain4, () => {
        GaaTil(scene13);
    })
}

function sceneMountainChallengeFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1280,height:720});
    const challengeFront = new Blocks.Image("Bilder/Kort/challengefront.png", {x:30,y:10,width:1200,height:700});
    const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:80,y:550,width:150,height:150});
    Actions.Click(cbMountainChallengeFront, () => {
        GaaTil(sceneMountain4)
    })
}

function sceneMountainQuestionFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1280,height:720});
    const questionFront = new Blocks.Image("Bilder/Kort/questionfront.png", {x:30,y:10,width:1200,height:700});
    const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
    Actions.Click(cbMountainQuestionFront, () => {
        GaaTil(sceneMountain4)
    })
}

function sceneMountainChanceFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1280,height:720});
    const chanceFront = new Blocks.Image("Bilder/Kort/chancefront.png", {x:30,y:10,width:1200,height:700});
    const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
    Actions.Click(cbMountainChanceFront, () => {
        GaaTil(sceneMountain4)
    })
}

function sceneSwamp1 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1280,height:720});
    const slobbieSwamp1 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleswamp2 = new Blocks.Image("Bilder/Snakkebobler/speechbubbleswamp1.png", {x:500,y:300,width:500,height:300});
    const cbSwamp1 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:600,y:150,width:150,height:150});
    Actions.Click(cbSwamp1, () => {
        GaaTil(sceneSwamp2);
    })
}

function sceneSwamp2 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1280,height:720});
    const chancebackS2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    const questionbackS2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    const challengebackS2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    const slobbieSwamp2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speecbubbleswamp2 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules1.png", {x:500,y:300,width:500,height:300});
    const cbSwamp2 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:120,y:550,width:150,height:150});
    Actions.Click(cbSwamp2, () => {
        GaaTil(sceneSwamp3);
    })
}
function sceneSwamp3 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1280,height:720});
    const chancebackS2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    const questionbackS2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    const challengebackS2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    const slobbieSwamp3 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speecbubbleswamp3 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules2.png", {x:500,y:300,width:500,height:300});
    const cbSwamp3 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:120,y:550,width:150,height:150});
    Actions.Click(cbSwamp3, () => {
        GaaTil(sceneSwamp4);
    })
}

function sceneSwamp4 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1280,height:720});
    const chancebackS2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    Actions.Click(chancebackS2, () => {
        GaaTil(sceneSwampChanceFront);
    })
    const questionbackS2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    Actions.Click(questionbackS2, () => {
        GaaTil(sceneSwampQuestionFront);
    })
    const challengebackS2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    Actions.Click(challengebackS2, () => {
         GaaTil(sceneSwampChallengeFront);
    })
    const cbSwamp4 =  new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:550,y:25,width:150,height:150});
    Actions.Click(cbSwamp4, () => {
        GaaTil(scene13);
    })
}

function sceneSwampChallengeFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1280,height:720});
    const challengeFront = new Blocks.Image("Bilder/Kort/challengefront.png", {x:30,y:10,width:1200,height:700});
    const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:80,y:550,width:150,height:150});
    Actions.Click(cbSwampChallengeFront, () => {
        GaaTil(sceneSwamp4);
    })
}

function sceneSwampQuestionFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1280,height:720});
    const questionFront = new Blocks.Image("Bilder/Kort/questionfront.png", {x:30,y:10,width:1200,height:700});
    const cbSwampQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
    Actions.Click(cbSwampQuestionFront, () => {
        GaaTil(sceneSwamp4);
    })
}

function sceneSwampChanceFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1280,height:720});
    const chanceFront = new Blocks.Image("Bilder/Kort/chancefront.png", {x:30,y:10,width:1200,height:700});
    const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
    Actions.Click(cbSwampChanceFront, () => {
        GaaTil(sceneSwamp4);
    })
}

function sceneForest1 () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1280,height:720});
    const slobbieforest1 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleforest1 = new Blocks.Image("Bilder/Snakkebobler/speechbubbleforest1.png", {x:500,y:300,width:500,height:300});
    const cbSwamp1 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:600,y:150,width:150,height:150});
    Actions.Click(cbSwamp1, () => {
        GaaTil(sceneForest2);
    })
}

function sceneForest2 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1280,height:720});
    const chancebackF2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    const questionbackF2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    const challengebackF2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    const slobbieForest2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleforest2 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules1.png", {x:500,y:300,width:500,height:300});
    const cbSwamp2 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:120,y:550,width:150,height:150});
    Actions.Click(cbSwamp2, () => {
        GaaTil(sceneForest3);
    })
}
function sceneForest3 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1280,height:720});
    const chancebackM2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    const questionbackM2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    const challengebackM2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    const slobbieForest2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speecbubbleforest3 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules2.png", {x:500,y:300,width:500,height:300});
    const cbSwamp3 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:120,y:550,width:150,height:150});
    Actions.Click(cbSwamp3, () => {
        GaaTil(sceneForest4);
    })
}

function sceneForest4 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1280,height:720});
    const chancebackF2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:850,y:175,width:350,height:450});
    Actions.Click(chancebackF2, () => {
        GaaTil(sceneForestChanceFront);
    })
    const questionbackF2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:450,y:175,width:350,height:450});
    Actions.Click(questionbackF2, () => {
        GaaTil(sceneForestQuestionFront);
    })
    const challengebackF2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:350,height:450});
    Actions.Click(challengebackF2, () => {
         GaaTil(sceneForestChallengeFront);
    })
    const cbForest4 =  new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:550,y:25,width:150,height:150});
    Actions.Click(cbForest4, () => {
        GaaTil(scene13);
    })
}

function sceneForestChallengeFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1280,height:720});
    const challengeFront = new Blocks.Image("Bilder/Kort/challengefront.png", {x:30,y:10,width:1200,height:700});
    const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:80,y:550,width:150,height:150});
    Actions.Click(cbSwampChallengeFront, () => {
        GaaTil(sceneForest4);
    })
}

function sceneForestQuestionFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1280,height:720});
    const questionFront = new Blocks.Image("Bilder/Kort/questionfront.png", {x:30,y:10,width:1200,height:700});
    const cbSwampQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
    Actions.Click(cbSwampQuestionFront, () => {
        GaaTil(sceneForest4);
    })
}

function sceneForestChanceFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1280,height:720});
    const chanceFront = new Blocks.Image("Bilder/Kort/chancefront.png", {x:30,y:10,width:1200,height:700});
    const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
    Actions.Click(cbSwampChanceFront, () => {
        GaaTil(sceneForest4);
    })
}