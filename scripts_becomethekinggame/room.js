
class Room {

    constructor() {
        this.roomId = 0;
    
        this.roomTitle = "";
        
        this.roomDescription = "";
        
        this.movingDirection = "";
        
        this.northRoomId = 0;
        
        this.westRoomId = 0;
        
        this.southRoomId = 0;
        
        this.eastRoomId = 0;
        
        // this.characters = [];
            
        // NPCs or Monsters
        this.monster = 0;
        
        this.items = [];
               
    }


    removeItemFromRoom(itemName) {

        let found = -1;

        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i];
            if (currentItem.name.includes(itemName)) {
                found = i;
                break;
            }
        }
    
        if (found != -1) {
            this.items.splice(found, 1);
            return true;
        } else {
            displayMessage("The following item does not exist in this room!");
            return false;
        }
    }

    checkItemFromRoom(itemName) {

        let found = -1;

        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i];
            if (currentItem.name.includes(itemName)) {
                found = i;
                break;
            }
        }
    
        if (found != -1) {
            return true;
        } else {
            displayMessage("The following item does not exist in this room!");
            return false;
        }


    }

    // Assuming there MUST be an item in the room.
    getItemFromRoom(itemName) {

        if (itemName == "apple") {
            let inventoryLocation = findItemSpotFor1x1(); 
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] = true;

                let currentApple = JSON.parse(JSON.stringify(apple_0));
                currentApple.inventoryLocationIJ = [i, j];
                
                gameData.items.push(currentApple);

                rooms[gameData.currentRoomId].removeItemFromRoom("apple");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }

        else if (itemName == "chicken") {
            let inventoryLocation = findItemSpotFor2x1();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] = true;
                gameData.inventory[i][j + 1] = true;

                let currentChicken = JSON.parse(JSON.stringify(chicken_1));
                currentChicken.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentChicken);

                rooms[gameData.currentRoomId].removeItemFromRoom("chicken");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }
        
        else if (itemName == "medicine") {
            let inventoryLocation = findItemSpotFor1x1();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] = true;

                let currentMedicine = JSON.parse(JSON.stringify(medicine_2));
                currentMedicine.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentMedicine);

                rooms[gameData.currentRoomId].removeItemFromRoom("medicine");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }

        else if (itemName == "short sword") {
            let inventoryLocation = findItemSpotFor1x3();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] = true;
                gameData.inventory[i + 1][j] == true;
                gameData.inventory[i + 2][j] == true;

                let currentShortSword = JSON.parse(JSON.stringify(short_sword_3));
                currentShortSword.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentShortSword);

                rooms[gameData.currentRoomId].removeItemFromRoom("short sword");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }

        else if (itemName == "long sword") {
            let inventoryLocation = findItemSpotFor1x4();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] = true;
                gameData.inventory[i + 1][j] == true;
                gameData.inventory[i + 2][j] == true;
                gameData.inventory[i + 3][j] == true;

                let currentLongSword = JSON.parse(JSON.stringify(long_sword_4));
                currentLongSword.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentLongSword);

                rooms[gameData.currentRoomId].removeItemFromRoom("long sword");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }
        
        else if (itemName == "broadsword") {
            let inventoryLocation = findItemSpotFor1x4();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] = true;
                gameData.inventory[i + 1][j] == true;
                gameData.inventory[i + 2][j] == true;
                gameData.inventory[i + 3][j] == true;

                let currentBroadsword = JSON.parse(JSON.stringify(broadsword_5));
                currentBroadsword.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentBroadsword);

                rooms[gameData.currentRoomId].removeItemFromRoom("broadsword");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }


        
        else if (itemName == "leather armor") {
            let inventoryLocation = findItemSpotFor2x2();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] == true;
                gameData.inventory[i][j + 1] == true;
                gameData.inventory[i + 1][j] == true;
                gameData.inventory[i + 1][j + 1] == true;

                let currentLeatherArmor = JSON.parse(JSON.stringify(leather_armor_6));
                currentLeatherArmor.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentLeatherArmor);

                rooms[gameData.currentRoomId].removeItemFromRoom("leather armor");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }

        else if (itemName == "chain armor") {
            let inventoryLocation = findItemSpotFor2x3();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] == true;
                gameData.inventory[i][j + 1] == true;
                gameData.inventory[i + 1][j] == true;
                gameData.inventory[i + 1][j + 1] == true;
                gameData.inventory[i + 2][j] == true;
                gameData.inventory[i + 2][j + 1] == true;

                let currentChainArmor = JSON.parse(JSON.stringify(chain_armor_7));
                currentChainArmor.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentChainArmor);

                rooms[gameData.currentRoomId].removeItemFromRoom("chain armor");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }

        else if (itemName == "plate armor") {
            let inventoryLocation = findItemSpotFor2x4();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] == true;
                gameData.inventory[i][j + 1] == true;
                gameData.inventory[i + 1][j] == true;
                gameData.inventory[i + 1][j + 1] == true;
                gameData.inventory[i + 2][j] == true;
                gameData.inventory[i + 2][j + 1] == true;
                gameData.inventory[i + 3][j] == true;
                gameData.inventory[i + 3][j + 1] == true;

                let currentPlateArmor = JSON.parse(JSON.stringify(plate_armor_8));
                currentPlateArmor.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentPlateArmor);

                rooms[gameData.currentRoomId].removeItemFromRoom("plate armor");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }

        else if (itemName == "dragon sword") {
            let inventoryLocation = findItemSpotFor1x4();
            if (inventoryLocation[0] != -1) {

                let i = inventoryLocation[0];
                let j = inventoryLocation[1];

                // 
                gameData.inventory[i][j] == true;
                gameData.inventory[i + 1][j] == true;
                gameData.inventory[i + 2][j] == true;
                gameData.inventory[i + 3][j] == true;

                let currentDragonSword = JSON.parse(JSON.stringify(dragon_sword_9));
                currentDragonSword.inventoryLocationIJ = [i, j];
                
                
                gameData.items.push(currentDragonSword);

                rooms[gameData.currentRoomId].removeItemFromRoom("dragon sword");
                
            } else {
                displayMessage("No room in inventory!");
            }
        }

    }

}

