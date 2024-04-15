//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";
import BaseBlock from "./barneprat/blocks/baseBlock.mjs";

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

/* JOBBE MED MANDAG ETTERMIDDAG/KVELD
- Spille inn mer musikk, typ bakgrunnsmusikk
- Legge inn oppgaver til alle de forskjellige kortene
- Importere flere kort
- Spille inn lydfiler til alle de forskjellige kortene/oppgavene
- Flytte alle objekter som er "utenfor" skjermen inn på skjermen pga skjermoppløsningsproblemer
- Endre skjermoppløsning (x:)

*/
// QUICK SKIPBUTTON
/*const skipbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:750,y:250,width:150,height:150});
Actions.Click(skipbutton, () => {
        GaaTil();
})*/


// MUSIKK
let titlescreenmusic = new Audio("Lydfiler/Music/titlescreen.mp3");
let chCardBearSleepSong = new Audio("Lydfiler/Music/chCardBearSleepSong.mp3");


// SNAKKEBOBLER
let scene3audio = new Audio("Lydfiler/SpeechBubbles/scene3SpeechBubble.mp3");
let scene4audio = new Audio("Lydfiler/SpeechBubbles/scene4SpeechBubble.mp3");
let scene6audio = new Audio("Lydfiler/SpeechBubbles/scene6SpeechBubble.mp3");
let scene7audio = new Audio("Lydfiler/SpeechBubbles/scene7SpeechBubble.mp3");
let scene9audio = new Audio("Lydfiler/SpeechBubbles/scene9SpeechBubble.mp3");
let scene10audio = new Audio("Lydfiler/SpeechBubbles/scene10SpeechBubble.mp3");
let scene12audio = new Audio("Lydfiler/SpeechBubbles/scene12SpeechBubble.mp3");
let sceneMountain1audio = new Audio("Lydfiler/SpeechBubbles/sceneMountain1SpeechBubble.mp3");
let sceneSwamp1audio = new Audio("Lydfiler/SpeechBubbles/sceneSwamp1SpeechBubble.mp3");
let sceneForest1audio = new Audio("Lydfiler/SpeechBubbles/sceneForest1SpeechBubble.mp3");
let sceneCard1audio = new Audio("Lydfiler/SpeechBubbles/sceneXSpeechBubbleCardRules1.mp3");
let sceneCard2audio = new Audio("Lydfiler/SpeechBubbles/sceneXSpeechBubbleCardRules2.mp3");
let qCardFCamoTrollQuestion2audio = new Audio("Lydfiler/SpeechBubbles/sceneqCardFCamoTrollQuestion2.mp3");

// LYDER TIL KORT

//FOREST
    //CHALLENGES
let chCardFBearSleepTextaudio = new Audio("Lydfiler/Cards/Challenge/chCardFBearSleepText.mp3");
    //QUESTIONS
let qCardFCamoTrollTextaudio = new Audio("Lydfiler/Cards/Question/qCardFCamoTrollText.mp3");

//SWAMP
    //CHALLENGES



Start(scene0);

function scene0() {
    const startscreengame = new Blocks.Image("Bilder/Karakterer/slobbiehead.png", {x:265,y:150,width:500,height:500});
    Actions.Click(startscreengame, () => {
        titlescreenmusic.play()
        GaaTil(scene1);
    })
}

function scene1() {
    const titlescreen = new Blocks.Image("Bilder/Bakgrunner/titlescreen2.jpg", {x:0,y:0,width:1080,height:810});
    const startbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:215,y:250,width:150,height:150});
    Actions.Click(startbutton, () => {
        scene3audio.play();
        GaaTil(scene3);
    })
}

function scene3() {
    titlescreenmusic.pause();
    const avdeling = new Blocks.Image("Bilder/Bakgrunner/avdeling.png", {x:0,y:0,width:1080,height:810});
    const slobbieavdeling = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:500,y:300,width:200,height:300, loop:true, auto:true});
    const speechbubbleavdeling = new Blocks.Image("Bilder/Snakkebobler/speechbubbleavdeling.png", {x:400,y:100,width:500,height:300});
    const cbscene3 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    let fartnoiseaudio = new Audio("Lydfiler/fartnoise.mp3");
    Actions.Click(slobbieavdeling, () => {
        fartnoiseaudio.play();
    })
    Actions.Click(cbscene3, () => {
        scene4audio.play();
        GaaTil(scene4);
    })
}

