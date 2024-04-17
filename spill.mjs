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

/* JOBBE MED VIDERE
- Legge inn reaksjoner på alt som kan trykkes på; typ "Neeeii, ikke helt! Prøv en gang til!" - Gjør hjemme
- Legge inn funksjon for at man kan trykke på låsen for å åpne porter
- Få til Tween-funksjon
- Legge inn ambient-noise på de forskjellige områdene??
- Se på Collide-action

*/
// QUICK SKIPBUTTON
/*const skipbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:750,y:250,width:150,height:150});
Actions.Click(skipbutton, () => {
        GaaTil();
})*/


// MUSIKK
    let titlescreenmusic = new Audio("Lydfiler/Music/titlescreen.mp3");
    let chCardBearSleepSong = new Audio("Lydfiler/Music/chCardBearSleepSong.mp3");
    let chCardSHuldraDanceSong = new Audio("Lydfiler/Music/chCardSHuldraDanceSong.mp3");


// SNAKKEBOBLER
    let scene3audio = new Audio("Lydfiler/SpeechBubbles/scene3SpeechBubble.mp3", {loop:true, auto:false});
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
    let sceneOutsideMountainaudio = new Audio("Lydfiler/SpeechBubbles/sceneOutsideMountainSpeechBubble.mp3");
    let sceneInsideMountainaudio = new Audio("Lydfiler/SpeechBubbles/sceneInsideMountainSpeechBubble.mp3");
    let sceneFjellheksHomeSlobbieaudio = new Audio("Lydfiler/SpeechBubbles/sceneFjellheksHomeSlobbieSpeechBubble.mp3");
    let sceneFjellheksHomeReverseaudio = new Audio("Lydfiler/SpeechBubbles/sceneFjellheksHomeReverseSpeechBubble.mp3");
    let sceneEndaudio = new Audio("Lydfiler/SpeechBubbles/sceneEnd.mp3");
// LYDER TIL KORT

//FOREST
    //CHALLENGES
    let chCardFBearSleepTextaudio = new Audio("Lydfiler/Cards/Forest/Challenge/chCardFBearSleepText.mp3");
    let chCardFBiggestTrollaudio = new Audio("Lydfiler/Cards/Forest/Challenge/chCardFBiggestTrollText.mp3");
    let chCardFBukkeneBruseaudio = new Audio("Lydfiler/Cards/Forest/Challenge/chCardFBukkeneBruseText.mp3");
    let chCardFRRHFruitBasketaudio = new Audio("Lydfiler/Cards/Forest/Challenge/chCardFRRHFruitBasketText.mp3");
    let chCardFSinnataggFacesaudio = new Audio("Lydfiler/Cards/Forest/Challenge/chCardFSinnataggFacesText.mp3");
        let sinnataggLaughaudio = new Audio("Lydfiler/sinnataggLaugh.mp3");
    let chCardFTrollChildrenBedaudio = new Audio("Lydfiler/Cards/Forest/Challenge/chCardFTrollChildrenBedText.mp3");

    //QUESTIONS
    let qCardFCamoTrollTextaudio = new Audio("Lydfiler/Cards/Forest/Question/qCardFCamoTrollText.mp3");
    let qCardFMikkelRevLetteraudio = new Audio("Lydfiler/Cards/Forest/Question/qCardFMikkelRevLetterText.mp3");
    let qCardFTrollStealPrincessaudio = new Audio("Lydfiler/Cards/Forest/Question/qCardFTrollStealPrincessText.mp3");
    let qCardFWitchWartsaudio = new Audio("Lydfiler/Cards/Forest/Question/qCardFWitchWartsText.mp3");

    //CHANCES
    let chanceCardF1audio = new Audio("Lydfiler/Cards/Forest/Chance/chanceCardF1Text.mp3");
    let chanceCardF2audio = new Audio("Lydfiler/Cards/Forest/Chance/chanceCardF2Text.mp3");
    let chanceCardF3audio = new Audio("Lydfiler/Cards/Forest/Chance/chanceCardF3Text.mp3");
    let chanceCardF4audio = new Audio("Lydfiler/Cards/Forest/Chance/chanceCardF4Text.mp3");
    let chanceCardF5audio = new Audio("Lydfiler/Cards/Forest/Chance/chanceCardF5Text.mp3");
    let chanceCardF6audio = new Audio ("Lydfiler/Cards/Forest/Chance/chanceCardF6Text.mp3");

//SWAMP
    //CHALLENGES
    let chCardSEarwaxCandleaudio = new Audio("Lydfiler/Cards/Swamp/Challenge/chCardSEarwaxCandleText.mp3");
    let chCardSHuldraDanceaudio = new Audio("Lydfiler/Cards/Swamp/Challenge/chCardSHuldraDanceText.mp3");
    let chCardSJumpHighaudio = new Audio("Lydfiler/Cards/Swamp/Challenge/chCardSJumpHighText.mp3");
    let chCardSJungelRapaudio = new Audio("Lydfiler/Cards/Swamp/Challenge/chCardSJungelRapText.mp3");
    let chCardSNokkenBlowaudio = new Audio("Lydfiler/Cards/Swamp/Challenge/chCardSNokkenBlowText.mp3");
    let chCardSSlobbieSnakeTreeaudio = new Audio("Lydfiler/Cards/Swamp/Challenge/chCardSSlobbieSnakeTreeText.mp3");

    //QUESTIONS
    let qCardSCountCrocoaudio = new Audio("Lydfiler/Cards/Swamp/Question/qCardSCountCrocoText.mp3");
    let qCardSFossegrimenLureaudio = new Audio("Lydfiler/Cards/Swamp/Question/qCardSFossegrimenLureText.mp3");
    let qCardSFrogEatSlobbieaudio = new Audio("Lydfiler/Cards/Swamp/Question/qCardSFrogEatSlobbieText.mp3");
    let qCardSFrogRiddleaudio = new Audio("Lydfiler/Cards/Swamp/Question/qCardSFrogRiddleText.mp3");
    let qCardSHippoBubbaaudio = new Audio("Lydfiler/Cards/Swamp/Question/qCardSHippoBubbaText.mp3");
    let qCardSHowManyFrogsaudio = new Audio("Lydfiler/Cards/Swamp/Question/qCardSHowManyFrogsText.mp3");

    //CHANCES
    let chanceCardS1audio = new Audio("Lydfiler/Cards/Swamp/Chance/chanceCardS1Text.mp3");
    let chanceCardS2audio = new Audio("Lydfiler/Cards/Swamp/Chance/chanceCardS2Text.mp3");
    let chanceCardS3audio = new Audio("Lydfiler/Cards/Swamp/Chance/chanceCardS3Text.mp3");
    let chanceCardXaudio = new Audio("Lydfiler/Cards/Swamp/Chance/chancecardXText.mp3");

//MOUNTAIN
    //CHALLENGES
    let chCardMBuildBricksaudio = new Audio("Lydfiler/Cards/Mountain/Challenge/chCardMBuildBricksText.mp3");
    let chCardMBuildBridgeaudio = new Audio("Lydfiler/Cards/Mountain/Challenge/chCardMBuildBridgeText.mp3");
    let chCardMCampfireaudio = new Audio("Lydfiler/Cards/Mountain/Challenge/chCardMCampfireText.mp3");
    let chCardMElfShieldaudio = new Audio("Lydfiler/Cards/Mountain/Challenge/chCardMElfShieldText.mp3");
    let chCardMHighestMountainaudio = new Audio("Lydfiler/Cards/Mountain/Challenge/chCardMHighestMountainText.mp3");
    let chCardMLonelyTrollaudio = new Audio("Lydfiler/Cards/Mountain/Challenge/chCardMLonelyTrollText.mp3");
    let chCardMMountainElfSingaudio = new Audio("Lydfiler/Cards/Mountain/Challenge/chCardMMountainElfSingText.mp3");
    //QUESTIONS
    let qCardMAskeladdenCastleaudio = new Audio("Lydfiler/Cards/Mountain/Question/qCardMAskeladdenCastleText.mp3");
    let qCardMFogCatHideaudio = new Audio("Lydfiler/Cards/Mountain/Question/qCardMFogCatHideText.mp3");
    let qCardMFogCatPrintsaudio = new Audio("Lydfiler/Cards/Mountain/Question/qCardMFogCatPrintsText.mp3");
    let qCardMSlobbieHideaudio = new Audio("Lydfiler/Cards/Mountain/Question/qCardMSlobbieHideText.mp3");
    let qCardMSteepHillaudio = new Audio("Lydfiler/Cards/Mountain/Question/qCardMSteepHillText.mp3");
    let qCardMWhoDoesntBelongaudio = new Audio("Lydfiler/Cards/Mountain/Question/qCardMWhoDoesntBelongText.mp3");

    //CHANCES
    let chanceCardM1audio = new Audio("Lydfiler/Cards/Mountain/Chance/chanceCardM1Text.mp3");
    let chanceCardM2audio = new Audio("Lydfiler/Cards/Mountain/Chance/chanceCardM2Text.mp3");
    let chanceCardM3audio = new Audio("Lydfiler/Cards/Mountain/Chance/chanceCardM3Text.mp3");
    let chanceCardM4audio = new Audio("Lydfiler/Cards/Mountain/Chance/chanceCardM4Text.mp3");
    let chanceCardM5audio = new Audio("Lydfiler/Cards/Mountain/Chance/chanceCardM5Text.mp3");
    let chanceCardMTrollScareaudio = new Audio("Lydfiler/Cards/Mountain/Chance/chanceCardMTrollScareText.mp3");
    let chanceCardYaudio = new Audio("Lydfiler/Cards/Mountain/Chance/chancecardY.mp3");

