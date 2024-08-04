let roomImages = [];
let characterImages = [];
let itemImages = []

let startedFirstFlag = true;

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

function preload() {

    // Room Images
    roomImages.push(loadImage("./images_becomethekinggame/room00.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room01.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room02.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room03.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room04.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room05.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room06.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room07.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room08.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room09.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room10.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room11.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room12.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room13.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room14.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room15.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room16.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room17.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room18.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room19.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room20.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room21.jpg"));
    roomImages.push(loadImage("./images_becomethekinggame/room22.png"));
    roomImages.push(loadImage("./images_becomethekinggame/room23.png"));
    roomImages.push(loadImage("./images_becomethekinggame/room24.png"));


    // Character Images
    characterImages.push(0);
    characterImages.push([
        loadImage("./images_becomethekinggame/char01v01.png"),
        loadImage("./images_becomethekinggame/char01v02.png"),
        loadImage("./images_becomethekinggame/char01v03.png"),
    ]);
    characterImages.push(loadImage("./images_becomethekinggame/char02.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char03.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char04.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char05.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char06.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char07.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char08.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char09.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char10.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char11.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char12.png"));
    characterImages.push(loadImage("./images_becomethekinggame/char13.png"));

    
    // Item Images

    itemImages.push(loadImage("./images_becomethekinggame/basket.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item00v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item00v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item00v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/item01v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item01v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item01v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/item02v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item02v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item02v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/item03v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item03v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item03v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/item04v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item04v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item04v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/item05v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item05v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item05v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/item06v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item06v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item06v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/item07v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item07v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item07v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/item08v00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item08v01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/item08v02.png"));

    itemImages.push(loadImage("./images_becomethekinggame/dragonswordv00.png"));
    itemImages.push(loadImage("./images_becomethekinggame/dragonswordv01.png"));
    itemImages.push(loadImage("./images_becomethekinggame/dragonswordv02.png"));

}
function setup() {
    frameRate(24);
    createCanvas(800, 400);
    imageMode(CENTER);
}

function draw() {

    background(0);

    if (gameData.currentRoomId == 0) {
        drawBackgroundRoomScene();
        if (startedFirstFlag == true) {
            displayCurrentLocation();
            startedFirstFlag = false;
        }
    } else if (gameData.currentRoomId == 23) { // Death Room
        drawBackgroundRoomScene();
    } else if (gameData.currentRoomId == 24) { // Item Room
        drawBackgroundRoomScene();
        drawItems();
    } else {
        drawBackgroundRoomScene();
        drawNonPlayableCharacters();
        drawBattleOpponentCharacters();
        drawMainDaphneCharacter();
        drawStatusWidgets();
        drawItems();
    }



}

function drawBackgroundRoomScene() {
    image(roomImages[gameData.currentRoomId], width/2, height/2); 
}

function drawNonPlayableCharacters() {

    let currentRoom = rooms[gameData.currentRoomId];
    
    if (currentRoom.monster != 0) {
        let character = currentRoom.monster;

        image(characterImages[character.characterId], 
            character.x, 
            character.y, 
            character.w, 
            character.h);

        
        fill('white')
        rect(character.xStatusBox, character.yStatusBox, 100, 5);
        fill(163, 0, 0)
        rect(character.xStatusBox, character.yStatusBox, 
            100 * character.healthPoint / character.healthPointMax, 
            5);
    }

}

