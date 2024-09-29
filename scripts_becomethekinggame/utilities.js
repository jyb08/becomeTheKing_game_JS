
// ==== ==== ==== ==== Utility Variables ==== ==== ==== ====

let sendButton = document.getElementById("send-button");
let inputField = document.getElementById("input-field");
let mainTextArea = document.getElementById("main-text-area");


// ==== ==== ==== ==== Utility Functions ==== ==== ==== ====

function displayMessage(message) {
    mainTextArea.value += message + "\n";
}

function displayCurrentLocation() {

    // Display the Current Room
    message = "";
    message += rooms[gameData.currentRoomId].roomTitle;
    message += "\n";
    message += rooms[gameData.currentRoomId].roomDescription;
    message += rooms[gameData.currentRoomId].movingDirection;
    message += "\n";

    // Display Items
    if (rooms[gameData.currentRoomId].items.length != 0) {
        message += "The following items are in this room: "
        let itemsString = ""
        for (let i = 0; i < rooms[gameData.currentRoomId].items.length; i++) {
            if (i != 0) {
                itemsString += ", ";
            }
            itemsString += rooms[gameData.currentRoomId].items[i].name;
        }
        message += itemsString;
    } else if (gameData.currentRoomId != 0) {
        message += "No items are in this room."
    }

    displayMessage(message);



}

function displayText() {
    let text = inputField.value;
    mainTextArea.value += text + "\n";
    inputField.value = "";
    return text;
}

function processText() {

    // Receive UserInput
    let userInput = displayText();
    let currentRoom = rooms[gameData.currentRoomId];

    let numberOfMonsters = currentRoom.monster;
    let numberOfNPCs;
    
            
    // Read UserInput and Move rooms
    console.log("USERINPUT: " + userInput);


    if (userInput == "e") {
        if (rooms[gameData.currentRoomId].eastRoomId != 0 
            && currentRoom.monster == 0) {
            gameData.currentRoomId = rooms[gameData.currentRoomId].eastRoomId;
        } 
        
        if (rooms[gameData.currentRoomId].eastRoomId == 0) {
            displayMessage("You can not move EAST!");
        }

        if (currentRoom.monster != 0) {
            displayMessage("You must defeat before moving!");
        }

    } else if (userInput == "w") {
        if (rooms[gameData.currentRoomId].westRoomId != 0 
            && currentRoom.monster == 0) {
            gameData.currentRoomId = rooms[gameData.currentRoomId].westRoomId;
        } 
        
        if (rooms[gameData.currentRoomId].westRoomId == 0) {
            displayMessage("You can not move WEST!");
        }

        if (currentRoom.monster != 0) {
            displayMessage("You must defeat before moving!");
        }

    } else if (userInput == "n") {
        if (rooms[gameData.currentRoomId].northRoomId != 0 
            && currentRoom.monster == 0) {
            gameData.currentRoomId = rooms[gameData.currentRoomId].northRoomId;
        } 
        
        if (rooms[gameData.currentRoomId].northRoomId == 0) {
            displayMessage("You can not move NORTH!");
        }

        if (currentRoom.monster != 0) {
            displayMessage("You must defeat before moving!");
        }

    } else if (userInput == "s") {
        if (rooms[gameData.currentRoomId].southRoomId != 0 
            && currentRoom.monster == 0) {
            gameData.currentRoomId = rooms[gameData.currentRoomId].southRoomId;
        } 
        
        if (rooms[gameData.currentRoomId].southRoomId == 0) {
            displayMessage("You can not move SOUTH!");
        }

        if (currentRoom.monster != 0) {
            displayMessage("You must defeat before moving!");
        }
                
    } else if (userInput == "a") {

        if (rooms[gameData.currentRoomId].monster != 0
            && rooms[gameData.currentRoomId].monster.occupation != "Monster") { //NPC
                attackByDaphne();

                if (rooms[gameData.currentRoomId].monster.healthPoint != 0) {
                    attackOnDaphne();
                };

            }
        
        if (rooms[gameData.currentRoomId].monster != 0
            && rooms[gameData.currentRoomId].monster.occupation == "Monster") { //MONSTER
                attackOnDaphne();
                attackByDaphne();
            }

        else {
            displayMessage("There is no one in this room!");
        }

    } else if (userInput == "i") {
        if (gameData.currentRoomId != 24) {
            gameData.previousRoomId = gameData.currentRoomId;
            gameData.currentRoomId = 24;
        
            displayMessage("================ ITEM MODE ================");
        } 
        else if (gameData.currentRoomId == 24) {
            gameData.currentRoomId = gameData.previousRoomId;
        
            displayMessage("================ ITEM MODE EXIT ================");
        }

    } else if (userInput.includes("get")) {
        let itemInUserInput = userInput.replace("get ", "");
        getItemFromRoom(itemInUserInput);

    } else if (userInput.includes("use") && gameData.currentRoomId == 24) {

        let itemInUserInput = userInput.replace("use ", "");
        let result = useItemFromInventory(itemInUserInput);
        if (result == -1) {
            displayMessage("You don't have ANY ITEMS!");
        }

    } else if (userInput == "exit") {
        close();
    }

    // Display Directions
    displayCurrentLocation();

    displayMessage("Enter input: (type exit to quit) ");
}