function scene4() {
    scene3audio.pause();
    const garderobe = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:0,y:0,width:1080,height:810});
    const slobbiegarderobe = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png",], {x:450,y:450,width:250,height:400, loop:true, auto:true});
    const blshoe1 = new Blocks.Image("Bilder/Oppgaver/blueshoe.png", {x:675,y:550,width:60,height:85});
    const gshoe1 = new Blocks.Image("Bilder/Oppgaver/greenshoe.png", {x:350,y:700,width:100,height:67});
    const pshoe1 = new Blocks.Image("Bilder/Oppgaver/pinkshoe.png", {x:750,y:680,width:70,height:50});
    const oshoe1 = new Blocks.Image("Bilder/Oppgaver/orangeshoe.png", {x:300,y:365,width:90,height:60});
    const bshoe1 = new Blocks.Image("Bilder/Oppgaver/brownshoe.png", {x:420,y:320,width:100,height:100});
    const speechbubblegarderobe = new Blocks.Image("Bilder/Snakkebobler/speechbubblegarderobe.png", {x:400,y:200,width:500,height:300});
    const cbscene4 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbscene4, () => {
        GaaTil(scene5);
    })
}

function scene5() {
    scene4audio.pause();
    const garderobespill = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:0,y:0,width:1080,height:810});
    const blshoe2 = new Blocks.Image("Bilder/Oppgaver/blueshoe.png", {x:675,y:550,width:60,height:85});
    const blshoe3 = new Blocks.Image("Bilder/Oppgaver/blueshoe.png", {x:400,y:550,width:60,height:85});
    const gshoe2 = new Blocks.Image("Bilder/Oppgaver/greenshoe.png", {x:600,y:355,width:100,height:67});
    const gshoe3 = new Blocks.Image("Bilder/Oppgaver/greenshoe.png", {x:350,y:680,width:100,height:67});
    const pshoe2 = new Blocks.Image("Bilder/Oppgaver/pinkshoe.png", {x:750,y:680,width:70,height:50});
    const pshoe3 = new Blocks.Image("Bilder/Oppgaver/pinkshoe.png", {x:250,y:576,width:70,height:50});
    const bshoe2 = new Blocks.Image("Bilder/Oppgaver/brownshoe.png", {x:875,y:500,width:100,height:100});
    const bshoe3 = new Blocks.Image("Bilder/Oppgaver/brownshoe.png", {x:420,y:320,width:100,height:100});
    const oshoe2 = new Blocks.Image("Bilder/Oppgaver/orangeshoe.png", {x:550,y:700,width:90,height:60}); 
    const oshoe3 = new Blocks.Image("Bilder/Oppgaver/orangeshoe.png", {x:300,y:365,width:90,height:60});
    const obscene5 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Drag(blshoe2);
    Actions.Drag(blshoe3);
    Actions.Drag(gshoe2);
    Actions.Drag(gshoe3);
    Actions.Drag(pshoe2);
    Actions.Drag(pshoe3);
    Actions.Drag(bshoe2);
    Actions.Drag(bshoe3);
    Actions.Drag(oshoe2);
    Actions.Drag(oshoe3);  
    Actions.Click(obscene5, () => {
        scene6audio.play();
        GaaTil(scene6);
    })
}

function scene6 () {
    const garderobe1 = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:0,y:0,width:1080,height:810});
    const slobbiegarderobe1 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmupopenmouth.png",], {x:400,y:350,width:300,height:500, loop:true, auto:true});
    const speechbubblegarderobe1 = new Blocks.Image("Bilder/Snakkebobler/speechbubblegarderobe1.png", {x:400,y:200,width:500,height:300});
    const cbscene6 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbscene6, () => {
        scene6audio.pause();
        GaaTil(scene7);
    })
}

function scene7 () {
    scene7audio.play();
    const closedgate = new Blocks.Image("Bilder/Bakgrunner/closedgate.png", {x:0,y:0,width:1080,height:810});
    const slobbieclosedgate = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmup.png","Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmupopenmouth.png",], {x:500,y:475,width:300,height:400, loop:true, auto:true});
    const speechbubbleclosedgate = new Blocks.Image("Bilder/Snakkebobler/speechbubbleclosedgate.png", {x:475,y:300,width:500,height:300});
    const cbscene7 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:45,y:180,width:150,height:150});
    Actions.Click(cbscene7, () => {
        scene7audio.pause();
        GaaTil(scene8);
    })
}