function drawBattleOpponentCharacters() {

    let currentRoom = rooms[gameData.currentRoomId];

    if (currentRoom.monster != 0) {

        image(characterImages[currentRoom.monster.characterId], 
            currentRoom.monster.x , 
            currentRoom.monster.y, 
            currentRoom.monster.w, 
            currentRoom.monster.h);

        fill('white');
        rect(currentRoom.monster.xStatusBox, currentRoom.monster.yStatusBox, 100, 5);
        fill(163, 0, 0);
        rect(currentRoom.monster.xStatusBox, currentRoom.monster.yStatusBox, 
            100 * currentRoom.monster.healthPoint / currentRoom.monster.healthPointMax, 
            5);

    } 
    
    // else if (lengthCharacters == 2) {
        
    //     image(characterImages[currentRoom.monsters[0].characterId], 
    //         currentRoom.monsters[0].x -80, 
    //         currentRoom.monsters[0].y, 
    //         currentRoom.monsters[0].w, 
    //         currentRoom.monsters[0].h);

    //     image(characterImages[currentRoom.monsters[1].characterId], 
    //         currentRoom.monsters[1].x +180, 
    //         currentRoom.monsters[1].y, 
    //         currentRoom.monsters[1].w, 
    //         currentRoom.monsters[1].h);
        
    //     fill('white');
    //     rect(currentRoom.monsters[0].xStatusBox -80, currentRoom.monsters[0].yStatusBox, 100, 5);
    //     fill(163, 0, 0);
    //     rect(currentRoom.monsters[0].xStatusBox -80, currentRoom.monsters[0].yStatusBox, 
    //         100 * currentRoom.monsters[0].healthPoint / currentRoom.monsters[0].healthPointMax, 
    //         5);

    //     fill('white');
    //     rect(currentRoom.monsters[1].xStatusBox +180, currentRoom.monsters[1].yStatusBox, 100, 5);
    //     fill(163, 0, 0);
    //     rect(currentRoom.monsters[1].xStatusBox +180, currentRoom.monsters[1].yStatusBox, 
    //         100 * currentRoom.monsters[1].healthPoint / currentRoom.monsters[1].healthPointMax, 
    //         5);
        


    // } 






    
}

function drawMainDaphneCharacter() {
    


    if (0 <= Daphne_1.level && Daphne_1.level <= 19) {
        image(characterImages[1][0], //lvl 0-19
            Daphne_1.x[0], Daphne_1.y[0], 
            Daphne_1.w[0], Daphne_1.h[0]);
    }
    
    else if (20 <= Daphne_1.level && Daphne_1.level <= 69) {
        image(characterImages[1][1], //lvl 20-69
            Daphne_1.x[1], Daphne_1.y[1], 
            Daphne_1.w[1], Daphne_1.h[1]);
    }
    
    else if (70 <= Daphne_1.level && Daphne_1.level <= 99) {
        image(characterImages[1][2], //lvl 70-99
            Daphne_1.x[2], Daphne_1.y[2], 
            Daphne_1.w[2], Daphne_1.h[2]);    
    }

    

}

function drawStatusWidgets() {
    
    // Daphne
    fill('white')
    rect(90, 380, 200, 10); // EP yellow
    rect(90, 365, 200, 10); // MP blue
    rect(90, 350, 200, 10); // HP red
    
    textSize(10);
    fill(255, 255, 255, 255);
    textStyle(BOLD);
    text("HP", 72, 358);
    text("MP", 71, 373);
    text("EP", 73, 388);
    
    // EP
    fill(243, 209, 83);
    rect(90, 380, 
        200 * Daphne_1.energyPoint / Daphne_1.energyPointMax, 10);
    
    // MP
    fill(0, 0, 163);
    rect(90, 365, 
        200 * Daphne_1.magicPoint / Daphne_1.magicPointMax, 10);

    // HP
    fill(163, 0, 0);
    rect(90, 350, 
        200 * Daphne_1.healthPoint / Daphne_1.healthPointMax, 10);
    
    //basket
    image(itemImages[0], 35, 365);    
}



function doubleClicked() {
    
    let mX = mouseX;
    let mY = mouseY;

    if (gameData.currentRoomId == 24 
        && detectAreaWithCoordinates(0, 3, 800, 1, 799, 400, 2, 399, mX, mY) ) {
        gameData.currentRoomId = gameData.previousRoomId;
    }
}

// TODO: 
//
// 0    100     200    300   400    500    600    700    800
// [ 0,0 ][ 0,1 ][ 0,2 ][ 0,3 ][ 0,4 ][ 0,5 ][ 0,6 ][ 0,7 ]
// [ 1,0 ][ 1,1 ][ 1,2 ][ 1,3 ][ 1,4 ][ 1,5 ][ 1,6 ][ 1,7 ]
// [ 2,0 ][ 2,1 ][ 2,2 ][ 2,3 ][ 2,4 ][ 2,5 ][ 2,6 ][ 2,7 ]
// [ 3,0 ][ 3,1 ][ 3,2 ][ 3,3 ][ 3,4 ][ 3,5 ][ 3,6 ][ 3,7 ]
//
//   mouseX, mouseY = (450, 150) => 1,4

