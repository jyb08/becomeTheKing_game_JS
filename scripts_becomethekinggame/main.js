let roomImages = [];
let characterImages = [];
let itemImages = []

let startedFirstFlag = true;
let fontLibreBaskerville;

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
    roomImages.push(loadImage("./images_becomethekinggame/room25.png"));
    roomImages.push(loadImage("./images_becomethekinggame/room26.png"));


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

    fontLibreBaskerville = loadFont("./fonts/LibreBaskerville-Italic.ttf");

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
        
    } else if (gameData.currentRoomId == 25) { // Ending1 Room
        drawBackgroundRoomScene();
        drawEndingCounter();
        gameData.endingCounter--;
        if (gameData.endingCounter < 0) {
            gameData.currentRoomId = 26;
        }

    } else if (gameData.currentRoomId == 26) { // Ending2 Room
        drawBackgroundRoomScene(); 
    } else {
        drawBackgroundRoomScene();
        drawNonPlayableCharacters();
        drawBattleOpponentCharacters();
        drawMainDaphneCharacter();
        drawStatusWidgets();
        drawItems();
    }

}

function drawEndingCounter() {
    let time = ceil(gameData.endingCounter / 24);
    textSize(85);
    fill(214,54,95);
    textFont(fontLibreBaskerville);
    text(time, 720, 370);
}

function drawBackgroundRoomScene() {
    // image(roomImages[gameData.currentRoomId], width/2, height/2); 
    image(roomImages[gameData.currentRoomId], 800/2, 400/2); 
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
                    image(itemImages[1 + currentItem.itemId * 3 + currentItem.imageVersion], 
                        locationJ * 100 + 50,
                        locationI * 100 + 50);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 3) {
                    image(itemImages[1 + currentItem.itemId * 3 + currentItem.imageVersion], 
                        locationJ * 100 + 50,
                        locationI * 100 + 150);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 4) {
                    image(itemImages[1 + currentItem.itemId * 3 + currentItem.imageVersion], 
                        locationJ * 100 + 50,
                        200);
                }
                
            }
            else if (currentItem.inventoryLocationSize[0] == 2) {
                if ((currentItem.inventoryLocationSize[1]) == 1) {
                    image(itemImages[1 + currentItem.itemId * 3 + currentItem.imageVersion], 
                        locationJ * 100 + 100,
                        locationI * 100 + 50);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 2) {
                    image(itemImages[1 + currentItem.itemId * 3 + currentItem.imageVersion], 
                        locationJ * 100 + 100,
                        locationI * 100 + 100);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 3) {
                    image(itemImages[1 + currentItem.itemId * 3 + currentItem.imageVersion], 
                        locationJ * 100 + 100,
                        locationI * 100 + 150);
                }
                else if ((currentItem.inventoryLocationSize[1]) == 4) {
                    image(itemImages[1 + currentItem.itemId * 3 + currentItem.imageVersion], 
                        locationJ * 100 + 100,
                        200);
                }
            }

            
           
        }        
    }

}

function selectItemInInvectoryForMoving() {

    let mX = mouseX;
    let mY = mouseY;
    //console.log("X: " + mX + " || Y: " + mY);

    // determine which item in the inventory is clicked
    let itemIndex = findItemIdOfSelectedImage(mX, mY);
    // console.log("CLICKED ITEM: " + itemIndex);
    if (itemIndex == -1) {
        // Nothing selected!!!!!

    } else if (itemIndex == gameData.selectedItemInInventory) {

        gameData.selectedItemInInventory = -1;

        for (let i = 0; i < gameData.items.length; i++) {
            gameData.items[i].imageVersion = 0;
        }

    } else {
        gameData.selectedItemInInventory = itemIndex;
        let currentItem = gameData.items[itemIndex];
    
        for (let i = 0; i < gameData.items.length; i++) {
            gameData.items[i].imageVersion = 0;
        }
        currentItem.imageVersion = 1;
    }

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
        selectItemInInvectoryForMoving();
    }
    
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

function keyPressed() {
    if (gameData.selectedItemInInventory != -1) {
        if (keyCode === LEFT_ARROW) {
            moveItemLeft(gameData.selectedItemInInventory);
        } else if (keyCode === RIGHT_ARROW) {
            moveItemRight(gameData.selectedItemInInventory);
        } else if (keyCode === UP_ARROW) {
            moveItemUp(gameData.selectedItemInInventory)
        } else if (keyCode === DOWN_ARROW) {
            moveItemDown(gameData.selectedItemInInventory)
        }  
    }
}