function scene8 () {
    const closedgate2 = new Blocks.Image("Bilder/Bakgrunner/closedgatekeyless.png", {x:0,y:0,width:1080,height:810});
    const frameforkey = new Blocks.Image("Bilder/Oppgaver/frameforkey.png", {x:265,y:75,width:550,height:325});
    const brokenkeyback = new Blocks.Image("Bilder/Oppgaver/brokenkeyback.png", {x:850,y:550,width:200,height:200});
    Actions.Drag(brokenkeyback);
    const brokenkeyfront = new Blocks.Image("Bilder/Oppgaver/brokenkeyfront.png", {x:25,y:50,width:200,height:200});
    Actions.Drag(brokenkeyfront);
    const brokenkeymiddle = new Blocks.Image("Bilder/Oppgaver/brokenkeymiddle.png", {x:880,y:20,width:200,height:200});
    Actions.Drag(brokenkeymiddle);
    const cbscene8 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:45,y:550,width:150,height:150});
    Actions.Click(cbscene8, () => {
        GaaTil(scene9);
    })
}

function scene9 () {
    scene9audio.play();
    const opengate = new Blocks.Image("Bilder/Bakgrunner/opengate.png", {x:0,y:0,width:1080,height:810});
    const slobbieopengate = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmup.png","Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmupopenmouth.png",], {x:450,y:450,width:275,height:425, loop:true, auto:true});
    const speechbubbleopengate = new Blocks.Image("Bilder/Snakkebobler/speechbubbleopengate.png", {x:420,y:320,width:500,height:300});
    const cbscene9 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbscene9, () => {
        scene9audio.pause();
        GaaTil(scene10);
    })
}

function scene10 () {
    scene10audio.play();
    const village = new Blocks.Image("Bilder/Bakgrunner/village.jpg", {x:0,y:0,width:1080,height:810});
    const slobbievillage = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:300,y:350,width:325,height:450, loop:true, auto:true});
    const speechbubblevillage = new Blocks.Image("Bilder/Snakkebobler/speechbubblevillage.png", {x:290,y:230,width:500,height:300});
    const cbscene10 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbscene10, () => {
        scene10audio.pause();
        GaaTil(scene11);
    })
}

function scene11 () {
    const village1 = new Blocks.Image("Bilder/Bakgrunner/village.jpg", {x:0,y:0,width:1080,height:810});
    const slobbievillage1 = new Blocks.Image("Bilder/Karakterer/slobbiearmdown.png", {x:300,y:350,width:325,height:450});
    const arrowgreen = new Blocks.Image("Bilder/Knapper/arrowgreen.png", {x:450,y:440,width:400,height:230});
    Actions.Click(arrowgreen, () => {
        GaaTil(scene12);
    })
}

// VEIVALGMAP

function scene12 () {
    scene12audio.play();
    const veivalg = new Blocks.Image("Bilder/Bakgrunner/veivalg.png", {x:0,y:0,width:1080,height:810});
    const slobbieveivalg = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png",], {x:345,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleveivalg = new Blocks.Image("Bilder/Snakkebobler/speechbubbleveivalg.png", {x:400,y:300,width:500,height:300});
    const cbscene12 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
        Actions.Click(cbscene12, () => {
        scene12audio.pause();
        GaaTil(scene13);
    })
}

function scene13 () {
    const veivalg2 = new Blocks.Image("Bilder/Bakgrunner/veivalg.png", {x:0,y:0,width:1080,height:810});
    const continuebuttonMountain = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:95,y:550,width:150,height:150});
    const continuebuttonSwamp = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:465,y:550,width:150,height:150});
    const continuebuttonForest = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:835,y:550,width:150,height:150});
    const nameplateForest = new Blocks.Image("Bilder/Bakgrunner/forestnameplate.png", {x:735,y:50,width:350,height:200});
    const nameplateSwamp = new Blocks.Image("Bilder/Bakgrunner/swampnameplate.png", {x:367,y:50,width:350,height:200});
    const nameplateMountain = new Blocks.Image("Bilder/Bakgrunner/mountainnameplate.png", {x:-5,y:50,width:350,height:200});
    Actions.Click(continuebuttonMountain, () => {
        GaaTil(sceneMountain1);
    })
    Actions.Click(continuebuttonSwamp, () => {
        GaaTil(sceneSwamp1);
    })
    Actions.Click(continuebuttonForest, () => {
        GaaTil(sceneForest1);
    })
}

