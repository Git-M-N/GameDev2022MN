import { Level } from "../Level.js";
import { Player } from "../Objects/Player.js";
import { Rectangle } from "../Objects/Rectangle.js";
import { Box } from "../Objects/Box.js";
import { Goal } from "../Objects/Goal.js";

export const level1 = new Level({
     size: [4000, 600],
    objects: [
   
new Goal({ pos: [3900, 30], size: [30, 30], color: "black" }),
new Player({ pos: [20, 500], size: [50, 50] }),

new Rectangle({ pos: [10 , 0], size: [300, 30], color: "white" }),
new Box({ pos: [200 , 50], size: [10, 50], color: "blue" }),
new Box({ pos: [200 , 120], size: [10, 50], color: "blue" }),

//Ground
new Rectangle({ pos: [0 , 560], size: [2000, 40], color: "saddlebrown" }),
new Rectangle({ pos: [0 , 550], size: [2000, 10], color: "green" }),
new Rectangle({ pos: [2000 , 560], size: [1000, 40], color: "blue" }),
new Rectangle({ pos: [3000 , 560], size: [1000, 40], color: "saddlebrown" }),
new Rectangle({ pos: [3000 , 550], size: [1000, 10], color: "green" }),

//Tree
new Rectangle({ pos: [350 , 300], size: [40, 250], color: "saddlebrown" }),
new Rectangle({ pos: [310 , 220], size: [40, 180], color: "darkgreen" }),
new Rectangle({ pos: [390 , 220], size: [40, 180], color: "darkgreen" }),
new Rectangle({ pos: [270 , 280], size: [40, 80], color: "darkgreen" }),
new Rectangle({ pos: [430 , 280], size: [40, 80], color: "darkgreen" }),
new Rectangle({ pos: [350 , 180], size: [40, 120], color: "darkgreen" }),
new Box({ pos: [320, 400], size: [20, 20], color: "red" }),
new Box({ pos: [280, 360], size: [20, 20], color: "red" }),
new Box({ pos: [400, 400], size: [20, 20], color: "red" }),
new Box({ pos: [440, 360], size: [20, 20], color: "red" }),

//Sign
new Rectangle({ pos: [1000 , 470], size: [20, 80], color: "peru" }),
new Rectangle({ pos: [950 , 460], size: [120, 10], color: "peru" }),
new Rectangle({ pos: [950 , 450], size: [80, 20], color: "peru" }),
new Rectangle({ pos: [1030 , 450], size: [20, 20], color: "red" }),
new Rectangle({ pos: [1050 , 450], size: [20, 20], color: "peru" }),
new Rectangle({ pos: [950 , 430], size: [120, 20], color: "red" }),
new Rectangle({ pos: [950 , 410], size: [80, 20], color: "peru" }),
new Rectangle({ pos: [1030 , 410], size: [20, 20], color: "red" }),
new Rectangle({ pos: [1050 , 410], size: [20, 20], color: "peru" }),

//Boat
new Rectangle({ pos: [2500 , 540], size: [200, 20], color: "peru" }),
new Rectangle({ pos: [2480 , 520], size: [180, 20], color: "peru" }),
new Rectangle({ pos: [2660 , 520], size: [20, 20], color: "saddlebrown" }),
new Rectangle({ pos: [2640 , 500], size: [20, 20], color: "saddlebrown" }),
new Rectangle({ pos: [2620 , 480], size: [20, 20], color: "saddlebrown" }),
new Rectangle({ pos: [2600 , 480], size: [20, 20], color: "teal" }),
new Rectangle({ pos: [2600 , 460], size: [20, 20], color: "saddlebrown" }),
new Rectangle({ pos: [2620 , 460], size: [20, 20], color: "peachpuff" }),
new Rectangle({ pos: [2580 , 440], size: [20, 20], color: "saddlebrown" }),
new Rectangle({ pos: [2600 , 440], size: [40, 20], color: "teal" }),
new Rectangle({ pos: [2560 , 440], size: [20, 20], color: "peachpuff" }),
new Rectangle({ pos: [2560 , 420], size: [20, 20], color: "saddlebrown" }),
new Rectangle({ pos: [2620 , 420], size: [20, 20], color: "peachpuff" }),
new Rectangle({ pos: [2540 , 400], size: [20, 20], color: "saddlebrown" }),
new Rectangle({ pos: [2600 , 400], size: [20, 20], color: "peachpuff" }),
new Rectangle({ pos: [2620 , 400], size: [20, 20], color: "yellow" }),
new Rectangle({ pos: [2600 , 380], size: [40, 20], color: "yellow" }),
new Rectangle({ pos: [2660 , 500], size: [60, 20], color: "peru" }),
new Rectangle({ pos: [2680 , 520], size: [20, 20], color: "peru" }),
new Rectangle({ pos: [2460 , 500], size: [180, 20], color: "peru" }),

//Bush
new Rectangle({ pos: [3500 , 490], size: [20, 60], color: "darkgreen" }),
new Rectangle({ pos: [3520 , 470], size: [40, 20], color: "darkgreen" }),
new Rectangle({ pos: [3560 , 450], size: [20, 20], color: "darkgreen" }),
new Rectangle({ pos: [3580 , 430], size: [20, 20], color: "darkgreen" }),
new Rectangle({ pos: [3600 , 410], size: [80, 20], color: "darkgreen" }),
new Rectangle({ pos: [3680 , 430], size: [20, 20], color: "darkgreen" }),
new Rectangle({ pos: [3700 , 450], size: [20, 40], color: "darkgreen" }),
new Rectangle({ pos: [3720 , 490], size: [20, 20], color: "darkgreen" }),
new Rectangle({ pos: [3740 , 510], size: [20, 40], color: "darkgreen" }),
new Rectangle({ pos: [3520 , 530], size: [60, 20], color: "chartreuse" }),
new Rectangle({ pos: [3580 , 530], size: [20, 20], color: "red" }),
new Rectangle({ pos: [3600 , 530], size: [40, 20], color: "chartreuse" }),
new Rectangle({ pos: [3640 , 530], size: [20, 20], color: "red" }),
new Rectangle({ pos: [3660 , 530], size: [80, 20], color: "chartreuse" }),

new Rectangle({ pos: [3520 , 510], size: [20, 20], color: "chartreuse" }),
new Rectangle({ pos: [3540 , 510], size: [20, 20], color: "red" }),
new Rectangle({ pos: [3560 , 510], size: [120, 20], color: "chartreuse" }),
new Rectangle({ pos: [3680 , 510], size: [20, 20], color: "red" }),
new Rectangle({ pos: [3700 , 510], size: [40, 20], color: "chartreuse" }),

new Rectangle({ pos: [3520 , 490], size: [60, 20], color: "chartreuse" }),
new Rectangle({ pos: [3580 , 490], size: [20, 20], color: "red" }),
new Rectangle({ pos: [3600 , 490], size: [120, 20], color: "chartreuse" }),

new Rectangle({ pos: [3560 , 470], size: [80, 20], color: "chartreuse" }),
new Rectangle({ pos: [3640 , 470], size: [20, 20], color: "red" }),
new Rectangle({ pos: [3660 , 470], size: [40, 20], color: "chartreuse" }),

new Rectangle({ pos: [3580 , 450], size: [20, 20], color: "chartreuse" }),
new Rectangle({ pos: [3600 , 450], size: [20, 20], color: "red" }),
new Rectangle({ pos: [3620 , 450], size: [80, 20], color: "chartreuse" }),
new Rectangle({ pos: [3600 , 430], size: [80, 20], color: "chartreuse" }),

new Rectangle({ pos: [3980 , 160], size: [20, 60], color: "white" }),


    ],
});


