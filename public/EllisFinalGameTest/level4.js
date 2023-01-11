import { Level } from "./Level.js";
import { Player } from "./Player.js";
import { Rectangle } from "./Rectangle.js";
import { Box } from "./Boxy.js";
import { Goal } from "./Goal.js";

export const level4= new Level({
    size: [800, 600],
    objects: [
        new Goal({ pos: [700, 20], size: [50, 50], color: "black" }),
        new Player({ pos: [20, 500], size: [40, 40] }),
        new Rectangle({ pos: [600 , 100], size: [200, 10], color: "blue" }),
        new Rectangle({ pos: [510 , 200], size: [20, 10], color: "blue" }),
        new Rectangle({ pos: [500 , -400], size: [10, 700], color: "blue" }),
        new Rectangle({ pos: [60 , 100], size: [200, 10], color: "blue" }),
        new Rectangle({ pos: [0 , 300], size: [100, 10], color: "blue" }),
        new Box({ pos: [180, 520], size: [80, 80], color: "orange" }),
        new Box({ pos: [40, 240], size: [60, 60], color: "green" }),
        new Box({ pos: [150, 0], size: [80, 100], color: "blue" })
    ],
});

