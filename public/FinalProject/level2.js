import { Level } from "./Level.js";
import { Player } from "./objects/Player.js";
import { Rectangle } from "./objects/Rectangle.js";
import { Box } from "./objects/Box.js";
import { Goal } from "./objects/Goal.js";

export const level2 = new Level({
    size: [800, 600],
    objects: [
        new Goal({ pos: [10, 30], size: [50 ,50], color: "black" }),
        new Player({ pos: [30, 560], size: [40, 40] }),
        new Player({ pos: [630, 560], size: [40, 40] }),
        new Rectangle({ pos: [300, 310], size: [10, 200], color: "blue" }),
        new Rectangle({ pos: [300, 0], size: [10, 290], color: "blue" }),
        new Rectangle({ pos: [300, 530], size: [10, 70], color: "blue" }),
        new Rectangle({ pos: [300, 530], size: [150, 90], color: "blue" }),
        new Rectangle({ pos: [300, 310], size: [150, 30], color: "blue" }),
        new Rectangle({ pos: [700, 400], size: [100, 300], color: "blue" }),
        new Box({ pos: [350, 510], size: [20, 20], color: "teal" }),
        new Box({ pos: [350, 290], size: [20, 20], color: "teal" }),
    ],
});

