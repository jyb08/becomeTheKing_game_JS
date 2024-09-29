
class Character {

    constructor() {

        this.characterId = 0;

        this.level = 0; // 0-99
    
        this.experience = 0;
    
        this.name = "";
    
        this.occupation = "";
    
        this.personality;
    
        this.strength = 0;
        this.strengthMax = 0;
    
        this.intelligence = 0;
        this.intelligenceMax = 0;
    
        this.charisma = 0;
        this.charismaMax = 0;
    
        this.healthPoint = 0;
        this.healthPointMax = 0;
    
        this.magicPoint = 0;
        this.magicPointMax = 0;
    
        this.energyPoint = 0;
        this.energyPointMax = 0;
    
        this.money = 0; // unit: Gold
    
        this.probability = 0.0;

        this.x = 0;
        
        this.y = 0;

        this.w = 0;

        this.h = 0;

        this.xStatusBox = 0;

        this.yStatusBox = 0;
    
    }
}

let Daphne_1 = new Character;

Daphne_1.characterId = 1;
Daphne_1.level = 1;
Daphne_1.experience = 0;
Daphne_1.name = "Daphne";
Daphne_1.occupation = "Peasant";
Daphne_1.personality = "Tough, Strong, Ambitious";
Daphne_1.strength = 20;
Daphne_1.strengthMax = 20;
Daphne_1.intelligence = 15;
Daphne_1.intelligenceMax = 15;
Daphne_1.charisma = 10;
Daphne_1.charismaMax = 10;
Daphne_1.healthPoint = 50;
Daphne_1.healthPointMax = 50;
Daphne_1.magicPoint = 10;
Daphne_1.magicPointMax = 10;
Daphne_1.energyPoint = 20;
Daphne_1.energyPointMax = 20;
Daphne_1.money = 2;
Daphne_1.x = [175, 180, 200];
Daphne_1.y = [250, 200, 300];
Daphne_1.w = [250, 300, 450];
Daphne_1.h = [300, 500, 450];


let Peter_2 = new Character;

Peter_2.characterId = 2;
Peter_2.level = 20;
Peter_2.experience = 0;
Peter_2.name = "Peter";
Peter_2.occupation = "Knight Master";
Peter_2.personality = "Seems tough, actually kind, helping";
Peter_2.strength = 20;
Peter_2.strengthMax = 20;
Peter_2.intelligence = 20;
Peter_2.intelligenceMax = 20;
Peter_2.charisma = 20;
Peter_2.charismaMax = 20;
Peter_2.healthPoint = 35;
Peter_2.healthPointMax = 35;
Peter_2.magicPoint = 0;
Peter_2.magicPointMax = 0;
Peter_2.energyPoint = 30;
Peter_2.energyPointMax = 30;
Peter_2.money = 10;
Peter_2.probability = 0.10;
Peter_2.x = 500;
Peter_2.y = 200;
Peter_2.w = 300;
Peter_2.h = 400;
Peter_2.xStatusBox = 430;
Peter_2.yStatusBox = 30;

let Jasper_3 = new Character;

Jasper_3.characterId = 3;
Jasper_3.level = 50;
Jasper_3.experience = 50;
Jasper_3.name = "Jasper";
Jasper_3.occupation = "Noble";
Jasper_3.personality = "Gullible, Alcoholic, Stupid";
Jasper_3.strength = 30;
Jasper_3.strengthMax = 30;
Jasper_3.intelligence = 0;
Jasper_3.intelligenceMax = 0;
Jasper_3.charisma = 0;
Jasper_3.charismaMax = 0;
Jasper_3.healthPoint = 40;
Jasper_3.healthPointMax = 40;
Jasper_3.magicPoint = 0;
Jasper_3.magicPointMax = 0;
Jasper_3.energyPoint = 40;
Jasper_3.energyPointMax = 40;
Jasper_3.money = 50;
Jasper_3.probability = 0.20;
Jasper_3.x = 500;
Jasper_3.y = 210;
Jasper_3.w = 280;
Jasper_3.h = 420;
Jasper_3.xStatusBox = 463;
Jasper_3.yStatusBox = 12;