let place_0 = new Room;
place_0.roomId = 0;
place_0.roomTitle = "\nWelcome to the 'Become the King' game!";
place_0.roomDescription = "Type 'e' to start!";
place_0.movingDirection = "";
place_0.northRoomId = 0;
place_0.southRoomId = 0;
place_0.westRoomId = 0;
place_0.eastRoomId = 1;


let house_1 = new Room;
house_1.roomId = 1;
house_1.roomTitle = "Daphne's House";
house_1.roomDescription = 
"The house is where Daphne begins her journey to become the Queen.\nThe house, which is made of mud and straw, is small and at risk of falling\ndown. After many years of unchanging life, she decides\nto change her fate on her own...\n";
house_1.movingDirection = 
"[east: Crop Field]\n";
house_1.northRoomId = 0;
house_1.southRoomId = 0;
house_1.westRoomId = 0;
house_1.eastRoomId = 2;

  
let cropField_2 = new Room;
cropField_2.roomId = 2;
cropField_2.roomTitle = "Crop Field";
cropField_2.roomDescription =
"This Crop Field is where Daphne and her family agriculture. On its westside\nis Daphne's house.\n";
cropField_2.movingDirection = 
"[west: Daphne's House]\n[east: Crop Field]\n";
cropField_2.northRoomId = 0;
cropField_2.southRoomId = 0;
cropField_2.westRoomId = 1;
cropField_2.eastRoomId = 3;