// MOUNTAINMAP

function sceneMountain1 () {
    sceneMountain1audio.play();
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1080,height:810});
    const slobbiemountain1 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubblemountain1 = new Blocks.Image("Bilder/Snakkebobler/speechbubblemountain1.png", {x:500,y:300,width:500,height:300});
    const cbMountain1 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbMountain1, () => {
        sceneMountain1audio.pause();
        GaaTil(sceneMountain2);
    })
}

function sceneMountain2 () {
    sceneCard1audio.play();
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const slobbiemountain2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speecbubblemountain2 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules1.png", {x:500,y:300,width:500,height:300});
    const cbMountain2 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbMountain2, () => {
        sceneCard1audio.pause();
        GaaTil(sceneMountain3);
    })
}

function sceneMountain3 () {
    sceneCard2audio.play();
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const slobbiemountain2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speecbubblemountain2 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules2.png", {x:500,y:300,width:500,height:300});
    const cbMountain2 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbMountain2, () => {
        sceneCard2audio.pause();
        GaaTil(sceneMountain4);
    })
}

function sceneMountain4 () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const quickhopbuttonS = new Blocks.Image("Bilder/Knapper/quickhopbuttonS.png", {x:730,y:10,width:150,height:150});
    const quickhopbuttonF = new Blocks.Image("Bilder/Knapper/quickhopbuttonF.png", {x:900,y:10,width:150,height:150});
    const cbMountain4 =  new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:25,y:10,width:150,height:150});
    Actions.Click(chanceback2, () => {
        GaaTil(sceneMountainChanceFront);
    })
    Actions.Click(questionback2, () => {
        GaaTil(sceneMountainQuestionFront);
    })
    Actions.Click(challengeback2, () => {
        GaaTil(sceneMountainChallengeFront);
    })
    Actions.Click(quickhopbuttonS, () => {
        GaaTil(sceneSwamp4);
    })
    Actions.Click(quickhopbuttonF, () => {
        GaaTil(sceneForest4);
    })
    Actions.Click(cbMountain4, () => {
        GaaTil(scene13);
    })
}

// MOUNTAINMAP - CARDS - FRONTS


//CHALLENGES
function sceneMountainChallengeFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 7);
    if (tall === 0) {
        const challenge0 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMBuildBricks.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChallengeFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 1) {
        const challenge1 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMBuildBridge.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChallengeFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 2) {
        const challenge3 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMElfShield.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChallengeFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 3) {
        const challenge4 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMHighestMountain.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChallengeFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 4) {
        const challenge5 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMLonelyTroll.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChallengeFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 5) {
        const challenge6 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMMountainElfSing.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChallengeFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 6) {
        const challenge7 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMCampfire.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChallengeFront, () => {
            GaaTil(sceneMountain4);
        })
    }
}

//HUSK Å LEGGE TIL OPPGAVER DER DET TRENGS

//QUESTIONS
function sceneMountainQuestionFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const question0 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMAskeladdenCastle.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainQuestionFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 1) {
        const question1 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMFogCatHide.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainQuestionFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 2) {
        const question2 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMFogCatPrints.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainQuestionFront, () => {
            GaaTil(sceneMountain4); 
        })
    } else if (tall === 3) {
        const question3 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMSlobbieHide.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainQuestionFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 4) {
        const question4 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMSteepHill.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainQuestionFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 5) {
        const question5 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMWhoDoesntBelong.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainQuestionFront, () => {
            GaaTil(sceneMountain4);
        })
    }
}

//HUSK Å LEGGE TIL OPPGAVER DER DET TRENGS

//CHANCE
function sceneMountainChanceFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 8);
    if (tall === 0) {
        const chance0 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM1.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 1) {
        const chance1 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM2.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 2) {
        const chance2 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM3.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 3) {
        const chance3 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM4.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 4) {
        const chance4 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM5.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 5) {
        const chance5 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardMTrollScare.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 6) {
        const chance6 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chancecardX.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 7) {
        const chance7 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chancecardY.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbMountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    }
}

// HUSK Å LEGGE TIL OPPGAVER DER DET ER NØDVENDIG