Start(scene0);

function scene0() {
    const startscreengame = new Blocks.Image("Bilder/Karakterer/slobbiehead.png", {x:265,y:150,width:500,height:500});
    Actions.Click(startscreengame, () => {
        titlescreenmusic.play()
        GaaTil(scene1);
    })
}

function scene1() {
    const titlescreen = new Blocks.Image("Bilder/Bakgrunner/titlescreen2.jpg", {x:-8,y:-8,width:1088,height:818});
    const fjellheksa = new Blocks.Image("Bilder/Karakterer/fjellheksa.png", {x:150,y:416,width:300,height:400});
    const startbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:215,y:250,width:150,height:150});
    const skipbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:750,y:250,width:150,height:150});
Actions.Click(skipbutton, () => {
        titlescreenmusic.pause();
        GaaTil(scene8);
    })    
Actions.Click(startbutton, () => {
        scene3audio.play();
        GaaTil(scene3);
    })
}

function scene3() {
    titlescreenmusic.pause();
    const avdeling = new Blocks.Image("Bilder/Bakgrunner/avdeling.png", {x:-8,y:-8,width:1088,height:818});
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
    const garderobe = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:-8,y:-8,width:1088,height:818});
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
    const garderobespill = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:-8,y:-8,width:1088,height:818});
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
    const garderobe1 = new Blocks.Image("Bilder/Bakgrunner/garderobe.png", {x:-8,y:-8,width:1088,height:818});
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
    const closedgate = new Blocks.Image("Bilder/Bakgrunner/closedgate.png", {x:-8,y:-8,width:1088,height:818});
    const slobbieclosedgate = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmup.png","Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmup.png", "Bilder/Karakterer/slobbiearmupopenmouth.png",], {x:500,y:475,width:300,height:400, loop:true, auto:true});
    const speechbubbleclosedgate = new Blocks.Image("Bilder/Snakkebobler/speechbubbleclosedgate.png", {x:475,y:300,width:500,height:300});
    const cbscene7 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:45,y:180,width:150,height:150});
    Actions.Click(cbscene7, () => {
        scene7audio.pause();
        GaaTil(scene8);
    })
}

function scene8 () {
    const closedgate2 = new Blocks.Image("Bilder/Bakgrunner/closedgatekeyless.png", {x:-8,y:-8,width:1088,height:818});
    const frameforkey = new Blocks.Image("Bilder/Oppgaver/frameforkey.png", {x:265,y:75,width:550,height:325});
    let brokenkeyback = new Blocks.Image("Bilder/Oppgaver/brokenkeyback.png", {x:850,y:550,width:200,height:200});
    let brokenkeyfront = new Blocks.Image("Bilder/Oppgaver/brokenkeyfront.png", {x:25,y:50,width:200,height:200});
    let brokenkeymiddle = new Blocks.Image("Bilder/Oppgaver/brokenkeymiddle.png", {x:880,y:20,width:200,height:200});
    const lock = new Blocks.Image("Bilder/Oppgaver/lock.png", {x:386,y:508,width:300,height:224});
    const cbscene8 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:45,y:550,width:150,height:150});
    Actions.Drag(brokenkeyback);
    Actions.Drag(brokenkeyfront);
    Actions.Drag(brokenkeymiddle);
    /*TODO if (Actions.Colide(brokenkeyback, brokenkeymiddle) && Actions.Colide(brokenkeymiddle, brokenkeyfront)) {
        brokenkeyback.hide();
        brokenkeyfront.hide();
        brokenkeymiddle.hide();
        console.log(Actions.Colide(brokenkeyback, brokenkeymiddle));
        console.log(Actions.Colide(brokenkeymiddle, brokenkeyfront));                   // SE PÅ DETTE
    }*/
    Actions.Click(lock, () => {
        GaaTil(scene9);
    })
    Actions.Click(cbscene8, () => {
        GaaTil(scene9);
    })
}

function scene9 () {
    scene9audio.play();
    const opengate = new Blocks.Image("Bilder/Bakgrunner/opengate.png", {x:-8,y:-8,width:1088,height:818});
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
    const village = new Blocks.Image("Bilder/Bakgrunner/village.jpg", {x:-8,y:-8,width:1088,height:818});
    const slobbievillage = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:300,y:350,width:325,height:450, loop:true, auto:true});
    const speechbubblevillage = new Blocks.Image("Bilder/Snakkebobler/speechbubblevillage.png", {x:290,y:230,width:500,height:300});
    const cbscene10 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
    Actions.Click(cbscene10, () => {
        scene10audio.pause();
        GaaTil(scene11);
    })
}

function scene11 () {
    const village1 = new Blocks.Image("Bilder/Bakgrunner/village.jpg", {x:-8,y:-8,width:1088,height:818});
    const slobbievillage1 = new Blocks.Image("Bilder/Karakterer/slobbiearmdown.png", {x:300,y:350,width:325,height:450});
    const arrowgreen = new Blocks.Image("Bilder/Knapper/arrowgreen.png", {x:450,y:440,width:400,height:230});
    Actions.Click(arrowgreen, () => {
        GaaTil(scene12);
    })
}

// VEIVALGMAP

function scene12 () {
    scene12audio.play();
    const veivalg = new Blocks.Image("Bilder/Bakgrunner/veivalg.png", {x:-8,y:-8,width:1088,height:818});
    const slobbieveivalg = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png",], {x:345,y:400,width:400,height:500, loop:true, auto:true});
    const speechbubbleveivalg = new Blocks.Image("Bilder/Snakkebobler/speechbubbleveivalg.png", {x:400,y:300,width:500,height:300});
    const cbscene12 = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:175,y:200,width:150,height:150});
        Actions.Click(cbscene12, () => {
        scene12audio.pause();
        GaaTil(scene13);
    })
}

function scene13 () {
    const veivalg2 = new Blocks.Image("Bilder/Bakgrunner/veivalg.png", {x:-8,y:-8,width:1088,height:818});
    const continuebuttonMountain = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:95,y:550,width:150,height:150});
    const continuebuttonSwamp = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:465,y:550,width:150,height:150});
    const continuebuttonForest = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:835,y:550,width:150,height:150});
    const nameplateForest = new Blocks.Image("Bilder/Bakgrunner/forestnameplate.png", {x:735,y:50,width:350,height:200});
    const nameplateSwamp = new Blocks.Image("Bilder/Bakgrunner/swampnameplate.png", {x:367,y:50,width:350,height:200});
    const nameplateMountain = new Blocks.Image("Bilder/Bakgrunner/mountainnameplate.png", {x:-8,y:50,width:350,height:200});
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
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
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
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
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
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
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
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const quickhopbuttonS = new Blocks.Image("Bilder/Knapper/quickhopbuttonS.png", {x:730,y:10,width:150,height:150});
    const quickhopbuttonF = new Blocks.Image("Bilder/Knapper/quickhopbuttonF.png", {x:900,y:10,width:150,height:150});
    const quickhopbuttonE = new Blocks.Image("Bilder/Knapper/quickhopbuttonE.png", {x:470,y:10,width:150,height:150});
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
    Actions.Click(quickhopbuttonE, () => {
        GaaTil(sceneOutsideMountain);
    })
    Actions.Click(cbMountain4, () => {
        GaaTil(scene13);
    })
}

// MOUNTAINMAP - CARDS - FRONTS


