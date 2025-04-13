
/// <reference types="vite/client" />

declare namespace THREE {
  interface Object3DEventMap {
    [key: string]: any;
  }

  interface NormalBufferAttributes {
    [key: string]: any;
  }

  class Object3D {
    position: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
    scale: {
      x: number;
      y: number;
      z: number;
    };
  }
  
  class BufferGeometry<T = NormalBufferAttributes> {}
  
  class Material {
    needsUpdate: boolean;
  }
  
  class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
    TEventMap extends Object3DEventMap = Object3DEventMap
  > extends Object3D {
    geometry: TGeometry;
    material: TMaterial;
    rotation: {
      x: number;
      y: number;
      z: number;
    };
    isMesh: boolean;
    type: string;
    updateMorphTargets(): void;
    getVertexPosition(index: number, target: any): any;
  }
}

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.gltf" {
  const src: string;
  export default src;
}
