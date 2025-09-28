const bodyList = ["hornetsona/body/black.png","hornetsona/body/blue.png",
  "hornetsona/body/brown.png","hornetsona/body/cyan.png","hornetsona/body/green.png",
  "hornetsona/body/orange.png","hornetsona/body/pink.png","hornetsona/body/purple.png"];
var bodyCt = 0;

const headList = ["hornetsona/head/1.png","hornetsona/head/2.png","hornetsona/head/3.png",
"hornetsona/head/4.png","hornetsona/head/5.png","hornetsona/head/6.png","hornetsona/head/7.png",
"hornetsona/head/8.png","hornetsona/head/9.png","hornetsona/head/10.png","hornetsona/head/11.png",
"hornetsona/head/12.png"];
var headCt = 0;

const lEyeList = [["hornetsona/eyes/hornetEyes/left/black.png","hornetsona/eyes/hornetEyes/left/red.png",
  "hornetsona/eyes/hornetEyes/left/yellow.png","hornetsona/eyes/hornetEyes/left/white.png"],
  ["hornetsona/eyes/catEyes/left/black.png","hornetsona/eyes/catEyes/left/red.png",
  "hornetsona/eyes/catEyes/left/yellow.png","hornetsona/eyes/catEyes/left/white.png"],
  ["hornetsona/eyes/roundEyes/left/black.png","hornetsona/eyes/roundEyes/left/red.png",
  "hornetsona/eyes/roundEyes/left/yellow.png","hornetsona/eyes/roundEyes/left/white.png"],
  ["hornetsona/eyes/jolEyes/left/black.png","hornetsona/eyes/jolEyes/left/red.png",
  "hornetsona/eyes/jolEyes/left/yellow.png","hornetsona/eyes/jolEyes/left/white.png"]];
const rEyeList = [["hornetsona/eyes/hornetEyes/right/black.png","hornetsona/eyes/hornetEyes/right/red.png",
  "hornetsona/eyes/hornetEyes/right/yellow.png","hornetsona/eyes/hornetEyes/right/white.png"],
  ["hornetsona/eyes/catEyes/right/black.png","hornetsona/eyes/catEyes/right/red.png",
  "hornetsona/eyes/catEyes/right/yellow.png","hornetsona/eyes/catEyes/right/white.png"],
  ["hornetsona/eyes/roundEyes/right/black.png","hornetsona/eyes/roundEyes/right/red.png",
  "hornetsona/eyes/roundEyes/right/yellow.png","hornetsona/eyes/roundEyes/right/white.png"],
  ["hornetsona/eyes/jolEyes/right/black.png","hornetsona/eyes/jolEyes/right/red.png",
  "hornetsona/eyes/jolEyes/right/yellow.png","hornetsona/eyes/jolEyes/right/white.png"]];
var eyeCt = -1;
var lColCt = 0;
var rColCt = 0;

const weaponList = ["hornetsona/weapon/bellstaff1.png","hornetsona/weapon/bellstaff2.png",
  "hornetsona/weapon/drneedle.png","hornetsona/weapon/upleftneedle.png","hornetsona/weapon/needolin.png"];
var weaponCt = -1;

const clothesList = [["hornetsona/clothes/hornetCloak/red.png","hornetsona/clothes/hornetCloak/blue.png",
"hornetsona/clothes/hornetCloak/cyan.png","hornetsona/clothes/hornetCloak/purple.png",
"hornetsona/clothes/hornetCloak/green.png","hornetsona/clothes/hornetCloak/orange.png"],
["hornetsona/clothes/hollowCloak/grey.png","hornetsona/clothes/hollowCloak/purple.png",
"hornetsona/clothes/hollowCloak/blue.png","hornetsona/clothes/hollowCloak/cyan.png",
"hornetsona/clothes/hollowCloak/green.png","hornetsona/clothes/hollowCloak/yellow.png",
"hornetsona/clothes/hollowCloak/orange.png","hornetsona/clothes/hollowCloak/red.png"],
["hornetsona/clothes/bellDress/gold.png","hornetsona/clothes/bellDress/silver.png"]];
var clothesCt = -1;
var cColCt = -1;

