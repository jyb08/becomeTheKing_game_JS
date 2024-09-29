
class GameData {
    constructor() {
        this.currentRoomId = 0;
        this.previousRoomId = -1;
        this.invincibleMode = false;
        this.items = [];
        this.inventory = [
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false],
        ];

        this.endingCounter = 5 * 24; // 5 seconds * 24 frames / second
        this.endingEntered = false;

        this.selectedItemInInventory = -1;
    }
}

let gameData = new GameData();

// ==== ==== ==== ==== NPC DEPLOYMENT (Fixed Location) ==== ==== ==== ==== ====

knightSchool_6.monster = cloneObject(Peter_2);
jasperHouse_19.monster = cloneObject(Jasper_3);
square_20.monster = cloneObject(Gandalf_6);
agnesHouse_21.monster = cloneObject(Agnes_4);
kingsPalace_22.monster = cloneObject(Louis20th_5);

// ==== ==== ==== ==== ==== ==== MONSTER DEPLOYMENT ==== ==== ==== ==== ==== ====

cropField_2.monster = cloneObject(Thug_7);
cropField_3.monster = cloneObject(Goblin_9);
prison_4.monster = cloneObject(Robber_8);
square_5.monster = cloneObject(Goblin_9);
horseFarm_7.monster = cloneObject(Ogre_10);
square_8.monster = cloneObject(Thug_7);
tavern_9.monster = cloneObject(Robber_8);
butchery_10.monster = cloneObject(Gargoyle_11);
square_11.monster = cloneObject(Goblin_9);
blacksmith_12.monster = cloneObject(Thug_7);
clothingShop_13.monster = cloneObject(Goblin_9);
square_14.monster = cloneObject(Dragon_13);
market_15.monster = cloneObject(Robber_8);
church_16.monster = cloneObject(Gargoyle_11);
tradingPost_17.monster = cloneObject(Minotaur_12);
hospital_18.monster = cloneObject(Ogre_10);
square_20.monster = cloneObject(Dragon_13);

// Thug_7
// Robber_8
// Goblin_9
// Ogre_10
// Gargoyle_11
// Minotaur_12
// Dragon_13


// ==== ==== ==== ==== ==== ==== ITEM DEPLOYMENT ==== ==== ==== ==== ==== ====

// apple_0
// chicken_1
// medicine_2
// short_sword_3
// long_sword_4
// broadsword_5
// leather_armor_6
// chain_armor_7
// plate_armor_8
// dragon_sword_9


house_1.items.push(cloneObject(apple_0));
cropField_2.items.push(cloneObject(chicken_1));
cropField_3.items.push(cloneObject(apple_0));
prison_4.items.push(cloneObject(plate_armor_8));
square_5.items.push(cloneObject(medicine_2));
knightSchool_6.items.push(cloneObject(short_sword_3));
horseFarm_7.items.push(cloneObject(long_sword_4));
square_8.items.push(cloneObject(broadsword_5));
tavern_9.items.push(cloneObject(chain_armor_7));
butchery_10.items.push(cloneObject(leather_armor_6));
square_11.items.push(cloneObject(medicine_2));
blacksmith_12.items.push(cloneObject(medicine_2));
clothingShop_13.items.push(cloneObject(long_sword_4));
square_14.items.push(cloneObject(chicken_1));
market_15.items.push(cloneObject(plate_armor_8));
church_16.items.push(cloneObject(apple_0));
tradingPost_17.items.push(cloneObject(chain_armor_7));
hospital_18.items.push(cloneObject(dragon_sword_9));
jasperHouse_19.items.push(cloneObject(chicken_1));
square_20.items.push(cloneObject(apple_0));
agnesHouse_21.items.push(cloneObject(plate_armor_8));
kingsPalace_22.items.push(cloneObject(leather_armor_6));



// ==== ==== ==== ==== ==== ==== ROOMS NAMES (FYI) ==== ==== ==== ==== ==== ====


// place_0
// house_1
// cropField_2
// cropField_3
// prison_4
// square_5
// knightSchool_6
// horseFarm_7
// square_8
// tavern_9
// butchery_10
// square_11
// blacksmith_12
// clothingShop_13
// square_14
// market_15
// church_16
// tradingPost_17
// hospital_18
// jasperHouse_19
// square_20
// agnesHouse_21
// kingsPalace_22
// grave_23
// inventory_24