function moveItemLeft(itemIndex) {
    if (checkEmptySpace(itemIndex, "LEFT")) {

        updateGameDataInventoryToFalse(itemIndex); // Existing locations to false

        let i = gameData.items[itemIndex].inventoryLocationIJ[0];
        let j = gameData.items[itemIndex].inventoryLocationIJ[1];
        gameData.items[itemIndex].inventoryLocationIJ = [i, j - 1];

        updateGameDataInventoryToTrue(itemIndex); // Filling locations to true

    }
}

function moveItemRight(itemIndex) {
    if (checkEmptySpace(itemIndex, "RIGHT")) {

        updateGameDataInventoryToFalse(itemIndex); // Existing locations to false

        let i = gameData.items[itemIndex].inventoryLocationIJ[0];
        let j = gameData.items[itemIndex].inventoryLocationIJ[1];   
        gameData.items[itemIndex].inventoryLocationIJ = [i, j + 1];

        updateGameDataInventoryToTrue(itemIndex); // Filling locations to true

    }
}

function moveItemUp(itemIndex) {
    if (checkEmptySpace(itemIndex, "UP")) {

        updateGameDataInventoryToFalse(itemIndex); // Existing locations to false

        let i = gameData.items[itemIndex].inventoryLocationIJ[0];
        let j = gameData.items[itemIndex].inventoryLocationIJ[1];
        gameData.items[itemIndex].inventoryLocationIJ = [i - 1, j];

        updateGameDataInventoryToTrue(itemIndex); // Filling locations to true

    }
}

function moveItemDown(itemIndex) {
    if (checkEmptySpace(itemIndex, "DOWN")) {
        updateGameDataInventoryToFalse(itemIndex); // Existing locations to false

        let i = gameData.items[itemIndex].inventoryLocationIJ[0];
        let j = gameData.items[itemIndex].inventoryLocationIJ[1];
        gameData.items[itemIndex].inventoryLocationIJ = [i + 1, j];

        updateGameDataInventoryToTrue(itemIndex); // Filling locations to true
    }
}

function updateGameDataInventoryToFalse(itemIndex) {
    let currentItem = gameData.items[itemIndex];
    let xRepetition1 = currentItem.inventoryLocationIJ[1] + currentItem.inventoryLocationSize[0]; 
    let yRepetition1 = currentItem.inventoryLocationIJ[0] + currentItem.inventoryLocationSize[1]; 
    for (let x = currentItem.inventoryLocationIJ[1]; x < xRepetition1; x++) { 
        for (let y = currentItem.inventoryLocationIJ[0]; y < yRepetition1; y++) {  
            gameData.inventory[y][x] = false;
        }
    }
}

function updateGameDataInventoryToTrue(itemIndex) {
    let currentItem = gameData.items[itemIndex];
    let xRepetition1 = currentItem.inventoryLocationIJ[1] + currentItem.inventoryLocationSize[0]; 
    let yRepetition1 = currentItem.inventoryLocationIJ[0] + currentItem.inventoryLocationSize[1]; 
    for (let x = currentItem.inventoryLocationIJ[1]; x < xRepetition1; x++) { 
        for (let y = currentItem.inventoryLocationIJ[0]; y < yRepetition1; y++) {  
            gameData.inventory[y][x] = true;
        }
    }
}