//CHALLENGES
function sceneMountainChallengeFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 7);
    if (tall === 0) {
        chCardMBuildBricksaudio.play();
        const challenge0 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMBuildBricks.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                     // FERDIG 
        Actions.Click(startbuttonCard, () => {
            chCardMBuildBricksaudio.pause();
            GaaTil(chCardMBuildBricksChallenge);
        })
        Actions.Click(cbMountainChallengeFront, () => {
            chCardMBuildBricksaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 1) {
        chCardMBuildBridgeaudio.play();
        const challenge1 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMBuildBridge.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                     // FERDIG 
        Actions.Click(startbuttonCard, () => {
            chCardMBuildBridgeaudio.pause();
            GaaTil(chCardMBuildBridgeChallenge);
        })
        Actions.Click(cbMountainChallengeFront, () => {
            chCardMBuildBridgeaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 2) {
        chCardMElfShieldaudio.play();
        const challenge3 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMElfShield.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});              // FERDIG
        Actions.Click(cbMountainChallengeFront, () => {
            chCardMElfShieldaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 3) {
        chCardMHighestMountainaudio.play();
        const challenge4 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMHighestMountain.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            chCardMHighestMountainaudio.pause();
            GaaTil(chCardMHighestMountainChallenge);
        })
        Actions.Click(cbMountainChallengeFront, () => {
            chCardMHighestMountainaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 4) {
        chCardMLonelyTrollaudio.play();
        const challenge5 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMLonelyTroll.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});           // FERDIG
        Actions.Click(cbMountainChallengeFront, () => {
            chCardMLonelyTrollaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 5) {
        chCardMMountainElfSingaudio.play();
        const challenge6 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMMountainElfSing.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});          // FERDIG
        Actions.Click(cbMountainChallengeFront, () => {
            chCardMMountainElfSingaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 6) {
        chCardMCampfireaudio.play();
        const challenge7 = new Blocks.Image("Bilder/KortKlare/Mountain/Challenge/chCardMCampfire.png", {x:30,y:10,width:1020,height:700});
        const cbMountainChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG - 
        Actions.Click(startbuttonCard, () => {
            chCardMCampfireaudio.pause();
            GaaTil(chCardMCampfireChallenge1);
        })
        Actions.Click(cbMountainChallengeFront, () => {
            chCardMCampfireaudio.pause();
            GaaTil(sceneMountain4);
        })
    }
}

//QUESTIONS
function sceneMountainQuestionFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        qCardMAskeladdenCastleaudio.play();
        const question0 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMAskeladdenCastle.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardMAskeladdenCastleaudio.pause();
            GaaTil(qCardMAskeladdenCastleQuestion);
        })
        Actions.Click(cbMountainQuestionFront, () => {
            qCardMAskeladdenCastleaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 1) {
        qCardMFogCatHideaudio.play();
        const question1 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMFogCatHide.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardMFogCatHideaudio.pause();
            GaaTil(qCardMFogCatHideQuestion);
        })
        Actions.Click(cbMountainQuestionFront, () => {
            qCardMFogCatHideaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 2) {
        qCardMFogCatPrintsaudio.play();
        const question2 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMFogCatPrints.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardMFogCatPrintsaudio.pause();
            GaaTil(qCardMFogCatPrintsQuestion);
        })
        Actions.Click(cbMountainQuestionFront, () => {
            qCardMFogCatPrintsaudio.pause();
            GaaTil(sceneMountain4); 
        })
    } else if (tall === 3) {
        qCardMSlobbieHideaudio.play();
        const question3 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMSlobbieHide.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardMSlobbieHideaudio.pause();
            GaaTil(qCardMSlobbieHideQuestion);
        })
        Actions.Click(cbMountainQuestionFront, () => {
            qCardMSlobbieHideaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 4) {
        qCardMSteepHillaudio.play();
        const question4 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMSteepHill.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardMSteepHillaudio.pause();
            GaaTil(qCardMSteepHillQuestion)
        })
        Actions.Click(cbMountainQuestionFront, () => {
            qCardMSteepHillaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 5) {
        qCardMWhoDoesntBelongaudio.play();
        const question5 = new Blocks.Image("Bilder/KortKlare/Mountain/Question/qCardMWhoDoesntBelong.png", {x:30,y:10,width:1020,height:700});
        const cbMountainQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});           
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardMWhoDoesntBelongaudio.pause();
            GaaTil(qCardMWhoDoesntBelongQuestion);
        })
        Actions.Click(cbMountainQuestionFront, () => {
            qCardMWhoDoesntBelongaudio.pause();
            GaaTil(sceneMountain4);
        })
    }
}

//HUSK Å LEGGE TIL OPPGAVER DER DET TRENGS

