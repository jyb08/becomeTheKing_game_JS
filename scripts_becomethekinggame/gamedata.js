
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


    
    //house_1.monsters.push(cloneObject(Thug_7));
    //house_1.monsters.push(cloneObject(Robber_8));
    //house_1.monsters.push(cloneObject(Goblin_9));
    //house_1.monsters.push(cloneObject(Ogre_10));
    //house_1.monsters.push(cloneObject(Gargoyle_11));
    //house_1.monsters.push(cloneObject(Minotaur_12));
    //house_1.monsters.push(cloneObject(Dragon_13));

}

house_1.monsters.push(cloneObject(Thug_7));

cropField_3.monsters.push(Gandalf_6)


knightSchool_6.characters.push(Gandalf_6);

jasperHouse_19.characters.push(Jasper_3);
square_20.characters.push(Gandalf_6);
agnesHouse_21.characters.push(Agnes_4);
kingsPalace_22.characters.push(Louis20th_5);

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
