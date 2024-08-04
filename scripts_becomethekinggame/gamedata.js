
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


    }
}
    

let gameData = new GameData();

for (let index = 1; index < 100; index++) {


    //Gandalf_6
    //house_1.monsters.push(cloneObject(Thug_7));
    //house_1.monsters.push(cloneObject(Robber_8));
    //house_1.monsters.push(cloneObject(Goblin_9));
    //house_1.monsters.push(cloneObject(Ogre_10));
    //house_1.monsters.push(cloneObject(Gargoyle_11));
    //house_1.monsters.push(cloneObject(Minotaur_12));
    //house_1.monsters.push(cloneObject(Dragon_13));

}

house_1.monster = cloneObject(Robber_8);
cropField_2.monster = cloneObject(Thug_7)
square_5.monster = cloneObject(Goblin_9);

// house_1.monster = 0;
//cropField_3.monster = cloneObject(Gandalf_6);


//if there is an npc in the room, there shouldnt be a monster in the room. 
jasperHouse_19.monster = cloneObject(Jasper_3);
//square_20.monster = cloneObject(Gandalf_6);
agnesHouse_21.monster = cloneObject(Agnes_4);
kingsPalace_22.monster = cloneObject(Louis20th_5);

house_1.items.push(apple_0);
house_1.items.push(medicine_2);
house_1.items.push(chicken_1);
house_1.items.push(short_sword_3);
house_1.items.push(long_sword_4);
house_1.items.push(broadsword_5);
house_1.items.push(leather_armor_6);
house_1.items.push(chain_armor_7);
house_1.items.push(plate_armor_8);
house_1.items.push(dragon_sword_9);


// rooms.push(place_0);
// rooms.push(house_1);
// rooms.push(cropField_2);
// rooms.push(cropField_3);
// rooms.push(prison_4);
// rooms.push(square_5);
// rooms.push(knightSchool_6);
// rooms.push(horseFarm_7);
// rooms.push(square_8);
// rooms.push(tavern_9);
// rooms.push(butchery_10);
// rooms.push(square_11);
// rooms.push(blacksmith_12);
// rooms.push(clothingShop_13);
// rooms.push(square_14);
// rooms.push(market_15);
// rooms.push(church_16);
// rooms.push(tradingPost_17);
// rooms.push(hospital_18);
// rooms.push(jasperHouse_19);
// rooms.push(square_20);
// rooms.push(agnesHouse_21);
// rooms.push(kingsPalace_22);
// rooms.push(grave_23);
// rooms.push(inventory_24);