//CHANCE
function sceneMountainChanceFront () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 7);
    if (tall === 0) {
        chanceCardM1audio.play();
        const chance0 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM1.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});         // FERDIG 
        Actions.Click(cbMountainChanceFront, () => {
            chanceCardM1audio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 1) {
        chanceCardM2audio.play();
        const chance1 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM2.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});         // FERDIG 
        Actions.Click(cbMountainChanceFront, () => {
            chanceCardM2audio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 2) {
        chanceCardM3audio.play();
        const chance2 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM3.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});         // FERDIG 
        Actions.Click(cbMountainChanceFront, () => {
            chanceCardM3audio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        chanceCardM4audio.play();
        const chance3 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM4.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});         // FERDIG 
        Actions.Click(cbMountainChanceFront, () => {
            chanceCardM4audio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 4) {
        chanceCardM5audio.play();
        const chance4 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardM5.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});         // FERDIG 
        Actions.Click(cbMountainChanceFront, () => {
            chanceCardM5audio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 5) {
        chanceCardMTrollScareaudio.play();
        const chance5 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chanceCardMTrollScare.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});             // FERDIG 
        Actions.Click(startbuttonCard, () => {
            chanceCardMTrollScareaudio.pause();
            GaaTil(chanceCardMTrollScareMap);
        })
        Actions.Click(cbMountainChanceFront, () => {
            chanceCardMTrollScareaudio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 6) {
        chanceCardYaudio.play();
        const chance7 = new Blocks.Image("Bilder/KortKlare/Mountain/Chance/chancecardY.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbMountainChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});         // FERDIG 
        Actions.Click(cbMountainChanceFront, () => {
            chanceCardYaudio.pause();
            GaaTil(sceneMountain4);
        })
    }
}


// SWAMPMAP

function sceneSwamp1 () {
    sceneSwamp1audio.play();
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
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
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
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
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
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
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const quickhopbuttonF = new Blocks.Image("Bilder/Knapper/quickhopbuttonF.png", {x:900,y:10,width:150,height:150});
    const quickhopbuttonM = new Blocks.Image("Bilder/Knapper/quickhopbuttonM.png", {x:730,y:10,width:150,height:150});
    const quickhopbuttonE = new Blocks.Image("Bilder/Knapper/quickhopbuttonE.png", {x:470,y:10,width:150,height:150});
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
    Actions.Click(quickhopbuttonE, () => {
        GaaTil(sceneOutsideMountain);
    })
    Actions.Click(cbSwamp4, () => {
        GaaTil(scene13);
    })
}

// SWAMPMAP - CARDS - FRONTS

// CHALLENGES

function sceneSwampChallengeFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        chCardSEarwaxCandleaudio.play();
        const challenge0 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSEarwaxCandle.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            chCardSEarwaxCandleaudio.pause();
            GaaTil(chCardSEarwaxCandleChallenge);
        })
        Actions.Click(cbSwampChallengeFront, () => {
            chCardSEarwaxCandleaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 1) {
        chCardSHuldraDanceaudio.play();
        const challenge1 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSHuldraDance.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            chCardSHuldraDanceaudio.pause();
            GaaTil(chCardSHuldraDanceChallenge);
        })
        Actions.Click(cbSwampChallengeFront, () => {
            chCardSHuldraDanceaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 2) {
        chCardSJumpHighaudio.play();
        const challenge2 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSJumpHigh.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});             // FERDIG
        Actions.Click(cbSwampChallengeFront, () => {
            chCardSJumpHighaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        chCardSJungelRapaudio.play();
        const challenge3 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSJungelRap.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});             // FERDIG 
        Actions.Click(cbSwampChallengeFront, () => {
            chCardSJungelRapaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 4) {
        chCardSNokkenBlowaudio.play();
        const challenge4 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSNokkenBlow.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});             // FERDIG 
        Actions.Click(cbSwampChallengeFront, () => {
            chCardSNokkenBlowaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 5) {
        chCardSSlobbieSnakeTreeaudio.play();
        const challenge5 = new Blocks.Image("Bilder/KortKlare/Swamp/Challenge/chCardSSlobbieSnakeTree.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});             // FERDIG 
        Actions.Click(startbuttonCard, () => {
            chCardSSlobbieSnakeTreeaudio.pause();
            GaaTil(chCardSSlobbieSnakeTree);
        })
        Actions.Click(cbSwampChallengeFront, () => {
            chCardSSlobbieSnakeTreeaudio.pause();
            GaaTil(sceneSwamp4);
        })
    }
}

// HUSK Å LEGGE INN INNHOLD I OPPGAVENE

// QUESTIONS

function sceneSwampQuestionFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        qCardSCountCrocoaudio.play();
        const question0 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSCountCroco.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 //FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardSCountCrocoaudio.pause();
            GaaTil(qCardSCountCrocoQuestion);
        })
        Actions.Click(cbSwampChallengeFront, () => {
            qCardSCountCrocoaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 1) {
        qCardSFossegrimenLureaudio.play();
        const question1 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSFossegrimenLure.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 //FERDIG
        Actions.Click(startbuttonCard, () => {
            qCardSFossegrimenLureaudio.pause();
            GaaTil(qCardSFossegrimenLureQuestion);
        })
        Actions.Click(cbSwampChallengeFront, () => {
            qCardSFossegrimenLureaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 2) {
        qCardSFrogEatSlobbieaudio.play();
        const question2 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSFrogEatSlobbie.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 //FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardSFrogEatSlobbieaudio.pause();
            GaaTil(qCardSFrogEatSlobbieQuestion);
        }) 
        Actions.Click(cbSwampChallengeFront, () => {
            qCardSFrogEatSlobbieaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        qCardSFrogRiddleaudio.play();
        const question3 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSFrogRiddle.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG - 
        Actions.Click(startbuttonCard, () => {
            qCardSFrogRiddleaudio.pause();
            GaaTil(qCardSFrogRiddleQuestion);
        })
        Actions.Click(cbSwampChallengeFront, () => {
            qCardSFrogRiddleaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 4) {
        qCardSHippoBubbaaudio.play();
        const question4 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSHippoBubba.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard, () => {
            qCardSHippoBubbaaudio.pause();
            GaaTil(qCardSHippoBubbaQuestion)
        })
        Actions.Click(cbSwampChallengeFront, () => {
            qCardSHippoBubbaaudio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 5) {
        qCardSHowManyFrogsaudio.play();
        const question5 = new Blocks.Image("Bilder/KortKlare/Swamp/Question/qCardSHowManyFrogs.png", {x:30,y:10,width:1020,height:700});
        const cbSwampChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCard = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:10,width:150,height:150});                 // FERDIG 
        Actions.Click(startbuttonCard , () => {
            qCardSHowManyFrogsaudio.pause();
            GaaTil(qCardSHowManyFrogsQuestion);
        })
        Actions.Click(cbSwampChallengeFront, () => {
            qCardSHowManyFrogsaudio.pause();
            GaaTil(sceneSwamp4);
        })
    }

}

// HUSK Å LEGGGE INN INNHOLD I SPØRSMÅLENE

//CHANCES

function sceneSwampChanceFront () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        chanceCardS1audio.play();
        const chance0 = new Blocks.Image("Bilder/KortKlare/Swamp/Chance/chanceCardS1.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});                // FERDIG 
        Actions.Click(cbSwampChanceFront, () => {
            chanceCardS1audio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 1) {
        chanceCardS2audio.play();
        const chance1 = new Blocks.Image("Bilder/KortKlare/Swamp/Chance/chanceCardS2.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});                // FERDIG 
        Actions.Click(cbSwampChanceFront, () => {
            chanceCardS2audio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 2) {
        chanceCardF4audio.play();
        const chance2 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF4.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});                // FERDIG - 
        Actions.Click(cbSwampChanceFront, () => {
            chanceCardF4audio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        chanceCardF5audio.play();
        const chance3 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF5.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});                // FERDIG - 
        Actions.Click(cbSwampChanceFront, () => {
            chanceCardF5audio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 4) {
        chanceCardF6audio.play();
        const chance4 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF6.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});                // FERDIG - 
        Actions.Click(cbSwampChanceFront, () => {
            chanceCardF6audio.pause();
            GaaTil(sceneVillageX);
        })
    } else if (tall === 5) {
        chanceCardS3audio.play();
        const chance5 = new Blocks.Image("Bilder/KortKlare/Swamp/Chance/chanceCardS3.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbSwampChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:35,y:565,width:150,height:150});                // FERDIG - 
        Actions.Click(cbSwampChanceFront, () => {
            chanceCardS3audio.pause();
            GaaTil(sceneSwamp4);
        })
    }
}

// HUSK Å DOBBELTSJEKK AT ALT INNHOLD ER RIKTIG

// FORESTMAP

function sceneForest1 () {
    sceneForest1audio.play();
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
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
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
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
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
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
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const chanceback2 = new Blocks.Image("Bilder/Kort/chanceback.png", {x:730,y:175,width:300,height:450});
    const questionback2 = new Blocks.Image("Bilder/Kort/questionback.png", {x:390,y:175,width:300,height:450});
    const challengeback2 = new Blocks.Image("Bilder/Kort/challengeback.png", {x:50,y:175,width:300,height:450});
    const quickhopbuttonS = new Blocks.Image("Bilder/Knapper/quickhopbuttonS.png", {x:900,y:10,width:150,height:150});
    const quickhopbuttonM = new Blocks.Image("Bilder/Knapper/quickhopbuttonM.png", {x:730,y:10,width:150,height:150});
    const quickhopbuttonE = new Blocks.Image("Bilder/Knapper/quickhopbuttonE.png", {x:470,y:10,width:150,height:150});
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
    Actions.Click(quickhopbuttonE, () => {
    GaaTil(sceneOutsideMountain);
    })
    Actions.Click(cbForest4, () => {
        GaaTil(scene13);
    })
}

// FORESTMAP - CARDS - FRONTS

// CHALLENGES
function sceneForestChallengeFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        chCardFBiggestTrollaudio.play();
        const challenge0 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFBiggestTroll.png", {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                   // FERDIG  
        Actions.Click(startbuttonCards, () => {
            chCardFBiggestTrollaudio.pause();
            GaaTil(chCardFBiggestTrollChallenge);
        })
        Actions.Click(cbForestChallengeFront, () => {
            chCardFBiggestTrollaudio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 1) {
        chCardFBearSleepTextaudio.play();
        const challenge1 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFBearSleep.png", {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                // FERDIG
        Actions.Click(startbuttonCards, () => {
            chCardFBearSleepTextaudio.pause();
            GaaTil(chCardFBearSleepChallenge);
        })
        Actions.Click(cbForestChallengeFront, () => {
            chCardFBearSleepTextaudio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 2) {
        chCardFBukkeneBruseaudio.play();
        const challenge2 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFBukkeneBruse.png",  {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});            // FERDIG 
        Actions.Click(cbForestChallengeFront, () => {
            chCardFBukkeneBruseaudio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 3) {
        chCardFRRHFruitBasketaudio.play();
        const challenge3 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFRRHFruitBasket.png",{x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                // FERDIG 
        Actions.Click(startbuttonCards, () => {
            chCardFRRHFruitBasketaudio.pause();
            GaaTil(chCardFRRHFruitBasketChallenge);
        })
        Actions.Click(cbForestChallengeFront, () => {
            chCardFRRHFruitBasketaudio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 4) {
        chCardFSinnataggFacesaudio.play();
        const challenge4 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFSinnataggFaces.png", {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                // FERDIG 
        Actions.Click(startbuttonCards, () => {
            chCardFSinnataggFacesaudio.pause();
            GaaTil(chCardFSinnataggFacesChallenge);
        })
        Actions.Click(cbForestChallengeFront, () => {
            chCardFSinnataggFacesaudio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 5) {
        chCardFTrollChildrenBedaudio.play();
        const challenge5 = new Blocks.Image("Bilder/KortKlare/Forest/Challenge/chCardFTrollChildrenBed.png", {x:30,y:10,width:1020,height:700});
        const cbForestChallengeFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                // FERDIG 
        Actions.Click(startbuttonCards, () => {
            chCardFTrollChildrenBedaudio.pause();
            GaaTil(chCardFTrollChildrenBedChallenge)
        })
        Actions.Click(cbForestChallengeFront, () => {
            chCardFTrollChildrenBedaudio.pause();
            GaaTil(sceneForest4);
        })
    }
}

    //HUSK Å LEGGE TIL SELVE OPPGAVENE

// QUESTIONS
function sceneForestQuestionFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 4);
    if (tall === 0) {
        qCardFCamoTrollTextaudio.play();
        const question0 = new Blocks.Image("Bilder/KortKlare/Forest/Question/qCardFCamoTroll.png", {x:30,y:10,width:1020,height:700});
        const cbForestQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                // FERDIG
        Actions.Click(startbuttonCards, () => {
            qCardFCamoTrollTextaudio.pause();
            GaaTil(qCardFCamoTrollQuestion1);
        })
        Actions.Click(cbForestQuestionFront, () => {
            GaaTil(sceneForest4);
        })
    } else if (tall === 1){
        qCardFMikkelRevLetteraudio.play();
        const question1 = new Blocks.Image("Bilder/KortKlare/Forest/Question/qCardFMikkelRevLetter.png", {x:30,y:10,width:1020,height:700});
        const cbForestQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                // FERDIG 
        Actions.Click(startbuttonCards, () => {
            qCardFMikkelRevLetteraudio.pause();
            GaaTil(qCardFMikkelRevLetterQuestion);
        })
        Actions.Click(cbForestQuestionFront, () => {
            qCardFMikkelRevLetteraudio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 2) {
        qCardFTrollStealPrincessaudio.play();
        const question2 = new Blocks.Image("Bilder/KortKlare/Forest/Question/qCardFTrollStealPrincess.png",  {x:30,y:10,width:1020,height:700});
        const cbForestQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                // FERDIG 
        Actions.Click(startbuttonCards, () => {
            qCardFTrollStealPrincessaudio.pause();
            GaaTil(qCardFTrollStealPrincessQuestion);
        })
        Actions.Click(cbForestQuestionFront, () => {
            qCardFTrollStealPrincessaudio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 3) {
        qCardFWitchWartsaudio.play();
        const question3 = new Blocks.Image("Bilder/KortKlare/Forest/Question/qCardFWitchWarts.png",{x:30,y:10,width:1020,height:700});
        const cbForestQuestionFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});
        const startbuttonCards = new Blocks.Image("Bilder/Knapper/startbuttonCards.png", {x:475,y:20,width:150,height:150});                // FERDIG 
        Actions.Click(startbuttonCards, () => {
            qCardFWitchWartsaudio.pause();
            GaaTil(qCardFWitchWartsQuestion);
        })
        Actions.Click(cbForestQuestionFront, () => {
            qCardFWitchWartsaudio.pause();
            GaaTil(sceneForest4);
        })
    }
    
}
// CHANCES
function sceneForestChanceFront () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    let tall = Math.floor(Math.random() * 6);
    if (tall === 0) {
        chanceCardF1audio.play();
        const chance0 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF1.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});               
        Actions.Click(cbForestChanceFront, () => {
            chanceCardF1audio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 1){
        chanceCardF2audio.play();
        const chance1 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF2.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const ForestChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonF.png", {x:675,y:25,width:150,height:150});
        const SwampChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonS.png", {x:475,y:25,width:150,height:150});
        const MountainChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonM.png", {x:275,y:25,width:150,height:150});              
        Actions.Click(ForestChanceFront, () => {
            chanceCardF2audio.pause();
            GaaTil(sceneForest4);
        })
        Actions.Click(SwampChanceFront, () => {
            chanceCardF2audio.pause();
            GaaTil(sceneSwamp4);
        })
        Actions.Click(MountainChanceFront, () => {
            chanceCardF2audio.pause();
            GaaTil(sceneMountain4);
        })
    } else if (tall === 2) {
        chanceCardF3audio.play();
        const chance2 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF3.png",  {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});               
        Actions.Click(cbForestChanceFront, () => {
            chanceCardF3audio.pause();
            GaaTil(sceneSwamp4);
        })
    } else if (tall === 3) {
        chanceCardF4audio.play();
        const chance3 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF4.png",{x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});               
        Actions.Click(cbForestChanceFront, () => {
            chanceCardF4audio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 4) {
        chanceCardF5audio.play();
        const chance4 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF5.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});               
        Actions.Click(cbForestChanceFront, () => {
            chanceCardF5audio.pause();
            GaaTil(sceneForest4);
        })
    } else if (tall === 5) {
        chanceCardF6audio.play();
        const chance5 = new Blocks.Image("Bilder/KortKlare/Forest/Chance/chanceCardF6.png", {x:30,y:10,width:1020,height:700});
        const slobbiechance = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdownopenmouth.png"], {x:700,y:450,width:450,height:550, loop:true, auto:true});
        const cbForestChanceFront = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:50,y:550,width:150,height:150});               
        Actions.Click(cbForestChanceFront, () => {
            chanceCardF6audio.pause();
            GaaTil(sceneVillageX);
        })
    }
}


// MOUNTAINMAP - CARDMAPS

//CHALLENGES
function chCardMBuildBricksChallenge () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const mountain1 = new Blocks.Image("Bilder/Oppgaver/mountain.png", {x:-8,y:266,width:400,height:550});
    const brick1 = new Blocks.Image("Bilder/Oppgaver/brick.png", {x:800,y:660,width:150,height:150});
    const brick2 = new Blocks.Image("Bilder/Oppgaver/brick.png", {x:400,y:660,width:150,height:150});
    const brick3 = new Blocks.Image("Bilder/Oppgaver/brick.png", {x:603,y:659,width:150,height:150});
    const brick4 = new Blocks.Image("Bilder/Oppgaver/brick.png", {x:800,y:511,width:150,height:150});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});
    Actions.Drag(brick1);
    Actions.Drag(brick2);
    Actions.Drag(brick3);
    Actions.Drag(brick4);
    Actions.Drag(mountain1);
    Actions.Click(continuebutton, () => {
        GaaTil(sceneMountain4);
    })
}

function chCardMBuildBridgeChallenge () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const challengemap = new Blocks.Image("Bilder/Oppgaver/buildBridgeBackground.png", {x:50,y:100,width:960,height:700});
    const shadowbear = new Blocks.Image("Bilder/Karakterer/shadowbear.png", {x:750,y:500,width:200,height:250});
    const plank1 = new Blocks.Image("Bilder/Oppgaver/plank.png", {x:76,y:150,width:200,height:200})
    const plank2 = new Blocks.Image("Bilder/Oppgaver/plank.png", {x:76,y:150,width:200,height:200})
    const plank3 = new Blocks.Image("Bilder/Oppgaver/plank.png", {x:76,y:150,width:200,height:200})
    const plank4 = new Blocks.Image("Bilder/Oppgaver/plank.png", {x:76,y:150,width:200,height:200})
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});
    Actions.Drag(plank1);
    Actions.Drag(plank2);
    Actions.Drag(plank3);
    Actions.Drag(plank4);
    Actions.Click(continuebutton, () => {
        GaaTil(sceneMountain4);
    })
}

function chCardMCampfireChallenge1 () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const wood1 = new Blocks.Image("Bilder/Oppgaver/wood1.png", {x:77,y:472,width:150,height:100});
    const wood2 = new Blocks.Image("Bilder/Oppgaver/wood2.png", {x:858,y:430,width:150,height:100});
    const stick1 = new Blocks.Image("Bilder/Oppgaver/stick.png", {x:71,y:12,width:250,height:150});
    const wood3 = new Blocks.Image("Bilder/Oppgaver/wood1.png", {x:785,y:648,width:150,height:100});
    const wood4 = new Blocks.Image("Bilder/Oppgaver/wood2.png", {x:440,y:699,width:150,height:100});
    const stick2 = new Blocks.Image("Bilder/Oppgaver/stick.png", {x:755,y:186,width:250,height:150});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});
    Actions.Drag(wood1);
    Actions.Drag(wood2);
    Actions.Drag(stick1);
    Actions.Drag(wood3);
    Actions.Drag(wood4);
    Actions.Drag(stick2);
    Actions.Click(continuebutton, () => {
        GaaTil(chCardMCampfireChallenge2);
    })
}

function chCardMCampfireChallenge2 () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const wood1 = new Blocks.Image("Bilder/Oppgaver/wood1.png", {x:526,y:609,width:150,height:100});
    const stick1 = new Blocks.Image("Bilder/Oppgaver/stick.png", {x:419,y:558,width:250,height:150});
    const flame = new Blocks.Image("Bilder/Oppgaver/flame.png", {x:450,y:420,width:200,height:250});
    const wood2 = new Blocks.Image("Bilder/Oppgaver/wood2.png", {x:443,y:616,width:150,height:100});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});
    Actions.Click(continuebutton, () => {
        GaaTil(sceneMountain4);
    })
}