let cropField_3 = new Room;
cropField_3.roomId = 3;
cropField_3.roomTitle = "Crop Field";
cropField_3.roomDescription =
"This Crop Field is abandoned due to its unhealthy soil. This unhealthy soil\ngradually affects Daphne's soil and leads to its decrease in quality and crop rotting\n";
cropField_3.movingDirection = 
"[north: Square]\n[west: Crop Field]\n[east: Prison]\n";
cropField_3.northRoomId = 5;
cropField_3.southRoomId = 0;
cropField_3.westRoomId = 2;
cropField_3.eastRoomId = 4;

let prison_4 = new Room;
prison_4.roomId = 4;
prison_4.roomTitle = "Prison";
prison_4.roomDescription =
"The Prison is where all the criminals of the town are held custody.\nThe places and people near the prison are always in danger due to violent jailbreakers.\n";
prison_4.movingDirection = 
"[north: Knight School]\n[west: Crop Field]\n";
prison_4.northRoomId = 6;
prison_4.southRoomId = 0;
prison_4.westRoomId = 3;
prison_4.eastRoomId = 0;

let square_5 = new Room;
square_5.roomId = 5;
square_5.roomTitle = "Square";
square_5.roomDescription =
"The Square is the center of trade, commerce, and culture of the area.\n";
square_5.movingDirection = 
"[north: Square]\n[south: Crop Field]\n[east: Knight School]\n";
square_5.northRoomId = 8;
square_5.southRoomId = 3;
square_5.westRoomId = 0;
square_5.eastRoomId = 6;

let knightSchool_6 = new Room;
knightSchool_6.roomId = 6;
knightSchool_6.roomTitle = "Knight School";
knightSchool_6.roomDescription =
"The Knight School is Daphne's second major destination. Here, she learns how\nto become a knight and gets ready for her next step.\n";
knightSchool_6.movingDirection = 
"[north: Tavern]\n[south: Prison]\n[west: Square]\n";
knightSchool_6.northRoomId = 9;
knightSchool_6.southRoomId = 4;
knightSchool_6.westRoomId = 5;
knightSchool_6.eastRoomId = 0;

let horseFarm_7 = new Room;
horseFarm_7.roomId = 7;
horseFarm_7.roomTitle = "Horse Farm";
horseFarm_7.roomDescription =
"The Hose Farm is where horses are taken care and rest during the night.\n";
horseFarm_7.movingDirection = 
"[north: Butchery]\n[east: Square]\n";
horseFarm_7.northRoomId = 10;
horseFarm_7.southRoomId = 0;
horseFarm_7.westRoomId = 0;
horseFarm_7.eastRoomId = 8;

let square_8 = new Room;
square_8.roomId = 8;
square_8.roomTitle = "Square";
square_8.roomDescription =
"The Square is the center of trade, commerce, and culture of the area.\n";
square_8.movingDirection = 
"[north: Square]\n[south: Square]\n[west: Horse Farm]\n[east: Tavern]\n";
square_8.northRoomId = 11;
square_8.southRoomId = 5;
square_8.westRoomId = 7;
square_8.eastRoomId = 9;

let tavern_9 = new Room;
tavern_9.roomId = 9;
tavern_9.roomTitle = "Tavern";
tavern_9.roomDescription =
"The Tavern is where alcohol is sold and drunk. Due to the heavy influence of\ncatholic ideas, this place was often criticized to be taboo.\n";
tavern_9.movingDirection = 
"[north: Blacksmith]\n[south: Knight School]\n[west: Square]\n";
tavern_9.northRoomId = 12;
tavern_9.southRoomId = 6;
tavern_9.westRoomId = 8;
tavern_9.eastRoomId = 0;

let butchery_10 = new Room;
butchery_10.roomId = 10;
butchery_10.roomTitle = "Butchery";
butchery_10.roomDescription =
"The Butchery is where people buy meat, poultry, and fish.\n";
butchery_10.movingDirection = 
"[north: Clothing Shop]\n[south: House Farm]\n[east: Square]\n";
butchery_10.northRoomId = 13;
butchery_10.southRoomId = 7;
butchery_10.westRoomId = 0;
butchery_10.eastRoomId = 11;

