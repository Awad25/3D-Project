import * as THREE from 'three'

export class Raycaster {
  raycaster: THREE.Raycaster
  mouse: THREE.Vector2

  constructor() {
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
  }

  updateMouse(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  intersectObjects(camera: THREE.Camera, objects: THREE.Object3D[]) {
    this.raycaster.setFromCamera(this.mouse, camera)
    return this.raycaster.intersectObjects(objects)
  }
}

