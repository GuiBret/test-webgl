class Player {
    constructor(game, canvas) {
        this.scene = game.scene;
        this.initCamera(this.scene, canvas);
    }


    initCamera(scene, canvas) {

        // Création caméra
        this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0,5,-10), scene);

        // RAZ du POV de la caméra
        this.camera.setTarget(BABYLON.Vector3.Zero());

        // Affectation du mouvement de la caméra
        this.camera.attachControl(canvas, true);
    }
}