let square_11 = new Room;
square_11.roomId = 11;
square_11.roomTitle = "Square";
square_11.roomDescription =
"The Square is the center of trade, commerce, and culture of the area.\n";
square_11.movingDirection = 
"[north: Square]\n[south: Square]\n[west: Butchery]\n[east: Blacksmith]\n";
square_11.northRoomId = 14;
square_11.southRoomId = 8;
square_11.westRoomId = 10;
square_11.eastRoomId = 12;

let blacksmith_12 = new Room;
blacksmith_12.roomId = 12;
blacksmith_12.roomTitle = "Blacksmith";
blacksmith_12.roomDescription =
"The Blacksmith is where objects made of iron are fabricated and sold.\n";
blacksmith_12.movingDirection = 
"[north: Market]\n[south: Tavern]\n[west: Square]\n";
blacksmith_12.northRoomId = 15;
blacksmith_12.southRoomId = 9;
blacksmith_12.westRoomId = 11;
blacksmith_12.eastRoomId = 0;

let clothingShop_13 = new Room;
clothingShop_13.roomId = 13;
clothingShop_13.roomTitle = "Clothing Shop";
clothingShop_13.roomDescription =
"The Clothing Shop is where clothing, silk, and other fabric are sold.\n";
clothingShop_13.movingDirection = 
"[north: Church]\n[south: Butchery]\n[east: Square]\n";
clothingShop_13.northRoomId = 16;
clothingShop_13.southRoomId = 10;
clothingShop_13.westRoomId = 0;
clothingShop_13.eastRoomId = 14;

let square_14 = new Room;
square_14.roomId = 14;
square_14.roomTitle = "Square";
square_14.roomDescription =
"The Square is the center of trade, commerce, and culture of the area.\n";
square_14.movingDirection = 
"[north: Trading Post]\n[south: Square]\n[west: Clothing Shop]\n[east: Market]\n";
square_14.northRoomId = 17;
square_14.southRoomId = 11;
square_14.westRoomId = 13;
square_14.eastRoomId = 15;

let market_15 = new Room;
market_15.roomId = 15;
market_15.roomTitle = "Market";
market_15.roomDescription =
"The Market is various local and imported goods are sold.\n";
market_15.movingDirection = 
"[north: Hospital]\n[south: Blacksmith]\n[west: Square]\n";
market_15.northRoomId = 18;
market_15.southRoomId = 12;
market_15.westRoomId = 14;
market_15.eastRoomId = 0;

let church_16 = new Room;
church_16.roomId = 16;
church_16.roomTitle = "Church";
church_16.roomDescription =
"The Church is a building for public Christian worship.\n";
church_16.movingDirection = 
"[north: Jasper's House]\n[south: Clothing Shop]\n[east: Trading Post]\n";
church_16.northRoomId = 19;
church_16.southRoomId = 13;
church_16.westRoomId = 0;
church_16.eastRoomId = 17;

let tradingPost_17 = new Room;
tradingPost_17.roomId = 17;
tradingPost_17.roomTitle = "Trading Post";
tradingPost_17.roomDescription =
"The Trading Post is where imported and local goods are received and traded.\n";
tradingPost_17.movingDirection = 
"[north: Square]\n[south: Square]\n[west: Church]\n[east: Hospital]\n";
tradingPost_17.northRoomId = 20;
tradingPost_17.southRoomId = 14;
tradingPost_17.westRoomId = 16;
tradingPost_17.eastRoomId = 18;

let hospital_18 = new Room;
hospital_18.roomId = 18;
hospital_18.roomTitle = "Hospital";
hospital_18.roomDescription =
"The Hospital is where sick and injured people are treated.\n";
hospital_18.movingDirection = 
"[north: Agnes' house]\n[south: Market]\n[west: Trading Post]\n";
hospital_18.northRoomId = 21;
hospital_18.southRoomId = 15;
hospital_18.westRoomId = 17;
hospital_18.eastRoomId = 18; 