let Agnes_4 = new Character;

Agnes_4.characterId = 4;
Agnes_4.level = 0;
Agnes_4.experience = 0;
Agnes_4.name = "Agnes";
Agnes_4.occupation = "Noble";
Agnes_4.personality = "Empathetic, Outgoing, Assertive";
Agnes_4.strength = 35;
Agnes_4.strengthMax = 35;
Agnes_4.intelligence = 45;
Agnes_4.intelligenceMax = 45;
Agnes_4.charisma = 0;
Agnes_4.charismaMax = 0;
Agnes_4.healthPoint = 45;
Agnes_4.healthPointMax = 45;
Agnes_4.magicPoint = 0;
Agnes_4.magicPointMax = 0;
Agnes_4.energyPoint = 45;
Agnes_4.energyPointMax = 45;
Agnes_4.money = 50;
Agnes_4.probability = 0.30;
Agnes_4.x = 520;
Agnes_4.y = 210;
Agnes_4.w = 240;
Agnes_4.h = 380;
Agnes_4.xStatusBox = 450;
Agnes_4.yStatusBox = 13;

let Louis20th_5 = new Character;

Louis20th_5.characterId = 5;
Louis20th_5.level = 99;
Louis20th_5.experience = 10000;
Louis20th_5.name = "Louis the 20th";
Louis20th_5.occupation = "King";
Louis20th_5.personality = "Violent, Ignorant, Selfish";
Louis20th_5.strength = 99;
Louis20th_5.strengthMax = 99;
Louis20th_5.intelligence = 0;
Louis20th_5.intelligenceMax = 0;
Louis20th_5.charisma = 0;
Louis20th_5.charismaMax = 0;
Louis20th_5.healthPoint = 99;
Louis20th_5.healthPointMax = 99;
Louis20th_5.magicPoint = 10;
Louis20th_5.magicPointMax = 10;
Louis20th_5.energyPoint = 99;
Louis20th_5.energyPointMax = 99;
Louis20th_5.money = 10000;
Louis20th_5.probability = 0.40;
Louis20th_5.x = 400;
Louis20th_5.y = 220;
Louis20th_5.w = 300;
Louis20th_5.h = 380;
Louis20th_5.xStatusBox = 365;
Louis20th_5.yStatusBox = 41;

let Gandalf_6 = new Character;

Gandalf_6.characterId = 6;
Gandalf_6.level = 80;
Gandalf_6.experience = 3500;
Gandalf_6.name = "Gandalf";
Gandalf_6.occupation = "Mage";
Gandalf_6.personality = "Dominnering, Magical, Threatening";
Gandalf_6.strength = 70;
Gandalf_6.strengthMax = 70;
Gandalf_6.intelligence = 70;
Gandalf_6.intelligenceMax = 70;
Gandalf_6.charisma = 30;
Gandalf_6.charismaMax = 30;
Gandalf_6.healthPoint = 70;
Gandalf_6.healthPointMax = 70;
Gandalf_6.magicPoint = 70;
Gandalf_6.magicPointMax = 70;
Gandalf_6.energyPoint = 70;
Gandalf_6.energyPointMax = 70;
Gandalf_6.money = 3000;
Gandalf_6.probability = 0.50;
Gandalf_6.x = 440;
Gandalf_6.y = 190;
Gandalf_6.w = 240;
Gandalf_6.h = 380;
Gandalf_6.xStatusBox = 410;
Gandalf_6.yStatusBox = 35;

let Thug_7 = new Character;

