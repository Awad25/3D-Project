import * as THREE from 'three'

export const loadTexture = (url: string) => {
  return new THREE.TextureLoader().load(url)
}

export const applyTexture = (mesh: THREE.Mesh, textureUrl: string) => {
  const texture = loadTexture(textureUrl)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1)
  
  if (mesh.material instanceof THREE.MeshStandardMaterial) {
    mesh.material.map = texture
    mesh.material.needsUpdate = true
  }
}