function chCardMHighestMountainChallenge () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const mountain1 = new Blocks.Image("Bilder/Oppgaver/mountain.png", {x:-8,y:415,width:300,height:400});
    const mountain2 = new Blocks.Image("Bilder/Oppgaver/mountain.png", {x:320,y:520,width:150,height:300});
    const mountain3 = new Blocks.Image("Bilder/Oppgaver/mountain.png", {x:500,y:370,width:200,height:450});
    const mountain4 = new Blocks.Image("Bilder/Oppgaver/mountain.png", {x:700,y:435,width:400,height:380});
    Actions.Click(mountain3, () => {
        GaaTil(sceneMountain4);
    })
}

// QUESTIONS

function qCardMAskeladdenCastleQuestion () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const soriamoriaroad = new Blocks.Image("Bilder/Oppgaver/soriamoriaroad.png", {x:250,y:-8,width:600,height:700});
    const soriamoria = new Blocks.Image("Bilder/Oppgaver/soriamoria.png", {x:700,y:20,width:350,height:350});
    const swamp = new Blocks.Image("Bilder/Oppgaver/swamp.png", {x:20,y:20,width:350,height:350});
    Actions.Click(soriamoria, () => {
        GaaTil(sceneMountain4);
    })
}

function qCardMFogCatHideQuestion () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const fogcat1 = new Blocks.Image("Bilder/Karakterer/fogcat.png", {x:20,y:650,width:300,height:300});
    const fogcat2 = new Blocks.Image("Bilder/Karakterer/fogcat.png", {x:700,y:700,width:150,height:150});
    const fogcat3 = new Blocks.Image("Bilder/Karakterer/fogcat.png", {x:800,y:370,width:110,height:140});
    const fogcat4 = new Blocks.Image("Bilder/Karakterer/fogcat.png", {x:520,y:510,width:80,height:80});
    const rock1 = new Blocks.Image("Bilder/Oppgaver/rock3.png", {x:800,y:400,width:250,height:150});
    const answercard1 = new Blocks.Image("Bilder/Oppgaver/hand5finger.png", {x:75,y:80,width:250,height:200});
    const answercard2 = new Blocks.Image("Bilder/Oppgaver/hand2finger.png", {x:755,y:80,width:250,height:200});
    const answercard3 = new Blocks.Image("Bilder/Oppgaver/hand4finger.png", {x:410,y:80,width:250,height:200});
    Actions.Click(answercard3, () => {
        GaaTil(sceneMountain4);
    })
}

