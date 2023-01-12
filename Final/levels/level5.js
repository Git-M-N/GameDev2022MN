import { Level } from "../Level.js";
import { Player } from "../Objects/Player.js";
import { Rectangle } from "../Objects/Rectangle.js";
import { Box } from "../Objects/Box.js";
import { Goal } from "../Objects/Goal.js";

export const level5= new Level({
    size: [800, 600],
    objects: [

       
new Goal({ pos: [700, 20], size: [50, 50], color: "black" }),
new Player({ pos: [20, 500], size: [25, 25] }),
new Rectangle({ pos: [150 , 300], size: [10, 200], color: "blue" }),
new Rectangle({ pos: [150 , 550], size: [10, 200], color: "blue" }),
new Rectangle({ pos: [60 , 300], size: [100, 10], color: "blue" }),
new Rectangle({ pos: [150 , 300], size: [50, 10], color: "blue" }),
new Rectangle({ pos: [100 , 100], size: [800, 10], color: "blue" }),
new Rectangle({ pos: [0 , 0], size: [800, 10], color: "blue" }),
new Rectangle({ pos: [0 , 0], size: [10, 800], color: "blue" }),
new Rectangle({ pos: [790 , 10], size: [10, 800], color: "blue" }),
new Rectangle({ pos: [0 , 590], size: [800, 10], color: "blue" }),
new Box({ pos: [150, 500], size: [10, 50], color: "blue" }),
new Box({ pos: [200, 10], size: [10, 35], color: "skyblue" }),
new Rectangle({ pos: [200, 0], size: [10, 100], color: "blue" })
    ],
});