let jasperHouse_19 = new Room;
jasperHouse_19.roomId = 19;
jasperHouse_19.roomTitle = "Jasper's house";
jasperHouse_19.roomDescription =
"The Jasper's house is the noble Jasper's house.\n";
jasperHouse_19.movingDirection = 
"[south: Church]\n[east: Square]\n";
jasperHouse_19.northRoomId = 0;
jasperHouse_19.southRoomId = 16;
jasperHouse_19.westRoomId = 0;
jasperHouse_19.eastRoomId = 20;    

let square_20 = new Room;
square_20.roomId = 20;
square_20.roomTitle = "Square";
square_20.roomDescription =
"The Square is the center of trade, commerce, and culture of the area.\n";
square_20.movingDirection = 
"[north: King's Palace]\n[south: Trading Post]\n[west: Jasper's House]\n[east: Agnes' House]\n";
square_20.northRoomId = 22;
square_20.southRoomId = 17;
square_20.westRoomId = 19;
square_20.eastRoomId = 21;  

let agnesHouse_21= new Room;
agnesHouse_21.roomId = 21;
agnesHouse_21.roomTitle = "Agnes' House";
agnesHouse_21.roomDescription =
"The Agnes' House is the noble Agnes' House.\n";
agnesHouse_21.movingDirection = 
"[south: Hospital]\n[west: Square]\n"; 
agnesHouse_21.northRoomId = 0;
agnesHouse_21.southRoomId = 18;
agnesHouse_21.westRoomId = 20;
agnesHouse_21.eastRoomId = 0;  

let kingsPalace_22= new Room;
kingsPalace_22.roomId = 22;
kingsPalace_22.roomTitle = "King's Palace";
kingsPalace_22.roomDescription =
"The King's Palace is the King's Palace.\n";
kingsPalace_22.movingDirection = 
"[south: Square]\n";
kingsPalace_22.northRoomId = 0;
kingsPalace_22.southRoomId = 20;
kingsPalace_22.westRoomId = 0;
kingsPalace_22.eastRoomId = 0;  

let grave_23 = new Room;
grave_23.roomId = 23;
grave_23.roomTitle = "Daphne's Grave";
grave_23.roomDescription =
"--Daphne is DEAD--\n";
grave_23.movingDirection = 
"\n";
grave_23.northRoomId = 0;
grave_23.southRoomId = 0;
grave_23.westRoomId = 0;
grave_23.eastRoomId = 0;  

let inventory_24 = new Room;
inventory_24.roomId = 24;
inventory_24.roomTitle = "Inventory";
inventory_24.roomDescription =
"WELCOME TO INVENTORY";
inventory_24.movingDirection = 
"\n";
inventory_24.northRoomId = 0;
inventory_24.southRoomId = 0;
inventory_24.westRoomId = 0;
inventory_24.eastRoomId = 0; 


let rooms = [];

rooms.push(place_0);
rooms.push(house_1);
rooms.push(cropField_2);
rooms.push(cropField_3);
rooms.push(prison_4);
rooms.push(square_5);
rooms.push(knightSchool_6);
rooms.push(horseFarm_7);
rooms.push(square_8);
rooms.push(tavern_9);
rooms.push(butchery_10);
rooms.push(square_11);
rooms.push(blacksmith_12);
rooms.push(clothingShop_13);
rooms.push(square_14);
rooms.push(market_15);
rooms.push(church_16);
rooms.push(tradingPost_17);
rooms.push(hospital_18);
rooms.push(jasperHouse_19);
rooms.push(square_20);
rooms.push(agnesHouse_21);
rooms.push(kingsPalace_22);
rooms.push(grave_23);
rooms.push(inventory_24);