function qCardMFogCatPrintsQuestion () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const fogCatsPrintsPicture = new Blocks.Image("Bilder/Oppgaver/fogCatPrintsPicture.png", {x:150,y:-8,width:800,height:500});
    const fogCatsWrong1 = new Blocks.Image("Bilder/Oppgaver/qMFogCatPrintsWrong1.png", {x:100,y:550,width:200,height:200});
    const fogCatsWrong2 = new Blocks.Image("Bilder/Oppgaver/qMFogCatPrintsWrong2.png", {x:800,y:550,width:200,height:200});
    const fogCatsCorrect = new Blocks.Image("Bilder/Oppgaver/qMFogCatPrintsCorrect.png", {x:450,y:550,width:200,height:200});
    Actions.Click(fogCatsCorrect, () => {
        GaaTil(sceneMountain4);
    })
}

function qCardMSlobbieHideQuestion () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const slobbie = new Blocks.Image("Bilder/Karakterer/slobbieopenmoutharmup.png", {x:490,y:310,width:150,height:200});
    const rock1 = new Blocks.Image("Bilder/Oppgaver/rock1.png", {x:200,y:680,width:250,height:150});
    const rock2 = new Blocks.Image("Bilder/Oppgaver/rock2.png", {x:800,y:560,width:200,height:150});
    const rock3 = new Blocks.Image("Bilder/Oppgaver/rock3.png", {x:-8,y:400,width:100,height:100});
    const rock4 = new Blocks.Image("Bilder/Oppgaver/rock4.png", {x:520,y:400,width:100,height:100});
    Actions.Click(slobbie, () => {
        GaaTil(sceneMountain4);
    })
}

function qCardMSteepHillQuestion () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const steephillcorrect = new Blocks.Image("Bilder/Oppgaver/steephillcorrect.png", {x:50,y:150,width:400,height:300});
    const steephillwrong1 = new Blocks.Image("Bilder/Oppgaver/steephillwrong1.png", {x:450,y:450,width:400,height:300});
    const steephillwrong2 = new Blocks.Image("Bilder/Oppgaver/steephillwrong2.png", {x:600,y:100,width:400,height:300});
    Actions.Click(steephillcorrect, () => {
        GaaTil(sceneMountain4);
    })
}

function qCardMWhoDoesntBelongQuestion () {
    const mountainmap = new Blocks.Image("Bilder/Bakgrunner/mountainmap.jpg", {x:-8,y:-8,width:1088,height:818});
    const correctcard = new Blocks.Image("Bilder/Oppgaver/huldrasadCard.png", {x:600,y:100,width:400,height:300});
    const wrongcard1 = new Blocks.Image("Bilder/Oppgaver/shadowbearcard.png", {x:50,y:150,width:400,height:300});
    const wrongcard2 = new Blocks.Image("Bilder/Oppgaver/tinyelfcard.png", {x:450,y:450,width:400,height:300});
    Actions.Click(correctcard, () => {
        GaaTil(sceneMountain4);
    })
}

// CHANCES

function chanceCardMTrollScareMap () {
    const background = new Blocks.Image("Bilder/Bakgrunner/rockymountain.png", {x:-8,y:-8,width:1088,height:818});
    const hidingtroll = new Blocks.Image("Bilder/Karakterer/lonelytrollhappy.png", {x:450,y:430,width:70,height:100});
    const rock = new Blocks.Image("Bilder/Oppgaver/rock3.png", {x:420,y:480,width:150,height:100});
    Actions.Click(hidingtroll, () => {
        GaaTil(sceneMountain4);
    })
}

// FORESTMAP - CARDMAPS 

// CHALLENGES
function chCardFBearSleepChallenge () {
    chCardBearSleepSong.play();
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const bearSleep = new Blocks.Image("Bilder/Karakterer/bearSleep.png", {x:750,y:600,width:200,height:150});
    const slobbieSneaky = new Blocks.Image("Bilder/Karakterer/slobbiearmdown.png", {x:-100,y:500,width:300,height:400});
    const backbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:20,width:150,height:150});                // GÅ TILBAKE TIL DEN
    Actions.Tween(slobbieSneaky, 1.2, 0);
    Actions.Click(backbutton, () => {
        chCardBearSleepSong.pause();
        GaaTil(sceneForest4);
    })
}

function chCardFBiggestTrollChallenge () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const trollwrong1 = new Blocks.Image("Bilder/Karakterer/trollfacefront.png", {x:780,y:530,width:50,height:50});
    const trollwrong2 = new Blocks.Image("Bilder/Karakterer/trollfacefront.png", {x:30,y:420,width:200,height:200});
    const trollwrong3 = new Blocks.Image("Bilder/Karakterer/trollfacefront.png", {x:400,y:540,width:100,height:100});
    const trollwrong4 = new Blocks.Image("Bilder/Karakterer/trollfacefront.png", {x:700,y:660,width:75,height:75});
    const trollwrong5 = new Blocks.Image("Bilder/Karakterer/trollfacefront.png", {x:950,y:460,width:120,height:120});
    const trollcorrect = new Blocks.Image("Bilder/Karakterer/trollfacefront.png", {x:30,y:420,width:200,height:200});
    Actions.Click(trollcorrect, () => {
        GaaTil(sceneForest4);
    })
}

function chCardFRRHFruitBasketChallenge () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const fruitbasket = new Blocks.Image("Bilder/Oppgaver/fruitbasket.png", {x:370,y:525,width:75,height:75});
    const rock1 = new Blocks.Image("Bilder/Oppgaver/rock1.png", {x:400,y:500,width:150,height:150});
    const rock2 = new Blocks.Image("Bilder/Oppgaver/rock3.png", {x:900,y:450,width:150,height:120});
    Actions.Click(fruitbasket, () => {
        GaaTil(sceneForest4)
    })
}

function chCardFSinnataggFacesChallenge () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const sinnataggmad = new Blocks.Image("Bilder/Karakterer/sinnataggangry.png", {x:360,y:200,width:400,height:400});
    Actions.Click(sinnataggmad, () => {
        GaaTil(chCardFSinnataggFacesChallenge2);
    })
}

function chCardFSinnataggFacesChallenge2 () {
    sinnataggLaughaudio.play();
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const sinnatagghappy = new Blocks.Image("Bilder/Karakterer/sinnatagghappy.png", {x:360,y:200,width:400,height:400})
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});                
    Actions.Click(continuebutton, () => {
        sinnataggLaughaudio.pause();
        GaaTil(sceneForest4);
    })
}

