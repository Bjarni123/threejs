import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.159.0/three.module.min.js";

function createRenderer() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.physicallyCorrectLights = true;

    renderer.shadowMap.enabled = true;

    return renderer;
}

function createScene() {
    const scene = new THREE.Scene();

    // scene.background = new Color('red');

    return scene;
}

function createCamera() {
    const camera = new THREE.PerspectiveCamera(
            35, // fov = Field Of View
            1, // aspect ratio (dummy value)
            0.1, // near clipping plane
            100, // far clipping plane
    );

    // move the camera back so we can view the scene
    camera.position.set(0, 0, 15);

    return camera;
}

export { createRenderer, createCamera, createScene }