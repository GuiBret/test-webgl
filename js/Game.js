class Game {
    constructor(canvasId) {
        let canvas = document.getElementById(canvasId),
            engine = new BABYLON.Engine(canvas, true),
            _this = this;

        this.scene = this.initScene(engine)

        var player = new Player(this, canvas),
            arena = new Arena(this);

        engine.runRenderLoop(function() {
            _this.scene.render();
        });

        window.addEventListener("resize", function() {
            if(engine) {
                engine.resize();
            }
        }, false);


    }


    initScene(engine) {
        let scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0,0,0);
        return scene;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    new Game('renderCanvas');
})