function findAvailableItemIndex(itemName) {

    let itemArray = rooms[gameData.currentRoomId].items;

    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i].name == itemName) {
            return i;
        }
    }

    return -1;
}



function attackByDaphne() {

    displayMessage("-----------YOU ARE ATTACKING-----------");
    let currentRoom = rooms[gameData.currentRoomId];

    if (currentRoom.monster != 0) {
        let currentCharacter = currentRoom.monster;
        let currentCharacterDead = false;

        
        let effect = 
        calculateDefensePoint(
            currentCharacter.intelligence, 
            currentCharacter.charisma) 
        - calculateAttackPoint(Daphne_1.strength);

        if (effect < 0) {
            currentCharacter.healthPoint += effect;
            displayMessage("Daphne hit with an effect of " + effect);
        } else {
            displayMessage("Daphne missed attack.");
        }

        if (currentCharacter.healthPoint <= 0 && currentCharacter.characterId == 5) { // ENDING!!!
            gameData.currentRoomId = 25;
            gameData.endingEntered = true;

            displayMessage(currentCharacter.name + " is DEAD!");

        } else if (currentCharacter.healthPoint <= 0 && currentCharacter.characterId != 5) { // The character is DEAD.
            displayMessage(currentCharacter.name + " is DEAD!");
            
            // Money, money x prob
            let earnedMoney = calculateAdjustedRandomMoneyOrExp(currentCharacter.money);
            Daphne_1.money += earnedMoney;
            displayMessage("Daphne got " + earnedMoney + " money.");

            // Experience, exp x prob
            let earnedExp = calculateAdjustedRandomMoneyOrExp(currentCharacter.experience);
            Daphne_1.experience += earnedExp;
            displayMessage("Daphne got " + earnedExp + " experience.");

            // character gone
            currentCharacter.healthPoint = 0;
            currentCharacterDead = true;
            currentRoom.monster = 0;
            levelUp();

        }
    }
}

function attackOnDaphne() {
    let currentRoom = rooms[gameData.currentRoomId];
    let currentCharacter = currentRoom.monster;
    displayMessage("-----------YOU ARE GETTING ATTACKED-----------");
    let effect = calculateDefensePoint(Daphne_1.intelligence, Daphne_1.charisma) 
    - calculateAttackPoint(currentCharacter.strength);

    if (effect < 0) {
        Daphne_1.healthPoint += effect;
        displayMessage("You were hit with an effect of " + effect);
    } else {
        effect = 0;
        displayMessage("They missed an attack.");
    }

    if (Daphne_1.healthPoint <= 0) { // Daphne is dead.
        Daphne_1.healthPoint = 0;
        gameData.currentRoomId = 23;
    }
    
}

function calculateAdjustedRandomMoneyOrExp(moneyOrExp) {
    point = moneyOrExp * int(random(50, 100)) / 100;
    return int(point);
}

function calculateAttackPoint(strength) {
    point = strength * int(random(50, 100)) / 100;
    return point;
}

function calculateDefensePoint(intelligence, charisma) {
    point = intelligence * int(random(50, 100)) / 100;
    point += charisma * int(random(20, 30)) / 100;
    return point;
}

