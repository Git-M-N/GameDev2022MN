import { Level } from "../Level.js";
import { Player } from "../objects/Player.js";
import { Rectangle } from "../objects/Rectangle.js";
import { Box } from "../Objects/Box.js";
import { Goal } from "../objects/Goal.js";

export const level1 = new Level({
    size: [800, 600],
    objects: [
   
new Goal({ pos: [10, 30], size: [50, 50], color: "black" }),
new Player({ pos: [20, 500], size: [50, 50] }),

//Mario
new Rectangle({ pos: [480 , 590], size: [40, 10], color: "saddlebrown" }),
new Rectangle({ pos: [480 , 580], size: [30, 10], color: "saddlebrown" }),
new Rectangle({ pos: [470 , 570], size: [30, 10], color: "red" }),
new Rectangle({ pos: [420 , 570], size: [30, 10], color: "red" }),
new Rectangle({ pos: [420 , 560], size: [80, 10], color: "red" }),
new Rectangle({ pos: [430 , 550], size: [60, 10], color: "red" }),
new Rectangle({ pos: [430 , 540], size: [10, 10], color: "red" }),
new Rectangle({ pos: [440 , 540], size: [10, 10], color: "yellow" }),
new Rectangle({ pos: [450 , 540], size: [20, 10], color: "red" }),
new Rectangle({ pos: [470 , 540], size: [10, 10], color: "yellow" }),
new Rectangle({ pos: [480 , 540], size: [10, 10], color: "red" }),
new Rectangle({ pos: [450 , 530], size: [20, 10], color: "red" }),
new Rectangle({ pos: [440 , 510], size: [10, 30], color: "red" }),
new Rectangle({ pos: [450 , 510], size: [30, 10], color: "saddlebrown" }),
new Rectangle({ pos: [450 , 520], size: [20, 10], color: "saddlebrown" }),
new Rectangle({ pos: [420 , 540], size: [10, 10], color: "saddlebrown" }),
new Rectangle({ pos: [410 , 520], size: [30, 10], color: "saddlebrown" }),
new Rectangle({ pos: [420 , 510], size: [20, 10], color: "saddlebrown" }),
new Rectangle({ pos: [430 , 500], size: [70, 10], color: "sandybrown" }),
new Rectangle({ pos: [430 , 490], size: [40, 10], color: "sandybrown" }),
new Rectangle({ pos: [470 , 490], size: [40, 10], color: "saddlebrown" }),
new Rectangle({ pos: [410 , 490], size: [20, 10], color: "saddlebrown" }),
new Rectangle({ pos: [410 , 470], size: [10, 20], color: "saddlebrown" }),
new Rectangle({ pos: [470 , 460], size: [10, 20], color: "saddlebrown" }),
new Rectangle({ pos: [480 , 470], size: [30, 10], color: "sandybrown" }),
new Rectangle({ pos: [420 , 460], size: [30, 10], color: "saddlebrown" }),
new Rectangle({ pos: [420 , 450], size: [90, 10], color: "red" }),
new Rectangle({ pos: [430 , 440], size: [50, 10], color: "red" }),
new Rectangle({ pos: [450 , 460], size: [20, 10], color: "sandybrown" }),
new Rectangle({ pos: [480 , 460], size: [10, 20], color: "sandybrown" }),
new Rectangle({ pos: [420 , 470], size: [10, 20], color: "sandybrown" }),
new Rectangle({ pos: [430 , 470], size: [10, 20], color: "saddlebrown" }),
new Rectangle({ pos: [440 , 470], size: [30, 10], color: "sandybrown" }),
new Rectangle({ pos: [440 , 480], size: [10, 10], color: "saddlebrown" }),
new Rectangle({ pos: [450 , 480], size: [30, 10], color: "sandybrown" }),
new Rectangle({ pos: [480 , 480], size: [10, 10], color: "saddlebrown" }),
new Rectangle({ pos: [490 , 480], size: [30, 10], color: "sandybrown" }),
new Rectangle({ pos: [400 , 530], size: [40, 10], color: "saddlebrown" }),
new Rectangle({ pos: [470 , 520], size: [10, 20], color: "red" }),
new Rectangle({ pos: [480 , 520], size: [10, 20], color: "saddlebrown" }),
new Rectangle({ pos: [500 , 520], size: [10, 20], color: "saddlebrown" }),
new Rectangle({ pos: [490 , 520], size: [10, 30], color: "saddlebrown" }),
new Rectangle({ pos: [500 , 520], size: [10, 20], color: "saddlebrown" }),
new Rectangle({ pos: [510 , 530], size: [10, 20], color: "saddlebrown" }),
new Rectangle({ pos: [400 , 540], size: [20, 30], color: "sandybrown" }),
new Rectangle({ pos: [500 , 540], size: [20, 30], color: "sandybrown" }),
new Rectangle({ pos: [420 , 550], size: [10, 10], color: "sandybrown" }),
new Rectangle({ pos: [490 , 550], size: [10, 10], color: "sandybrown" }),
new Rectangle({ pos: [410 , 580], size: [30, 10], color: "saddlebrown" }),
new Rectangle({ pos: [400 , 590], size: [40, 10], color: "saddlebrown" }),



new Rectangle({ pos: [270 , 350], size: [40, 40], color: "saddlebrown" }),
new Rectangle({ pos: [150 , 250], size: [40, 40], color: "saddlebrown" }),

    ],
});