Thug_7.characterId = 7;
Thug_7.level = 5;
Thug_7.experience = 10;
Thug_7.name = "Thug";
Thug_7.occupation = "Monster";
Thug_7.personality = "";
Thug_7.strength = 10;
Thug_7.strengthMax = 10;
Thug_7.intelligence = 5;
Thug_7.intelligenceMax = 5;
Thug_7.charisma = 5;
Thug_7.charismaMax = 5;
Thug_7.healthPoint = 15;
Thug_7.healthPointMax = 15;
Thug_7.magicPoint = 0;
Thug_7.magicPointMax = 0;
Thug_7.energyPoint = 10;
Thug_7.energyPointMax = 10;
Thug_7.money = 15;
Thug_7.probability = 0.10;
Thug_7.x = 450;
Thug_7.y = 230;
Thug_7.w = 240;
Thug_7.h = 380;
Thug_7.xStatusBox = 430;
Thug_7.yStatusBox = 50;


let Robber_8 = new Character;

Robber_8.characterId = 8;
Robber_8.level = 10;
Robber_8.experience = 40;
Robber_8.name = "Robber";
Robber_8.occupation = "Monster";
Robber_8.personality = "";
Robber_8.strength = 13;
Robber_8.strengthMax = 13;
Robber_8.intelligence = 6;
Robber_8.intelligenceMax = 6;
Robber_8.charisma = 6;
Robber_8.charismaMax = 6;
Robber_8.healthPoint = 18;
Robber_8.healthPointMax = 18;
Robber_8.magicPoint = 0;
Robber_8.magicPointMax = 0;
Robber_8.energyPoint = 13;
Robber_8.energyPointMax = 13;
Robber_8.money = 45;
Robber_8.probability = 0.15;
Robber_8.x = 465;
Robber_8.y = 210;
Robber_8.w = 230;
Robber_8.h = 380;
Robber_8.xStatusBox = 435;
Robber_8.yStatusBox = 18;

let Goblin_9 = new Character;

Goblin_9.characterId = 9;
Goblin_9.level = 10;
Goblin_9.experience = 30;
Goblin_9.name = "Goblin";
Goblin_9.occupation = "Monster";
Goblin_9.personality = "";
Goblin_9.strength = 16;
Goblin_9.strengthMax = 16;
Goblin_9.intelligence = 5;
Goblin_9.intelligenceMax = 5;
Goblin_9.charisma = 7;
Goblin_9.charismaMax = 7;
Goblin_9.healthPoint = 21;
Goblin_9.healthPointMax = 21;
Goblin_9.magicPoint = 0;
Goblin_9.magicPointMax = 0;
Goblin_9.energyPoint = 16;
Goblin_9.energyPointMax = 16;
Goblin_9.money = 30;
Goblin_9.probability = 0.20;
Goblin_9.x = 570;
Goblin_9.y = 280;
Goblin_9.w = 140;
Goblin_9.h = 180;
Goblin_9.xStatusBox = 530;
Goblin_9.yStatusBox = 175;

let Ogre_10 = new Character;

Ogre_10.characterId = 10;
Ogre_10.level = 15;
Ogre_10.experience = 50;
Ogre_10.name = "Ogre";
Ogre_10.occupation = "Monster";
Ogre_10.personality = "";
Ogre_10.strength = 19;
Ogre_10.strengthMax = 19;
Ogre_10.intelligence = 6;
Ogre_10.intelligenceMax = 6;
Ogre_10.charisma = 9;
Ogre_10.charismaMax = 9;
Ogre_10.healthPoint = 25;
Ogre_10.healthPointMax = 25;
Ogre_10.magicPoint = 0;
Ogre_10.magicPointMax = 0;
Ogre_10.energyPoint = 19;
Ogre_10.energyPointMax = 19;
Ogre_10.money = 50;
Ogre_10.probability = 0.25;
Ogre_10.x = 492;
Ogre_10.y = 200;
Ogre_10.w = 450;
Ogre_10.h = 400;
Ogre_10.xStatusBox = 470;
Ogre_10.yStatusBox = 30;

