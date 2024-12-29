import * as THREE from 'three'

export class Teacher {
  mesh: THREE.Mesh;
  speed: number = 0.1;

  constructor(scene: THREE.Scene) {
    const geometry = new THREE.CylinderGeometry(0.3, 0.5, 2, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 1, -7);
    scene.add(this.mesh);
  }

  moveLeft() {
    this.mesh.position.x -= this.speed;
  }

  moveRight() {
    this.mesh.position.x += this.speed;
  }

  moveForward() {
    this.mesh.position.z -= this.speed;
  }

  moveBackward() {
    this.mesh.position.z += this.speed;
  }
}

