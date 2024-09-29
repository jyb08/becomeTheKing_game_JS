

function findItemSpotFor1x1() {

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if (gameData.inventory[i][j] == false) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

function findItemSpotFor1x3() {

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 8; j++) {
            if (gameData.inventory[i][j] == false
                && gameData.inventory[i + 1][j] == false 
                && gameData.inventory[i + 2][j] == false) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

function findItemSpotFor1x4() {
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 8; j++) {
            if (gameData.inventory[i][j] == false
                && gameData.inventory[i + 1][j] == false 
                && gameData.inventory[i + 2][j] == false
                && gameData.inventory[i + 3][j] == false) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

function findItemSpotFor2x1() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 7; j++) {
            if (gameData.inventory[i][j] == false
                && gameData.inventory[i][j + 1] == false) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

function findItemSpotFor2x2() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            if (gameData.inventory[i][j] == false
                && gameData.inventory[i][j + 1] == false
                && gameData.inventory[i + 1][j] == false
                && gameData.inventory[i + 1][j + 1] == false) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

function findItemSpotFor2x3() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 7; j++) {
            if (gameData.inventory[i][j] == false
                && gameData.inventory[i][j + 1] == false
                && gameData.inventory[i + 1][j] == false
                && gameData.inventory[i + 1][j + 1] == false
                && gameData.inventory[i + 2][j] == false
                && gameData.inventory[i + 2][j + 1] == false) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

function findItemSpotFor2x4() {
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 7; j++) {
            if (gameData.inventory[i][j] == false
                && gameData.inventory[i][j + 1] == false
                && gameData.inventory[i + 1][j] == false
                && gameData.inventory[i + 1][j + 1] == false
                && gameData.inventory[i + 2][j] == false
                && gameData.inventory[i + 2][j + 1] == false
                && gameData.inventory[i + 3][j] == false
                && gameData.inventory[i + 3][j + 1] == false) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

function getItemFromRoom(itemName) {
    
    // check if the item is actually there
    let itemIndex = findAvailableItemIndex(itemName);
    let inventoryIndex;
    
    if (itemName == "apple") {
        inventoryIndex = findItemSpotFor1x1();
    } else if (itemName == "chicken") {
        inventoryIndex = findItemSpotFor2x1();
    } else if (itemName == "medicine") {
        inventoryIndex = findItemSpotFor1x1();
    } else if (itemName == "short sword") {
        inventoryIndex = findItemSpotFor1x3();
    } else if (itemName == "long sword") {
        inventoryIndex = findItemSpotFor1x4();
    } else if (itemName == "broadsword") {
        inventoryIndex = findItemSpotFor1x4();
    } else if (itemName == "leather armor") {
        inventoryIndex = findItemSpotFor2x2();
    } else if (itemName == "chain armor") {
        inventoryIndex = findItemSpotFor2x3();
    } else if (itemName == "plate armor") {
        inventoryIndex = findItemSpotFor2x4();
    } else if (itemName == "dragon sword") {
        inventoryIndex = findItemSpotFor1x4();
    }

    
    let i = inventoryIndex[0];
    let j = inventoryIndex[1];
    
    if (itemIndex == -1 && gameData.currentRoomId != 24) {
        displayMessage("No " + itemName + " exist!");
    } else if (itemIndex == -1 && gameData.currentRoomId == 24) {
        displayMessage("You have to type 'use [itemName]'");  
    } else if (itemIndex != -1 && inventoryIndex[0] == -1) {
        displayMessage("There is no available spot in your inventory.");  
    } else if (itemIndex != -1 && inventoryIndex[0] != -1) {
        
        let itemsInRoom = rooms[gameData.currentRoomId].items;

        // Deep copy the item and put i and j
        // let newItem = deepcopy(itemsInRoom[itemIndex]);
        let newItem = JSON.parse(JSON.stringify((itemsInRoom[itemIndex])));


        // Put the item into character's item storage
        newItem.inventoryLocationIJ[0] = i;
        newItem.inventoryLocationIJ[1] = j;
        gameData.items.push(newItem);
        
        // Change the inventory space from false to true
        if (itemName == "apple") {
            gameData.inventory[i][j] = true;
        } else if (itemName == "chicken") {
            gameData.inventory[i][j] = true;
            gameData.inventory[i][j+1] = true;
        } else if (itemName == "medicine") {
            gameData.inventory[i][j] = true;
        } else if (itemName == "short sword") {
            gameData.inventory[i][j] = true;
            gameData.inventory[i+1][j] = true;
            gameData.inventory[i+2][j] = true;
        } else if (itemName == "long sword") {
            gameData.inventory[i][j] = true;
            gameData.inventory[i+1][j] = true;
            gameData.inventory[i+2][j] = true;
            gameData.inventory[i+3][j] = true;
        } else if (itemName == "broadsword") {
            gameData.inventory[i][j] = true;
            gameData.inventory[i+1][j] = true;
            gameData.inventory[i+2][j] = true;
            gameData.inventory[i+3][j] = true;
        } else if (itemName == "leather armor") {
            gameData.inventory[i][j] = true;
            gameData.inventory[i][j+1] = true;
            gameData.inventory[i+1][j] = true;
            gameData.inventory[i+1][j+1] = true;
        } else if (itemName == "chain armor") {
            gameData.inventory[i][j] = true;
            gameData.inventory[i][j+1] = true;
            gameData.inventory[i+1][j] = true;
            gameData.inventory[i+1][j+1] = true;
            gameData.inventory[i+2][j] = true;
            gameData.inventory[i+2][j+1] = true;
        } else if (itemName == "plate armor") {
            gameData.inventory[i][j] = true;
            gameData.inventory[i][j+1] = true;
            gameData.inventory[i+1][j] = true;
            gameData.inventory[i+1][j+1] = true;
            gameData.inventory[i+2][j] = true;
            gameData.inventory[i+2][j+1] = true;
            gameData.inventory[i+3][j] = true;
            gameData.inventory[i+3][j+1] = true;
        } else if (itemName == "dragon sword") {
            gameData.inventory[i][j] = true;
            gameData.inventory[i+1][j] = true;
            gameData.inventory[i+2][j] = true;
            gameData.inventory[i+3][j] = true;
        } 


        // Delete the item from items array in the room
        itemsInRoom.splice(itemIndex, 1);
        
        displayMessage("You've got an " + itemName + "!");
    }


}




function findItemIdOfSelectedImage(mX, mY) {
    
    //IJ 바뀐거 고쳐짐 + 좌표로 change
    let flippedX = int(mY / 100);    
    let flippedY = int(mX / 100); 
    let mouseIJ = [flippedX, flippedY];

    for (let itemIndex = 0; itemIndex < gameData.items.length; itemIndex++) {

        let currentItem = gameData.items[itemIndex];
        
        let coordinates = [];

        for (let j = 0; j < currentItem.inventoryLocationSize[0]; j++) { 
            for (let i = 0; i < currentItem.inventoryLocationSize[1]; i++) {
                let location = [currentItem.inventoryLocationIJ[1] + j, 
                                currentItem.inventoryLocationIJ[0] + i]
                coordinates.push(location);
            }
        }

        // verify if the mouseIJ in the coordinates
        for (let coordinateValue = 0; coordinateValue < coordinates.length; coordinateValue++) {

            // console.log("MOUSE: (" + flippedX + ", " + flippedY + ")");
            // console.log("COOR FOR X: " + coordinates[coordinateValue][1])
            // console.log("COOR FOR y: " + coordinates[coordinateValue][0])
            if (mouseIJ[0] == coordinates[coordinateValue][1] 
                && mouseIJ[1] == coordinates[coordinateValue][0]) {

                    return itemIndex; 
                    
                } 
        }

    }

    return -1;
}

// gameData.inventory[0]
// inventorylocsize --> find function call + return [-1, -1] != 0
// cloneObject(item)
// inventorylocXY --> i, j
// gameData.item <= item


function useItemFromInventory(itemName) {


    let itemIndex = findItemInInventory(itemName);
    
    if (itemIndex == -1) {
        return -1; // There is no designated item in the inventory.
    } else {

        if (itemName == "apple") { // Expendable
            applyItemFromInventory(itemName, itemIndex);
        } else if (itemName == "chicken") { // Expendable
            applyItemFromInventory(itemName, itemIndex);
        } else if (itemName == "medicine") { // Expendable
            applyItemFromInventory(itemName, itemIndex);
        } else if (itemName == "short sword") { // Equipment
            equipItemFromInventory(itemName, itemIndex);
        } else if (itemName == "long sword") { // Equipment
            equipItemFromInventory(itemName, itemIndex);
        } else if (itemName == "broadsword") { // Equipment
            equipItemFromInventory(itemName, itemIndex);
        } else if (itemName == "leather armor") { // Equipment
            equipItemFromInventory(itemName, itemIndex);
        } else if (itemName == "chain armor") { // Equipment
            equipItemFromInventory(itemName, itemIndex);
        } else if (itemName == "plate armor") { // Equipment
            equipItemFromInventory(itemName, itemIndex);
        } else if (itemName == "dragon sword") { // Equipment
            equipItemFromInventory(itemName, itemIndex);
        }
    }
    
}

function applyItemFromInventory(itemName, itemIndex) {
    
    updateGameDataInventoryToFalse(itemIndex);

    Daphne_1.strength += gameData.items[itemIndex].strength;
    if (Daphne_1.strength > Daphne_1.strengthMax) {
        Daphne_1.strength = Daphne_1.strengthMax;
    }

    Daphne_1.intelligence += gameData.items[itemIndex].intelligence;
    if (Daphne_1.intelligence > Daphne_1.intelligenceMax) {
        Daphne_1.intelligence = Daphne_1.intelligenceMax;
    }

    Daphne_1.charisma += gameData.items[itemIndex].charisma;
    if (Daphne_1.charisma > Daphne_1.charismaMax) {
        Daphne_1.charisma = Daphne_1.charismaMax;
    }

    Daphne_1.healthPoint += gameData.items[itemIndex].healthPoint;
    if (Daphne_1.healthPoint > Daphne_1.healthPointMax) {
        Daphne_1.healthPoint = Daphne_1.healthPointMax;
    }

    Daphne_1.magicPoint += gameData.items[itemIndex].magicPoint;
    if (Daphne_1.magicPoint > Daphne_1.magicPointMax) {
        Daphne_1.magicPoint = Daphne_1.magicPointMax;
    }

    Daphne_1.energyPoint += gameData.items[itemIndex].energyPoint;
    if (Daphne_1.energyPoint > Daphne_1.energyPointMax) {
        Daphne_1.energyPoint = Daphne_1.energyPointMax;
    }


    gameData.items.splice(itemIndex, 1);

    
}


function equipItemFromInventory(itemName, itemIndex) {

}

function findItemInInventory(itemName) {


    for (let j = 0; j < gameData.items.length; j++) {
        if (gameData.items[j].name == itemName) {
            return j;
        }
    }

    return -1;
}