let Gargoyle_11 = new Character;

Gargoyle_11.characterId = 11;
Gargoyle_11.level = 30;
Gargoyle_11.experience = 100;
Gargoyle_11.name = "Gargoyle";
Gargoyle_11.occupation = "Monster";
Gargoyle_11.personality = "";
Gargoyle_11.strength = 23;
Gargoyle_11.strengthMax = 23;
Gargoyle_11.intelligence = 7;
Gargoyle_11.intelligenceMax = 7;
Gargoyle_11.charisma = 11;
Gargoyle_11.charismaMax = 11;
Gargoyle_11.healthPoint = 30;
Gargoyle_11.healthPointMax = 30;
Gargoyle_11.magicPoint = 50;
Gargoyle_11.magicPointMax = 50;
Gargoyle_11.energyPoint = 24;
Gargoyle_11.energyPointMax = 24;
Gargoyle_11.money = 125;
Gargoyle_11.probability = 0.30;
Gargoyle_11.x = 500;
Gargoyle_11.y = 235;
Gargoyle_11.w = 400;
Gargoyle_11.h = 370;
Gargoyle_11.xStatusBox = 453;
Gargoyle_11.yStatusBox = 90;

let Minotaur_12 = new Character;

Minotaur_12.characterId = 12;
Minotaur_12.level = 50;
Minotaur_12.experience = 200;
Minotaur_12.name = "Minotaur";
Minotaur_12.occupation = "Monster";
Minotaur_12.personality = "";
Minotaur_12.strength = 35;
Minotaur_12.strengthMax = 35;
Minotaur_12.intelligence = 45;
Minotaur_12.intelligenceMax = 45;
Minotaur_12.charisma = 50;
Minotaur_12.charismaMax = 50;
Minotaur_12.healthPoint = 40;
Minotaur_12.healthPointMax = 40;
Minotaur_12.magicPoint = 60;
Minotaur_12.magicPointMax = 60;
Minotaur_12.energyPoint = 40;
Minotaur_12.energyPointMax = 40;
Minotaur_12.money = 250;
Minotaur_12.probability = 0.40;
Minotaur_12.x = 470;
Minotaur_12.y = 200;
Minotaur_12.w = 400;
Minotaur_12.h = 400;
Minotaur_12.xStatusBox = 510;
Minotaur_12.yStatusBox = 25;

let Dragon_13 = new Character;

Dragon_13.characterId = 13;
Dragon_13.level = 95;
Dragon_13.experience = 1000;
Dragon_13.name = "Dragon";
Dragon_13.occupation = "Monster";
Dragon_13.personality = "";
Dragon_13.strength = 70;
Dragon_13.strengthMax = 70;
Dragon_13.intelligence = 70;
Dragon_13.intelligenceMax = 70;
Dragon_13.charisma = 70;
Dragon_13.charismaMax = 70;
Dragon_13.healthPoint = 70;
Dragon_13.healthPointMax = 70;
Dragon_13.magicPoint = 70;
Dragon_13.magicPointMax = 70;
Dragon_13.energyPoint = 70;
Dragon_13.energyPointMax = 70;
Dragon_13.money = 1000;
Dragon_13.probability = 0.50;
Dragon_13.x = 420;
Dragon_13.y = 150;
Dragon_13.w = 900;
Dragon_13.h = 600;
Dragon_13.xStatusBox = 430;
Dragon_13.yStatusBox = 25;

let characters = [];

characters.push(Daphne_1);
characters.push(Peter_2);
characters.push(Jasper_3);
characters.push(Agnes_4);
characters.push(Louis20th_5);
characters.push(Gandalf_6);
characters.push(Thug_7);
characters.push(Robber_8);
characters.push(Goblin_9);
characters.push(Ogre_10);
characters.push(Gargoyle_11);
characters.push(Minotaur_12);
characters.push(Dragon_13);