// SWAMPMAP

function sceneSwamp1 () {
    sceneSwamp1audio.play();
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1080,height:810});
    const slobbieSwamp1 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleswamp2 = new Blocks.Image("Bilder/Snakkebobler/speechbubbleswamp1.png", {x:500,y:300,width:500,height:300});
    const cbSwamp1 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbSwamp1, () => {
        sceneSwamp1audio.pause();
        GaaTil(sceneSwamp2);
    })
}

function sceneSwamp2 () {
    sceneCard1audio.play();
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const slobbieSwamp2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleswamp2 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules1.png", {x:500,y:300,width:500,height:300});
    const cbSwamp2 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbSwamp2, () => {
        sceneCard1audio.pause();
        GaaTil(sceneSwamp3);
    })
}
function sceneSwamp3 () {
    sceneCard2audio.play();
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const slobbieSwamp3 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleswamp3 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules2.png", {x:500,y:300,width:500,height:300});
    const cbSwamp3 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbSwamp3, () => {
        sceneCard2audio.pause();
        GaaTil(sceneSwamp4);
    })
}

function sceneSwamp4 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const quickhopbuttonF = new Blocks.Image("Bilder/Knapper/quickhopbuttonF.png", {x:900,y:10,width:150,height:150});
    const quickhopbuttonM = new Blocks.Image("Bilder/Knapper/quickhopbuttonM.png", {x:730,y:10,width:150,height:150});
    const cbSwamp4 =  new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:25,y:10,width:150,height:150});
    Actions.Click(chanceback2, () => {
        GaaTil(sceneSwampChanceFront);
    })
    Actions.Click(questionback2, () => {
        GaaTil(sceneSwampQuestionFront);
    })
    Actions.Click(challengeback2, () => {
         GaaTil(sceneSwampChallengeFront);
    })
    Actions.Click(quickhopbuttonF, () => {
        GaaTil(sceneForest4);
    })
    Actions.Click(quickhopbuttonM, () => {
        GaaTil(sceneMountain4);
    })
    Actions.Click(cbSwamp4, () => {
        GaaTil(scene13);
    })
}

// SWAMPMAP - CARDS - FRONTS

// CHALLENGES

function sceneSwampChallengeFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const challenge0 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSEarwaxCandle.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 1) {
        const challenge1 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSHuldraDance.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 2) {
        const challenge2 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSJumpHigh.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        const challenge3 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSJungelRap.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 4) {
        const challenge4 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSNokkenBlow.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 5) {
        const challenge5 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSSlobbieSnakeTree.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    }
}

// HUSK Å LEGGE INN INNHOLD I OPPGAVENE

// QUESTIONS

function sceneSwampQuestionFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const question0 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSCountCroco.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 1) {
        const question1 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSFossegrimenLure.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 2) {
        const question2 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSFrogEatSlobbie.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        const question3 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSFrogRiddle.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 4) {
        const question4 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSHippoBubba.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 5) {
        const question5 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSHowManyFrogs.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbSwampChallengeFront, () => {
            GaaTil(sceneSwamp4);
        })
    }

}

// HUSK Å LEGGGE INN INNHOLD I SPØRSMÅLENE

//CHANCES

function sceneSwampChanceFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 4);
    if (tall === 0) {
        const chance0 = new Blocks.Image("Bilder/KortKlare/Swamp/Chance/chanceCardS1.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
        Actions.Click(cbSwampChanceFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 1) {
        const chance1 = new Blocks.Image("Bilder/KortKlare/Swamp/Chance/chanceCardS2.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
        Actions.Click(cbSwampChanceFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 2) {
        const chance2 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF4.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
        Actions.Click(cbSwampChanceFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        const chance3 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF5.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});
        Actions.Click(cbSwampChanceFront, () => {
            GaaTil(sceneSwamp4);
        })
    }
}

// HUSK Å DOBBELTSJEKK AT ALT INNHOLD ER RIKTIG

// FORESTMAP

function sceneForest1 () {
    sceneForest1audio.play();
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    const slobbieforest1 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleforest1 = new Blocks.Image("Bilder/Snakkebobler/speechbubbleforest1.png", {x:500,y:300,width:500,height:300});
    const cbForest1 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbForest1, () => {
        sceneForest1audio.pause();
        GaaTil(sceneForest2);
    })
}

function sceneForest2 () {
    sceneCard1audio.play();
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const slobbieForest2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleforest2 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules1.png", {x:500,y:300,width:500,height:300});
    const cbForest2 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbForest2, () => {
        sceneCard1audio.pause();
        GaaTil(sceneForest3);
    })
}
function sceneForest3 () {
    sceneCard2audio.play();
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const slobbieForest2 = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:450,y:400,width:400,height:500, loop:true, auto:true});
    const speecbubbleforest3 = new Blocks.Image("Bilder/Snakkebobler/speechbubblecardrules2.png", {x:500,y:300,width:500,height:300});
    const cbForest3 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbForest3, () => {
        sceneCard2audio.pause();
        GaaTil(sceneForest4);
    })
}