function chCardFTrollChildrenBedChallenge () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const bed = new Blocks.Image("Bilder/Oppgaver/bed.png", {x:-60,y:100,width:1200,height:700});   
    const troll1 = new Blocks.Image("Bilder/Karakterer/trollchild.png", {x:27,y:567,width:150,height:150});
    const troll2 = new Blocks.Image("Bilder/Karakterer/trollchild.png", {x:908,y:559,width:150,height:150});
    const troll3 = new Blocks.Image("Bilder/Karakterer/trollchild.png", {x:913,y:131,width:150,height:150});
    const troll4 = new Blocks.Image("Bilder/Karakterer/trollchild.png", {x:33,y:231,width:150,height:150});
    const troll5 = new Blocks.Image("Bilder/Karakterer/trollchild.png", {x:178,y:18,width:150,height:150});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});
    Actions.Click(continuebutton, () => {
        GaaTil(sceneForest4);
    })
    Actions.Drag(troll1);
    Actions.Drag(troll2);
    Actions.Drag(troll3);
    Actions.Drag(troll4);
    Actions.Drag(troll5);

}

// QUESTIONS
function qCardFCamoTrollQuestion1 () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
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
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
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

function qCardFMikkelRevLetterQuestion () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const wronganswer1 = new Blocks.Image("Bilder/Oppgaver/mikkelrevwrong1.png", {x:50,y:150,width:400,height:300});
    const wronganswer2 = new Blocks.Image("Bilder/Oppgaver/mikkelrevwrong2.png", {x:450,y:450,width:400,height:300});
    const correctanswer = new Blocks.Image("Bilder/Oppgaver/mikkelrevcorrect.png", {x:600,y:100,width:400,height:300});
    Actions.Click(correctanswer, () => {
        GaaTil(sceneForest4);
    })
}

function qCardFTrollStealPrincessQuestion () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const wronganswer2 = new Blocks.Image("Bilder/Oppgaver/trollstealprincesswrong1.png", {x:450,y:450,width:400,height:300});
    const wronganswer1 = new Blocks.Image("Bilder/Oppgaver/trollstealprincesswrong2.png", {x:600,y:100,width:400,height:300});
    const correctanswer = new Blocks.Image("Bilder/Oppgaver/trollstealprincesscorrect.png", {x:50,y:150,width:400,height:300});
    Actions.Click(correctanswer, () => {
        GaaTil(sceneForest4);
    })
}

function qCardFWitchWartsQuestion () {
    const forestmap = new Blocks.Image("Bilder/Bakgrunner/trollskogstienmap.png", {x:-8,y:-8,width:1088,height:818});
    const witch = new Blocks.Image("Bilder/Karakterer/witchface.png", {x:350,y:10,width:400,height:450});
    const wronganswer1 = new Blocks.Image("Bilder/Oppgaver/witchwartswrong1.png", {x:50,y:550,width:400,height:250});
    const wronganswer2 = new Blocks.Image("Bilder/Oppgaver/witchwartswrong2.png", {x:370,y:550,width:400,height:250});
    const correctanswer = new Blocks.Image("Bilder/Oppgaver/witchwartscorrect.png", {x:680,y:550,width:400,height:250});
    Actions.Click(correctanswer, () => {
        GaaTil(sceneForest4);
    })
}

// SWAMPMAP - CARDMAPS 

// CHALLENGES
function chCardSHuldraDanceChallenge () {
    chCardSHuldraDanceSong.play();
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const HuldraSad = new Blocks.Image("Bilder/Karakterer/huldrasad.png", {x:350,y:430,width:450,height:450}); 
    const exitbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});        
    Actions.Click(exitbutton, () => {
        chCardSHuldraDanceSong.pause();
        GaaTil(chCardSHuldraDanceChallenge1);
    })
}

function chCardSHuldraDanceChallenge1 () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const HuldraHappy = new Blocks.Image("Bilder/Karakterer/huldrahappy.png", {x:350,y:430,width:450,height:450});
    const exitbutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});
    Actions.Click(exitbutton, () => {
        GaaTil(sceneSwamp4);
    })
   
}

function chCardSEarwaxCandleChallenge () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const earwax1 = new Blocks.Image("Bilder/Oppgaver/earwax.png", {x:100,y:100,width:200,height:200});
    const earwax2 = new Blocks.Image("Bilder/Oppgaver/earwax.png", {x:500,y:200,width:200,height:200});
    const earwax3 = new Blocks.Image("Bilder/Oppgaver/earwax.png", {x:300,y:500,width:200,height:200});
    const earwax4 = new Blocks.Image("Bilder/Oppgaver/earwax.png", {x:800,y:600,width:200,height:200});
    const candle = new Blocks.Image("Bilder/Oppgaver/candleearwax.png", {x:850,y:100,width:150,height:300});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});
    Actions.Click(continuebutton, () => {
        GaaTil(sceneSwamp4);
    })
    Actions.Drag(earwax1);
    Actions.Drag(earwax2);
    Actions.Drag(earwax3);
    Actions.Drag(earwax4);
    Actions.Drag(candle);
}

function chCardSSlobbieSnakeTree () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const SlobbieTree = new Blocks.Image("Bilder/Oppgaver/slobbiesnaketree.png", {x:-8,y:-8,width:500,height:700});
    const brick1 = new Blocks.Image("Bilder/Oppgaver/brick.png", {x:390,y:706,width:100,height:100});
    const brick2 = new Blocks.Image("Bilder/Oppgaver/brick.png", {x:634,y:712,width:100,height:100});
    const brick3 = new Blocks.Image("Bilder/Oppgaver/brick.png", {x:848,y:710,width:100,height:100});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:475,y:10,width:150,height:150});
    Actions.Click(continuebutton, () => {
        GaaTil(sceneSwamp4);
    })
    Actions.Drag(brick1);
    Actions.Drag(brick2);
    Actions.Drag(brick3);
}

// QUESTIONS

function qCardSCountCrocoQuestion () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const crocoeye1 = new Blocks.Image("Bilder/Karakterer/crocoeyeclosed.png", {x:200,y:430,width:75,height:75});
    const crocoeye2 = new Blocks.Image("Bilder/Karakterer/crocoeyeopen.png", {x:530,y:480,width:80,height:80});
    const crocoeye3 = new Blocks.Image("Bilder/Karakterer/crocoeyeopen.png", {x:440,y:400,width:70,height:70    });
    const crocoeye4 = new Blocks.Image("Bilder/Karakterer/crocoeyeclosed.png", {x:750,y:600,width:100,height:100});
    const crocoeye5 = new Blocks.Image("Bilder/Karakterer/crocoeyeopen.png", {x:470,y:700,width:130,height:130});
    const wronganswer1 = new Blocks.Image("Bilder/Oppgaver/hand2finger.png", {x:50,y:50,width:300,height:300});
    const wronganswer2 = new Blocks.Image("Bilder/Oppgaver/hand4finger.png", {x:400,y:50,width:300,height:300});
    const correctanswer = new Blocks.Image("Bilder/Oppgaver/hand5finger.png", {x:740,y:50,width:300,height:300});
    Actions.Click(correctanswer, () => {
        GaaTil(sceneSwamp4);
    })
}

function qCardSFossegrimenLureQuestion () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const correctanswer = new Blocks.Image("Bilder/Oppgaver/fossegrimencorrect.png", {x:50,y:150,width:400,height:300});
    const wronganswer1 = new Blocks.Image("Bilder/Oppgaver/fossegrimenlurewrong1.png", {x:450,y:450,width:400,height:300});
    const wronganswer2 = new Blocks.Image("Bilder/Oppgaver/fossegrimenlurewrong2.png", {x:600,y:100,width:400,height:300});
    Actions.Click(correctanswer, () => {
        GaaTil(sceneSwamp4);
    })
}

function qCardSFrogEatSlobbieQuestion () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const frogcorrect = new Blocks.Image("Bilder/Oppgaver/frogeatslobbie.png", {x:780,y:270,width:75,height:75});
    const frog1 = new Blocks.Image("Bilder/Karakterer/frog1.png", {x:250,y:350,width:100,height:100});
    const frog2 = new Blocks.Image("Bilder/Karakterer/frog2.png", {x:600,y:250,width:50,height:50});
    const frog3 = new Blocks.Image("Bilder/Karakterer/frog1.png", {x:880,y:420,width:175,height:175});
    const frog4 = new Blocks.Image("Bilder/Karakterer/frog2.png", {x:650,y:450,width:150,height:150});
    const frog5 = new Blocks.Image("Bilder/Karakterer/frog1.png", {x:550,y:620,width:50,height:50});
    Actions.Click(frogcorrect, () => {
        GaaTil(sceneSwamp4);
    })
}

