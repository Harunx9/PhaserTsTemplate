///<reference path="../bin/dependencies/phaser/typescript/phaser.d.ts" />

namespace Engine.Core {
    export class Game {
        private game: Phaser.Game

        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { create: this.create });
        }

        public create(): void {

        }
    }

    window.addEventListener('load', function loadHandler(event: Event) {
        window.removeEventListener('load', loadHandler, false)
        var game = new Game();
    })
}