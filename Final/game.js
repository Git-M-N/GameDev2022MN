import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";
import { level4 } from "./levels/level4.js";
import { level5 } from "./levels/level5.js";
import { writeInfo } from "./info.js";

const levelCount = document.getElementById("levelCount");

export class Game {
    constructor(levelList) {
        this.levelList = [];
        for (const lev of levelList) {
            this.levelList.push(lev);
            lev.game = this;
            lev.index = this.levelList.length;
        }
        this.currentLevelIndex = 1;
    }

    get currentLevel() {
        return this.levelList[this.currentLevelIndex - 1];
    }

    start() {
        if (this.levelList.length === 0) return;
        this.currentLevel.drawObjects();
        this.currentLevel.addControls();
        levelCount.innerText = "Level " + this.currentLevelIndex;
        writeInfo(
            "Press 'Space' to start or pause the game.<br>" +
                "Press 'r' to restart the level." +
                    "Use the arrows ro move"
        );
    }

    switchToNextLevel() {
        this.currentLevelIndex++;
        if (this.currentLevelIndex > this.levelList.length) {
            writeInfo("You won the game!");
            return;
        }
        levelCount.innerText = "Level " + this.currentLevelIndex;
        this.currentLevel.addControls();
        this.currentLevel.start();
    }
}
 
export const game = new Game([level1, level2, level3, level4, level5]);