// True if there is space available, false if not.
function checkEmptySpace(itemIndex, direction) { // direction: LEFT | RIGHT | UP | DOWN
    
    let currentItem = gameData.items[itemIndex];
    debugItem(currentItem);
    let inventoryTempCopy = JSON.parse(JSON.stringify(gameData.inventory));

    debugInventory(inventoryTempCopy, "BEFORE");
    // Empty current location to compare.

    let xRepetition1 = currentItem.inventoryLocationIJ[1] + currentItem.inventoryLocationSize[0]; // 1
    let yRepetition1 = currentItem.inventoryLocationIJ[0] + currentItem.inventoryLocationSize[1]; // 1
    for (let x = currentItem.inventoryLocationIJ[1]; x < xRepetition1; x++) { 
        for (let y = currentItem.inventoryLocationIJ[0]; y < yRepetition1; y++) {  
            inventoryTempCopy[y][x] = false;
            console.log("EXECUTED!!!!!!!" + x + ", " + y);
        }
    }

    debugInventory(inventoryTempCopy, "AFTER");
    debugInventory(gameData.inventory, "ORIGINAL");

    // Check if the desired locations are empty
    let xRepetition2 = currentItem.inventoryLocationIJ[1] + currentItem.inventoryLocationSize[0]; 
    let yRepetition2 = currentItem.inventoryLocationIJ[0] + currentItem.inventoryLocationSize[1]; 
  
    for (let x = currentItem.inventoryLocationIJ[1]; x < xRepetition2; x++) {
        for (let y = currentItem.inventoryLocationIJ[0]; y < yRepetition2; y++) {
            switch (direction) {
            case "LEFT":
                if (checkIfCoordinatesInside(x-1, y) == false) { return false; }
                if (inventoryTempCopy[y][x-1] == true) { return false; }
                break;
            case "RIGHT":
                if (checkIfCoordinatesInside(x+1, y) == false) { return false; }
                if (inventoryTempCopy[y][x+1] == true) { return false; }
                break;
            case "UP":
                if (checkIfCoordinatesInside(x, y-1) == false) { return false; }
                if (inventoryTempCopy[y-1][x] == true) { return false; }
                break;
            case "DOWN":
                if (checkIfCoordinatesInside(x, y+1) == false) { return false; }
                if (inventoryTempCopy[y+1][x] == true) { return false; }
                break;
            }
        }
    }

    return true;
}

// True if inside, false if outside
function checkIfCoordinatesInside(x, y) {
    if (x < 0 || 7 < x) { return false; }
    if (y < 0 || 3 < y) { return false; }
    return true;
}

function debugItem(item) {
    console.log("==== ==== ==== ==== Item: " + item.name + " ==== ==== ==== ====");
    console.log("IJ: (" + item.inventoryLocationIJ[0] + ", " + item.inventoryLocationIJ[1] + ")");
    console.log("SIZE: (" + item.inventoryLocationSize[0] + ", " + item.inventoryLocationSize[1] + ")");
}

function debugInventory(inventory, text) {
    console.log("==== ==== ==== ==== Inventory " + text + " ==== ==== ==== ====");
    for (let i = 0; i < 4; i++) {
        console.log(i + ": " + inventory[i][0] + "-" + inventory[i][1] + "-" + inventory[i][2] + "-" + inventory[i][3] 
            + "-" + inventory[i][4] + "-" + inventory[i][5] + "-"+ inventory[i][6] + "-" + inventory[i][7] + "");
    }
}






/////////////////////////t//o?////do/////to////do///////////////////////////////////////////////////
//               COMPLETE THIS!!!!!!!!!!!!!!!!!!!1/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function checkLeftOfItem(itemIndex) { // Return true if empty, false otherwise
    let currentItem = gameData.items[itemIndex];

    for (let j = currentItem.inventoryLocationSize[1]; j > 0; j--) {

        if (currentItem.inventoryLocationIJ[0] == 0) {
            return false;
        } 
        
        
        
        else if (gameData.inventory[currentItem.inventoryLocationIJ[0] - 1][j] == false) {
            let empty = true;
        }
        
    }

    return empty;

}

function checkRightOfItem() { // Return true if empty, false otherwise

}

function checkUpOfItem() { // Return true if empty, false otherwise

}

function checkDownOfItem() { // Return true if empty, false otherwise

}


// currentItem --> inventorylocationsize (1, 4) / inventorylocationIJ
// left: 












// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DELETE THIS AFTER EXPERIMENT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ==== ==== ==== ==== ==== ==== TEMPORARY: PUSH TO INVENTORY  ==== ==== ==== ==== ==== ====
// gameData.items.push(cloneObject(apple_0));

// inventory_24.items.push(cloneObject(apple_0));
// getItemFromRoom("apple");
// inventory_24.items.push(cloneObject(chicken_1));
// getItemFromRoom("chicken");
// inventory_24.items.push(cloneObject(apple_0));
// getItemFromRoom("apple");

// inventory_24.items.push(cloneObject(chicken_1));
// getItemFromRoom("chicken");
// inventory_24.items.push(cloneObject(chain_armor_7));
// getItemFromRoom("chain armor");
// inventory_24.items.push(cloneObject(long_sword_4));
// getItemFromRoom("long sword");