function sceneForest4 () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const quickhopbuttonS = new Blocks.Image("Bilder/Knapper/quickhopbuttonS.png", {x:900,y:10,width:150,height:150});
    const quickhopbuttonM = new Blocks.Image("Bilder/Knapper/quickhopbuttonM.png", {x:730,y:10,width:150,height:150});
    const cbForest4 =  new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:25,y:10,width:150,height:150});
    Actions.Click(chanceback2, () => {
        GaaTil(sceneForestChanceFront);
    })
    Actions.Click(questionback2, () => {
        GaaTil(sceneForestQuestionFront);
    })
    Actions.Click(challengeback2, () => {
         GaaTil(sceneForestChallengeFront);
    })
    Actions.Click(quickhopbuttonS, () => {
        GaaTil(sceneSwamp4);
    })
    Actions.Click(quickhopbuttonM, () => {
        GaaTil(sceneMountain4);
    })
    Actions.Click(cbForest4, () => {
        GaaTil(scene13);
    })
}

// FORESTMAP - CARDS - FRONTS

// CHALLENGES
function sceneForestChallengeFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const challenge0 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFBiggestTroll.png", {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(cbForestChallengeFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 1) {
        chCardFBearSleepTextaudio.play();
        const challenge1 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFBearSleep.png", {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(startbuttonCards, () => {
            chCardFBearSleepTextaudio.pause();
            GaaTil(chCardFBearSleepChallenge);
        })
        Actions.Click(cbForestChallengeFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 2) {
        const challenge2 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFBukkeneBruse.png",  {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(cbForestChallengeFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 3) {
        const challenge3 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFRRHFruitBasket.png",{x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(cbForestChallengeFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 4) {
        const challenge4 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFSinnataggFaces.png", {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(cbForestChallengeFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 5) {
        const challenge5 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFTrollChildrenBed.png", {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(cbForestChallengeFront, () => {
            GaaTil(sceneForest4);
        })
    }
}
    //HUSK Å LEGGE TIL SELVE OPPGAVENE

// QUESTIONS
function sceneForestQuestionFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 4);
    if (tall === 0) {
        qCardFCamoTrollTextaudio.play();
        const question0 = new Blocks.Image("Bilder/KortKlare/Forest/Question/qCardFCamoTroll.png", {x:30,y:10,width:1020,height:700});
        const cbForestQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(startbuttonCards, () => {
            qCardFCamoTrollTextaudio.pause();
            GaaTil(qCardFCamoTrollQuestion1);
        })
        Actions.Click(cbForestQuestionFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 1){
        const question1 = new Blocks.Image("Bilder/KortKlare/Forest/Question/qCardFMikkelRevLetter.png", {x:30,y:10,width:1020,height:700});
        const cbForestQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(cbForestQuestionFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 2) {
        const question2 = new Blocks.Image("Bilder/KortKlare/Forest/Question/qCardFTrollStealPrincess.png",  {x:30,y:10,width:1020,height:700});
        const cbForestQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(cbForestQuestionFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 3) {
        const question3 = new Blocks.Image("Bilder/KortKlare/Forest/Question/qCardFWitchWarts.png",{x:30,y:10,width:1020,height:700});
        const cbForestQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});
        Actions.Click(cbForestQuestionFront, () => {
            GaaTil(sceneForest4);
        })
    }
    // HUSK Å LEGGE TIL SELVE OPPGAVENE
}
// CHANCES
function sceneForestChanceFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        const chance0 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF1.png", {x:30,y:10,width:1020,height:700});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbForestChanceFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 1){
        const chance1 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF2.png", {x:30,y:10,width:1020,height:700});
        const ForestChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonF.png", {x:675,y:25,width:150,height:150});
        const SwampChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonS.png", {x:475,y:25,width:150,height:150});
        const MountainChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonM.png", {x:275,y:25,width:150,height:150});
        Actions.Click(ForestChanceFront, () => {
            GaaTil(sceneForest4);
        })
        Actions.Click(SwampChanceFront, () => {
            GaaTil(sceneSwamp4);
        })
        Actions.Click(MountainChanceFront, () => {
            GaaTil(sceneMountain4);
        })
    } else if (tall === 2) {
        const chance2 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF3.png",  {x:30,y:10,width:1020,height:700});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbForestChanceFront, () => {
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        const chance3 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF4.png",{x:30,y:10,width:1020,height:700});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbForestChanceFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 4) {
        const chance4 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF5.png", {x:30,y:10,width:1020,height:700});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbForestChanceFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 5) {
        const chance5 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF6.png", {x:30,y:10,width:1020,height:700});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        Actions.Click(cbForestChanceFront, () => {
            GaaTil(scene11);
        })
    }
}
    // HUSK Å LEGGE INN UTFALL