function qCardSFrogRiddleQuestion () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const swampriddle = new Blocks.Image("Bilder/Oppgaver/froginswamp.png", {x:200,y:-8,width:700,height:500});
    const riddleanswerwrong = new Blocks.Image("Bilder/Oppgaver/froginswampwrong1.png", {x:200,y:550,width:300,height:200});
    const riddleanswercorrect = new Blocks.Image("Bilder/Oppgaver/froginswampcorrect.png", {x:600,y:550,width:300,height:200});
    Actions.Click(riddleanswercorrect, () => {
        GaaTil(sceneSwamp4);
    })
}

function qCardSHippoBubbaQuestion () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const bubbacard = new Blocks.Image("Bilder/Karakterer/hippobubba.png", {x:300,y:20,width:450,height:400});
    const wrong1 = new Blocks.Image("Bilder/Oppgaver/hippobubbawrong1.png", {x:75,y:450,width:300,height:250});
    const wrong2 = new Blocks.Image("Bilder/Oppgaver/hippobubbawrong2.png", {x:700,y:450,width:300,height:250});
    const correct = new Blocks.Image("Bilder/Oppgaver/hippobubbacorrect.png", {x:390,y:450,width:300,height:250});
    Actions.Click(correct, () => {
        GaaTil(sceneSwamp4);
    })
}

function qCardSHowManyFrogsQuestion () {
    const swampmap = new Blocks.Image("Bilder/Bakgrunner/swampmap.png", {x:-8,y:-8,width:1088,height:818});
    const frog1 = new Blocks.Image("Bilder/Karakterer/frog1.png", {x:250,y:350,width:100,height:100});
    const frog2 = new Blocks.Image("Bilder/Karakterer/frog2.png", {x:600,y:250,width:50,height:50});
    const frog3 = new Blocks.Image("Bilder/Karakterer/frog1.png", {x:880,y:420,width:175,height:175});
    const frog4 = new Blocks.Image("Bilder/Karakterer/frog2.png", {x:650,y:450,width:150,height:150});
    const frog5 = new Blocks.Image("Bilder/Karakterer/frog1.png", {x:550,y:620,width:50,height:50});
    const frog6 = new Blocks.Image("Bilder/Karakterer/frog1.png", {x:450,y:250,width:50,height:50});
    const frog7 = new Blocks.Image("Bilder/Karakterer/frog2.png", {x:750,y:610,width:150,height:150});
    const frog8 = new Blocks.Image("Bilder/Karakterer/frog1.png", {x:770,y:250,width:100,height:100});
    const wronganswer1 = new Blocks.Image("Bilder/Oppgaver/hand5finger.png", {x:420,y:10,width:250,height:225});
    const wronganswer2 = new Blocks.Image("Bilder/Oppgaver/qMFogCatPrintsWrong2.png", {x:700,y:10,width:250,height:225});
    const correctanswer = new Blocks.Image("Bilder/Oppgaver/qMFogCatPrintsWrong1.png", {x:140,y:10,width:250,height:225});
    Actions.Click(correctanswer, () => {
        GaaTil(sceneSwamp4);
    })
}




// END OF THE GAME
 
function sceneOutsideMountain () {
    sceneOutsideMountainaudio.play();
    const background = new Blocks.Image("Bilder/Bakgrunner/outsidemountain.png", {x:-22,y:-8,width:1120,height:818});
    const slobbie = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:300,y:450,width:300,height:400, loop:true, auto:true});
    const speechbubble = new Blocks.Image("Bilder/Snakkebobler/speechbubbleOutsideMountain.png", {x:330,y:320,width:400,height:300});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:45,y:550,width:150,height:150});
    const ForestChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonF.png", {x:675,y:25,width:150,height:150});
    const SwampChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonS.png", {x:475,y:25,width:150,height:150});
    const MountainChanceFront = new Blocks.Image("Bilder/Knapper/quickhopbuttonM.png", {x:275,y:25,width:150,height:150}); 
    Actions.Click(ForestChanceFront, () => {
        sceneOutsideMountainaudio.pause();
        GaaTil(sceneForest4);
    })
    Actions.Click(SwampChanceFront, () => {
        sceneOutsideMountainaudio.pause();
        GaaTil(sceneSwamp4);
    })
    Actions.Click(MountainChanceFront, () => {
        sceneOutsideMountainaudio.pause();
        GaaTil(sceneMountain4);
    })
    Actions.Click(continuebutton, () => {
        sceneOutsideMountainaudio.pause();
        GaaTil(sceneInsideMountain);
    })

}

function sceneInsideMountain () {
    sceneInsideMountainaudio.play();
    const background = new Blocks.Image("Bilder/Bakgrunner/insidemountain.png", {x:-10,y:-8,width:1090,height:818});
    const slobbie = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:450,y:620,width:150,height:200, loop:true, auto:true});
    const speechbubble = new Blocks.Image("Bilder/Snakkebobler/speechbubbleInsideMountain.png", {x:460,y:510,width:200,height:185});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:45,y:550,width:150,height:150});
    Actions.Click(continuebutton, () => {
        sceneInsideMountainaudio.pause();
        GaaTil(sceneFjellheksHome)
    })
}

function sceneFjellheksHome () {
    const background = new Blocks.Image("Bilder/Bakgrunner/fjellhekshouse.png", {x:-10,y:-8,width:1095,height:818});
    const slobbie = new Blocks.Image("Bilder/Karakterer/slobbiearmdown.png", {x:500,y:450,width:300,height:400});
    const speechbubble1 = new Blocks.Image("Bilder/Snakkebobler/speechbubbleFjellheksHomeReverse.png", {x:300,y:160,width:200,height:200});
    const speechbubble2 = new Blocks.Image("Bilder/Snakkebobler/speechbubbleFjellheksHomeSlobbie.png", {x:550,y:300,width:400,height:300});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:800,y:50,width:150,height:150});
    sceneFjellheksHomeReverseaudio.play();
    sceneFjellheksHomeReverseaudio.onended = function () {
        sceneFjellheksHomeSlobbieaudio.play();
    }
    Actions.Click(continuebutton, () => {
        sceneFjellheksHomeReverseaudio.pause();
        sceneFjellheksHomeSlobbieaudio.pause();
        GaaTil(sceneEnd);
    })
}

function sceneEnd () {
    sceneEndaudio.play();
    const slobbi = new Blocks.CellAnimation(["Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbiearmdown.png", "Bilder/Karakterer/slobbieopenmoutharmdown.png"], {x:250,y:50,width:600,height:700, loop:true, auto:true});
    Actions.Click(slobbi, () => {
        sceneEndaudio.pause();
        close();
    })
}

// SCENER "UTENFOR" SPILLET

function sceneVillageX () {
    const village1 = new Blocks.Image("Bilder/Bakgrunner/village.jpg", {x:-8,y:-8,width:1088,height:818});
    const slobbievillage1 = new Blocks.Image("Bilder/Karakterer/slobbiearmdown.png", {x:300,y:350,width:325,height:450});
    const arrowgreen = new Blocks.Image("Bilder/Knapper/arrowgreen.png", {x:450,y:440,width:400,height:230});
    Actions.Click(arrowgreen, () => {
        GaaTil(sceneVeivalgX);
    })
}

function sceneVeivalgX () {
    const veivalg2 = new Blocks.Image("Bilder/Bakgrunner/veivalg.png", {x:-8,y:-8,width:1088,height:818});
    const continuebuttonMountain = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:95,y:550,width:150,height:150});
    const continuebuttonSwamp = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:465,y:550,width:150,height:150});
    const continuebuttonForest = new Blocks.Image("Bilder/Knapper/continuebutton.png", {x:835,y:550,width:150,height:150});
    const nameplateForest = new Blocks.Image("Bilder/Bakgrunner/forestnameplate.png", {x:735,y:50,width:350,height:200});
    const nameplateSwamp = new Blocks.Image("Bilder/Bakgrunner/swampnameplate.png", {x:367,y:50,width:350,height:200});
    const nameplateMountain = new Blocks.Image("Bilder/Bakgrunner/mountainnameplate.png", {x:-8,y:50,width:350,height:200});
    Actions.Click(continuebuttonMountain, () => {
        GaaTil(sceneMountain4);
    })
    Actions.Click(continuebuttonSwamp, () => {
        GaaTil(sceneSwamp4);
    })
    Actions.Click(continuebuttonForest, () => {
        GaaTil(sceneForest4);
    })
}
