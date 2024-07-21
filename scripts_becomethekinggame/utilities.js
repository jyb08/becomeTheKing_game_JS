
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
    
    // Read UserInput and Move rooms
    console.log("USERINPUT: " + userInput);

    if (userInput == "e") {
        if (rooms[gameData.currentRoomId].eastRoomId != 0) {
            gameData.currentRoomId = rooms[gameData.currentRoomId].eastRoomId;
        } else {
            displayMessage("This direction east does not exist!");
        }
    } else if (userInput == "w") {
        if (rooms[gameData.currentRoomId].westRoomId != 0) {
            gameData.currentRoomId = rooms[gameData.currentRoomId].westRoomId;
        } else {
            displayMessage("This direction west does not exist!");
        }
    } else if (userInput == "n") {
        if (rooms[gameData.currentRoomId].northRoomId != 0) {
            gameData.currentRoomId = rooms[gameData.currentRoomId].northRoomId;
        } else {
            displayMessage("This direction north does not exist!");
        }
    } else if (userInput == "s") {
        if (rooms[gameData.currentRoomId].southRoomId != 0) {
            gameData.currentRoomId = rooms[gameData.currentRoomId].southRoomId;
        } else {
            displayMessage("This direction south does not exist!");
        }
    } else if (userInput == "a") {
        displayMessage("-----------Monster Attack Mode-----------");
        // find room, find monsster, find first monster, attack
        let currentRoom = rooms[gameData.currentRoomId];
        
        if (currentRoom.monsters.length != 0) {
            let currentMonster = currentRoom.monsters[0];
            
            // Moster attacks Daphne.
            let effect1 = calculateDefensePoint(Daphne_1.intelligence, Daphne_1.charisma) 
                        - calculateAttackPoint(currentMonster.strength);
            
            if (effect1 < 0) {
                Daphne_1.healthPoint += effect1;
                displayMessage("Monster hit with an effect of " + effect1);
            } else {
                effect1 = 0;
                displayMessage("Monster missed attack.");
            }
            
            if (Daphne_1.healthPoint <= 0) { // Daphne is dead.
                Daphne_1.healthPoint = 0;
                gameData.currentRoomId = 23;
            }

            // Daphne attacks the frontal monster.
            let effect2 = calculateDefensePoint(currentMonster.intelligence, currentMonster.charisma) 
                        - calculateAttackPoint(Daphne_1.strength);
            
            if (effect2 < 0) {
                currentMonster.healthPoint += effect2;
                displayMessage("Daphne hit with an effect of " + effect2);
            } else {
                effect2 = 0;
                displayMessage("Daphne missed attack.");
            }
            
            if (currentMonster.healthPoint <= 0) { // The monster is dead.
                displayMessage(currentMonster.name + " is DEAD!");
                
                // Money, monster's money x prob
                let earnedMoney = calculateAdjustedRandomMoneyOrExp(currentMonster.money);
                Daphne_1.money += earnedMoney;
                displayMessage("Daphne got " + earnedMoney + " money.");

                // Experience, monster's exp x prob
                let earnedExp = calculateAdjustedRandomMoneyOrExp(currentMonster.experience);
                Daphne_1.experience += earnedExp;
                displayMessage("Daphne got " + earnedExp + " experience.");

                // Monster gone
                currentMonster.healthPoint = 0;
                currentRoom.monsters.shift();
                console.log(JSON.stringify(currentRoom.monsters, null, 2));
                levelUp();
            }
        }
        
    } else if (userInput == "t") {
        displayMessage("-----------NPC Attack Mode-----------");
        let currentRoom = rooms[gameData.currentRoomId];

        if (currentRoom.characters.length != 0) {
            let currentCharacter = currentRoom.characters[0];
            let currentCharacterDead = false;

            // Daphne attacks NPC

            let effect1 = calculateDefensePoint(currentCharacter.intelligence, currentCharacter.charisma) 
            - calculateAttackPoint(Daphne_1.strength);

            if (effect1 < 0) {
                currentCharacter.healthPoint += effect1;
                displayMessage("Daphne hit with an effect of " + effect1);
            } else {
                effect1 = 0;
                displayMessage("Daphne missed attack.");
            }

            if (currentCharacter.healthPoint <= 0) { // The NPC is dead.
                displayMessage(currentCharacter.name + " is DEAD!");
                
                // Money, NPC's money x prob
                let earnedMoney = calculateAdjustedRandomMoneyOrExp(currentCharacter.money);
                Daphne_1.money += earnedMoney;
                displayMessage("Daphne got " + earnedMoney + " money.");

                // Experience, NPC's exp x prob
                let earnedExp = calculateAdjustedRandomMoneyOrExp(currentCharacter.experience);
                Daphne_1.experience += earnedExp;
                displayMessage("Daphne got " + earnedExp + " experience.");

                // NPC gone
                currentCharacter.healthPoint = 0;
                currentCharacterDead = true;
                currentRoom.characters.shift();
                levelUp();
            }

            // NPC attacks Daphne
            if (currentCharacterDead == false) {
                let effect2 = calculateDefensePoint(Daphne_1.intelligence, Daphne_1.charisma) 
                        - calculateAttackPoint(currentCharacter.strength);
            
                if (effect2 < 0) {
                    Daphne_1.healthPoint += effect2;
                    displayMessage("NPC hit with an effect of " + effect2);
                } else {
                    effect2 = 0;
                    displayMessage("NPC missed attack.");
                }
                
                if (Daphne_1.healthPoint <= 0) { // Daphne is dead.
                    Daphne_1.healthPoint = 0;
                    gameData.currentRoomId = 23;
                }
            }
                        
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

    } else if (userInput == "z") { // "z" for testing
        
        // rooms[gameData.currentRoomId].getItemFromRoom("apple");

    } else if (userInput.includes("get")) {
        let itemInUserInput = userInput.replace("get ", "");
        getItemFromRoom(itemInUserInput);

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



function calculateAdjustedRandomMoneyOrExp(moneyOrExp) {
    point = moneyOrExp * int(random(50, 150)) / 100;
    return int(point);
}

function calculateAttackPoint(strength) {
    point = strength * int(random(50, 150)) / 100;
    return point;
}

function calculateDefensePoint(intelligence, charisma) {
    point = intelligence * int(random(50, 150)) / 100;
    point += charisma * int(random(20, 50)) / 100;
    return point;
}

function levelUp() {

    if (Daphne_1.experience >= 100) {
        Daphne_1.level += 1;
        Daphne_1.experience -= 100;

        displayMessage("Daphne's level is now " + Daphne_1.level);

        let added_strength = 2 + int(random(0, 100)) % 3;
        Daphne_1.strengthMax += added_strength;
        Daphne_1.strength = Daphne_1.strengthMax;
        let added_intelligence = 2 + int(random(0, 100)) % 3;
        Daphne_1.intelligenceMax += added_intelligence;
        Daphne_1.intelligence = Daphne_1.intelligenceMax;
        let added_charisma = 1 + int(random(0, 100)) % 3;
        Daphne_1.charismaMax += added_charisma;
        Daphne_1.charisma = Daphne_1.charismaMax;
        let added_healthPoint = 3 + int(random(0, 100)) % 3;
        Daphne_1.healthPointMax += added_healthPoint;
        Daphne_1.healthPoint = Daphne_1.healthPointMax;
        let added_magicPoint = 2 + int(random(0, 100)) % 3;
        Daphne_1.magicPointMax += added_magicPoint;
        Daphne_1.magicPoint = Daphne_1.magicPointMax;
        let added_energyPoint = 1 + int(random(0, 100)) % 3;
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