const hornet = {
  body: "hornetsona/body/black.png",
  head: "hornetsona/head/1.png",
  leftEye: "hornetsona/eyes/hornetEyes/left/black.png",
  rightEye: "hornetsona/eyes/hornetEyes/right/black.png",
  weapon: "hornetsona/blank.png",
  clothes: "hornetsona/blank.png",
};

function itemPicker(stuff) {
  switch (stuff) {
  case bodyList:
    bodyCt++;
    if (bodyCt == bodyList.length){
      bodyCt = 0;
    }
    hornet.body = bodyList[bodyCt];
    console.log(hornet.body)
    return;
  case headList:
    headCt++;
    if (headCt == headList.length){
      headCt = -1;
      hornet.head = "hornetsona/blank.png";
      return;
    }
    hornet.head = headList[headCt];
    return;
  case lEyeList:
    eyeCt++;
    if (eyeCt == lEyeList.length){ 
      eyeCt = -1;
      lColCt = 0;
      rColCt = 0;
      hornet.leftEye = "hornetsona/blank.png";
      hornet.rightEye = "hornetsona/blank.png";
      return;
    }
    hornet.leftEye = lEyeList[eyeCt][lColCt];
    hornet.rightEye = rEyeList[eyeCt][rColCt];
    return;
  case weaponList:
    weaponCt++;
    if (weaponCt == weaponList.length){ 
      weaponCt = -1;
      hornet.weapon = "hornetsona/blank.png";
      return;
    }
    hornet.weapon = weaponList[weaponCt];
    return;
  case clothesList:
    cColCt = 0;
    clothesCt++;
    if (clothesCt == clothesList.length){
      clothesCt = -1;
      hornet.clothes = "hornetsona/blank.png";
      return;
    }
    hornet.clothes = clothesList[clothesCt][cColCt];
    return;
  }
}

function colorChange(ct){
  switch (ct){
  case 0:
    if (clothesCt == -1) {
      console.log("there are no clothes yet.");
      return;
    }
    cColCt++;
    if (cColCt == clothesList[clothesCt].length){
      cColCt = 0;
    }
    hornet.clothes = clothesList[clothesCt][cColCt];
    var i = document.getElementById("hClothes");
    i.src = hornet.clothes;
    return;
  case 1:
    if (eyeCt == -1) {
      console.log("there are no eyes yet.");
      return;
    }
    lColCt++;
    if (lColCt == lEyeList[eyeCt].length) {
      lColCt = 0;
    }
    hornet.leftEye = lEyeList[eyeCt][lColCt];
    var i = document.getElementById("hLEye");
    i.src = hornet.leftEye;
    return;
  case 2:
    if (eyeCt == -1) {
      console.log("there are no eyes yet.");
      return;
    }
    rColCt++;
    if (rColCt == rEyeList[eyeCt].length) {
      rColCt = 0;
    }
    hornet.rightEye = rEyeList[eyeCt][rColCt];
    var i = document.getElementById("hREye");
    i.src = hornet.rightEye;
    return;
  }
}

function changeImgSrc(piece) {
  switch (piece) {
  case "head":
    itemPicker(headList);
    var i = document.getElementById("hHead");
    i.src = hornet.head;
    //console.log("head change");
    return;
  case "body":
    itemPicker(bodyList);
    var i = document.getElementById("hBody");
    console.log(i.id);
    i.src = hornet.body;
    //console.log("body change");
    return;
  case "eyes":
    itemPicker(lEyeList);
    var i = document.getElementById("hLEye");
    i.src = hornet.leftEye;
    var j = document.getElementById("hREye");
    j.src = hornet.rightEye;
    //console.log("eye change");
    return;
  case "weapon":
    itemPicker(weaponList);
    var i = document.getElementById("hWeapon");
    i.src = hornet.weapon;
    //console.log("weapon change");
    return;
  case "clothes":
    itemPicker(clothesList);
    var i = document.getElementById("hClothes");
    i.src = hornet.clothes;
    //console.log("clothes change");
    return;
  }
}