function levelUp() {


    // TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!! TODO!!!!
    // if (Daphne_1.experience >= 100) { //YOU HAVE TO CHANGE THIS TO 100!!!!! THIS IS WRONG
    if (true) { //YOU HAVE TO CHANGE THIS TO 100!!!!! THIS IS WRONG
        Daphne_1.level += 1;
        Daphne_1.experience -= 100;

        displayMessage("Daphne's level is now " + Daphne_1.level);

        let added_strength = 1 + int(random(0, 100)) % 2;
        Daphne_1.strengthMax += added_strength;
        Daphne_1.strength = Daphne_1.strengthMax;
        let added_intelligence = 1 + int(random(0, 100)) % 2;
        Daphne_1.intelligenceMax += added_intelligence;
        Daphne_1.intelligence = Daphne_1.intelligenceMax;
        let added_charisma = 1 + int(random(0, 100)) % 2;
        Daphne_1.charismaMax += added_charisma;
        Daphne_1.charisma = Daphne_1.charismaMax;
        let added_healthPoint = 2 + int(random(0, 100)) % 2;
        Daphne_1.healthPointMax += added_healthPoint;
        Daphne_1.healthPoint = Daphne_1.healthPointMax;
        let added_magicPoint = 2 + int(random(0, 100)) % 2;
        Daphne_1.magicPointMax += added_magicPoint;
        Daphne_1.magicPoint = Daphne_1.magicPointMax;
        let added_energyPoint = 1 + int(random(0, 100)) % 2;
        Daphne_1.energyPointMax += added_energyPoint;
        Daphne_1.energyPoint = Daphne_1.energyPointMax;

        displayMessage("Daphne's strength is now " + Daphne_1.strength + " as she received " + added_strength + ".")
        displayMessage("Daphne's intelligence is now " + Daphne_1.intelligence + " as she received " + added_intelligence + ".");
        displayMessage("Daphne's charisma is now " + Daphne_1.charisma + " as she received " + added_charisma + ".");
        displayMessage("Daphne's health point is now " + Daphne_1.healthPoint + " as she received " + added_healthPoint + ".");
        displayMessage("Daphne's magic point is now " + Daphne_1.magicPoint + " as she received " + added_magicPoint + ".");
        displayMessage("Daphne's energy point is now " + Daphne_1.energyPoint + " as she received " + added_energyPoint + ".");

        if (Daphne_1.level == 20) {
            displayMessage("---------------------------------------------");
            displayMessage("            Daphne is now a KNIGHT            ");
            displayMessage("---------------------------------------------");
        }


        if (Daphne_1.level == 70) {
            displayMessage("---------------------------------------------");
            displayMessage("            Daphne is now a NOBLE            ");
            displayMessage("---------------------------------------------");
        }
    }

}

function cloneObject(object) {
    return Object.assign({}, object);
}

// ==== ==== ==== ==== User Input Events ==== ==== ==== ====

sendButton.addEventListener("click", processText);
inputField.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        processText();
        
        // Maintain the mainTextArea at the bottom.
        mainTextArea.scrollTop = mainTextArea.scrollHeight;
    }
});

function calculateLineEquation(x1, y1, x2, y2) {
    slope = (y2 - y1).toFixed(4) / (x2 - x1).toFixed(4);
    intercept = y1 - ((y2 - y1).toFixed(4) / (x2 - x1).toFixed(4)) * x1;
    return [slope, intercept];
}

function detectAreaWithCoordinates(x1, y1, x2, y2, x3, y3, x4, y4, a, b) {
    line1_slope = calculateLineEquation(x1, y1, x2, y2)[0];
    line1_intercept = calculateLineEquation(x1, y1, x2, y2)[1];
    
    line2_slope = calculateLineEquation(x2, y2, x3, y3)[0];
    line2_intercept = calculateLineEquation(x2, y2, x3, y3)[1];
    
    line3_slope = calculateLineEquation(x3, y3, x4, y4)[0];
    line3_intercept = calculateLineEquation(x3, y3, x4, y4)[1];
    
    line4_slope = calculateLineEquation(x4, y4, x1, y1)[0];
    line4_intercept = calculateLineEquation(x4, y4, x1, y1)[1];
    
    condition1 = (b > (line1_slope * a + line1_intercept)) ? true : false;

    if (line2_slope > 0) {
        condition2 = (b > (line2_slope * a + line2_intercept)) ? true : false;
    } else {
        condition2 = (b < (line2_slope * a + line2_intercept)) ? true : false;
    }

    condition3 = (b < (line3_slope * a + line3_intercept)) ? true : false;

    if (line4_slope > 0) {
        condition4 = (b < (line4_slope * a + line4_intercept)) ? true : false;
    } else {
        condition4 = (b > (line4_slope * a + line4_intercept)) ? true : false;
    }
    
    return condition1 && condition2 && condition3 && condition4;
}

function deepcopy(object) {
    return Object.assign({}, object);
}