// item이 차지하는 area = (I, J)                 (I, J + size[1])
//            2x2           (I + size[0], J)       (I + size[0], J + size[1])
// 
// 
// 
// 

// Some armour => IJ 0,4  =>   0,4   0,5    
//                             1,4   1,5
//              mouse == 1,4    
// => inventory item id return 


function drawItems() {
    if (gameData.currentRoomId == 24) {
        for (let i = 0; i < gameData.items.length; i++) {
            let currentItem = gameData.items[i];
            let locationI = currentItem.inventoryLocationIJ[0]
            let locationJ = currentItem.inventoryLocationIJ[1]
            // J = x 가로
            // I = y 세로
            if (currentItem.inventoryLocationSize[0] == 1) { //100x---
                if ((currentItem.inventoryLocationSize[1]) == 1) {
                    image(itemImages[1 + currentItem.itemId * 3], 
                        locationJ * 100 + 50,
                        locationI * 100 + 50);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 3) {
                    image(itemImages[1 + currentItem.itemId * 3], 
                        locationJ * 100 + 50,
                        locationI * 100 + 150);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 4) {
                    image(itemImages[1 + currentItem.itemId * 3], 
                        locationJ * 100 + 50,
                        200);
                }
                
            }
            else if (currentItem.inventoryLocationSize[0] == 2) {
                if ((currentItem.inventoryLocationSize[1]) == 1) {
                    image(itemImages[1 + currentItem.itemId * 3], 
                        locationJ * 100 + 100,
                        locationI * 100 + 50);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 2) {
                    image(itemImages[1 + currentItem.itemId * 3], 
                        locationJ * 100 + 100,
                        locationI * 100 + 100);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 3) {
                    image(itemImages[1 + currentItem.itemId * 3], 
                        locationJ * 100 + 100,
                        locationI * 100 + 150);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 4) {
                    image(itemImages[1 + currentItem.itemId * 3], 
                        locationJ * 100 + 100,
                        200);
                }
            }

            
           
        }        
    }

}

function changeItemPlaceInInventory() {

    
//1. mouseclicked
//2. check if locations are empty - if empty - img change to green v. else - red v
//when mouesclicked released - if empty = change place. else - no change

    let mX = mouseX;
    let mY = mouseY;
    //console.log("X: " + mX + " || Y: " + mY);

    // determine which item in the inventory is clicked
    let itemIndex = findItemIdOfSelectedImage(mX, mY);
    console.log("CLICKED ITEM: " + itemIndex);

    // when image clicked, move the image
    let currentItem = gameData.items[itemIndex];



    // TODO:
    // 그림 계속 나와야함(노깜빢), 위치 수정, 드래그 가능하게, 드래그 하는 동안 그림이 나오도록)
    image(itemImages[changeImageVersion(currentItem.itemId, 1)], 
        mX,
        mY);

}

function mouseClicked() {

    let mX = mouseX;
    let mY = mouseY;

    // Enter the item mode
    if (detectAreaWithCoordinates(6, 330, 57, 331, 58, 383, 7, 362, mX, mY) 
        && gameData.currentRoomId != 24) {
        gameData.previousRoomId = gameData.currentRoomId;
        gameData.currentRoomId = 24;
    }

    // mouseclick in inventory 
    if (gameData.currentRoomId == 24) {
        // 1. check if clicked space is filled = function
        // 2. if filled = change img to green
        //         mouseMoved: 
        //      


    }
    
}

function mouseDragged() {



}

function changeImageVersion(id, versionNumber) {
    // 0 = regular version, 1 = green version, 2 = red version
    if (versionNumber == 0) {
        return (1 + id * 3);
    }
    else if (versionNumber == 1) {
        return (2 + id * 3);
    }
    else if (versionNumber == 2) {
        return (3 + id * 3);
    }
}