// FORESTMAP - CARDMAPS - CHALLENGES/QUESTIONS/CHANCES

function chCardFBearSleepChallenge () {
    chCardBearSleepSong.play();
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    const bearSleep = new Blocks.Image("Bilder/Karakterer/bearSleep.png", {x:750,y:600,width:200,height:150});
    //const slobbieSneaky = new Blocks.Image("Bilder/Karakterer/slobbiearmdown.png", {x:-225,y:500,width:300,height:400});
    const backbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:20,width:150,height:150});
    Actions.Click(backbutton, () => {
        chCardBearSleepSong.pause();
        GaaTil(sceneForest4);
    })
}

function qCardFCamoTrollQuestion1 () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    const rock1 = new Blocks.Image("Bilder/Oppgaver/rock1.png", {x:100,y:520,width:100,height:40});
    const rock2 = new Blocks.Image("Bilder/Oppgaver/rock2.png", {x:300,y:575,width:200,height:200});
    const rock3 = new Blocks.Image("Bilder/Oppgaver/rock3.png", {x:850,y:700,width:100,height:75});
    const rock4 = new Blocks.Image("Bilder/Oppgaver/rock4.png", {x:600,y:550,width:75,height:75});
    const trollfaceback = new Blocks.Image("Bilder/Karakterer/trollfaceback.png", {x:970,y:510,width:50,height:50});
    Actions.Click(trollfaceback, () => {
        GaaTil(qCardFCamoTrollQuestion2);
    })
}   

function qCardFCamoTrollQuestion2 () {
    qCardFCamoTrollQuestion2audio.play();
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:0,y:0,width:1080,height:810});
    const rock1 = new Blocks.Image("Bilder/Oppgaver/rock1.png", {x:100,y:520,width:100,height:40});
    const rock2 = new Blocks.Image("Bilder/Oppgaver/rock2.png", {x:300,y:575,width:200,height:200});
    const rock3 = new Blocks.Image("Bilder/Oppgaver/rock3.png", {x:850,y:700,width:100,height:75});
    const rock4 = new Blocks.Image("Bilder/Oppgaver/rock4.png", {x:600,y:550,width:75,height:75});
    const trollfacefront = new Blocks.Image("Bilder/Karakterer/trollfacefront.png", {x:970,y:510,width:50,height:50});
    const trollfaceSpeechBubble = new Blocks.Image("Bilder/Snakkebobler/speechbubbletrollfacefront.png", {x:870,y:380,width:200,height:150});
    const exitbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:25,width:150,height:150});
    Actions.Click(exitbutton, () => {
        qCardFCamoTrollQuestion2audio.pause();
        GaaTil(sceneForest4);
    })
}

// SWAMPMAP - CARDMAPS - CHALLENGES/QUESTIONS/CHANCES

function chCardSHuldraDanceChallenge () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:0,y:0,width:1080,height:810});
    const HuldraSad = new Blocks.Image("Bilder/Karakterer/huldrasad.png", {x:450,y:340,width:450,height:450});
    const exitbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:25,y:25,width:150,height:150});
    Actions.Click(exitbutton, () => {
        GaaTil(sceneSwamp4);
    })
}
