import * as THREE from "three";
import { Font } from "three/examples/jsm/loaders/FontLoader";

type ParticleTextData = {
  text: string;
  amount: number;
  particleSize: number;
  particleColor: number;
  textSize: number;
  area: number;
  ease: number;
}

export default class Environment {

  font: Font;
  text: string;
  particle: THREE.Texture;
  scene: THREE.Scene;
  container: any;
  createParticles!: CreateParticles;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;

  constructor(font: Font, particle: THREE.Texture, text: string) {
    this.font = font;
    this.text = text;
    this.particle = particle;
    this.container = document.querySelector("#magic");
    this.scene = new THREE.Scene();
    this.createCamera();
    this.setup();
    this.createRenderer();
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  setup() {
    this.createParticles = new CreateParticles(
      this.scene,
      this.font,
      this.particle,
      this.camera,
      this.renderer,
      this.text
    );
  }

  render() {
    this.createParticles.render();
    this.renderer.setClearColor(0x000000, 0.2);
    this.renderer.render(this.scene, this.camera);
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      65,
      this.container.clientWidth / this.container.clientHeight,
      1,
      10000
    );
    this.camera.position.set(0, 0, 100);
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);

    this.renderer.setAnimationLoop(() => {
      this.render();
    });
  }

  onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }
}

class CreateParticles {
  scene: THREE.Scene;
  font: Font;
  particleImg: THREE.Texture;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  text: string;
  raycaster: THREE.Raycaster;
  mouse: THREE.Vector2;
  colorChange: THREE.Color;
  buttom: Boolean;
  data: ParticleTextData;
  planeArea!: THREE.Mesh;
  currentPosition?: THREE.Vector3;
  particles!: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
  geometryCopy!: THREE.BufferGeometry;
  touchable: Boolean;


  constructor(scene: THREE.Scene, font: Font, particleImg: THREE.Texture, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, text: string) {
    this.scene = scene;
    this.font = font;
    this.text = text;
    this.colorChange = new THREE.Color();
    const size = Math.min(20, window.screen.width / 15 / 8);
    const area = size ** 2 * 1.5
    this.data = {
      text: this.text,
      amount: 1500,
      particleSize: 1,
      particleColor: 0xffffff,
      textSize: Math.min(20, window.screen.width / 15 / 8),
      area: area,
      ease: 0.05,
    };
    this.particleImg = particleImg;
    this.camera = camera;
    this.setup();
    this.renderer = renderer;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-200, 200);


    this.buttom = false;
    this.touchable = false;

    this.bindEvents();
  }

  setup() {
    const geometry = new THREE.PlaneGeometry(
      this.visibleWidthAtZDepth(100, this.camera),
      this.visibleHeightAtZDepth(100, this.camera)
    );
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true });
    this.planeArea = new THREE.Mesh(geometry, material);
    this.planeArea.visible = false;
    this.createText();
  }

  bindEvents() {
    document.addEventListener("mousedown", this.onMouseDown.bind(this));
    document.addEventListener("mousemove", this.onMouseMove.bind(this));
    document.addEventListener("mouseup", this.onMouseUp.bind(this));
    document.addEventListener("touchstart", this.onTouchStart.bind(this));
    document.addEventListener("touchmove", this.onTouchMove.bind(this));
    document.addEventListener("touchend", this.onTouchEnd.bind(this));
  }

  onMouseDown(event: MouseEvent) {
    // console.log("down")
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    this.currentPosition = this.camera.position.clone().add(dir.multiplyScalar(distance));

    this.particles.geometry.attributes.position;
    this.buttom = true;
    this.data.ease = 0.01;
    this.touchable = false;
  }

  onMouseUp() {
    // console.log("up")
    this.buttom = false;
    this.data.ease = 0.05;
    this.touchable = false;
  }

  onMouseMove(event: MouseEvent) {
    // console.log("move")
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.touchable = false;
  }

  onTouchStart(event: TouchEvent) {
    this.mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;

    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    this.currentPosition = this.camera.position.clone().add(dir.multiplyScalar(distance));

    this.particles.geometry.attributes.position;
    this.buttom = true;
    this.data.ease = 0.01;
    this.touchable = true;
  }

  onTouchEnd() {
    this.buttom = false;
    this.data.ease = 0.05;
    this.touchable = true;
  }

  onTouchMove(event: TouchEvent) {
    this.mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
    this.touchable = true;
  }

  render() {
    const time = ((0.001 * performance.now()) % 12) / 12;
    const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObject(this.planeArea);

    if (intersects.length > 0) {
      const pos = this.particles.geometry.attributes.position;
      const copy = this.geometryCopy.attributes.position;
      const coulors = this.particles.geometry.attributes.customColor;
      let size: any = this.particles.geometry.attributes.size;

      const mx = intersects[0].point.x;
      const my = intersects[0].point.y;
      const mz = intersects[0].point.z;

      for (var i = 0, l = pos.count; i < l; i++) {
        const initX = copy.getX(i);
        const initY = copy.getY(i);
        const initZ = copy.getZ(i);

        let px = pos.getX(i);
        let py = pos.getY(i);
        let pz = pos.getZ(i);

        this.colorChange.setHSL(0.5, 1, 1);
        coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
        coulors.needsUpdate = true;

        size.array[i] = this.data.particleSize;
        size.needsUpdate = true;

        let dx = mx - px;
        let dy = my - py;
        const dz = mz - pz;

        const mouseDistance = this.distance(mx, my, px, py);
        let d = (dx = mx - px) * dx + (dy = my - py) * dy;
        const f = -this.data.area / d;

        if (this.buttom) {
          const t = Math.atan2(dy, dx);
          px -= f * Math.cos(t);
          py -= f * Math.sin(t);

          this.colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
          coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
          coulors.needsUpdate = true;

          if (px > initX + 70 || px < initX - 70 || py > initY + 70 || py < initY - 70) {
            this.colorChange.setHSL(0.15, 1.0, 0.5);
            coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
            coulors.needsUpdate = true;
          }
        } else if (!this.touchable) {
          if (mouseDistance < this.data.area) {
            if (i % 5 === 0) {
              const t = Math.atan2(dy, dx);
              px -= 0.03 * Math.cos(t);
              py -= 0.03 * Math.sin(t);

              this.colorChange.setHSL(0.15, 1.0, 0.5);
              coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
              coulors.needsUpdate = true;

              size.array[i] = this.data.particleSize / 1.2;
              size.needsUpdate = true;
            } else {
              const t = Math.atan2(dy, dx);
              px += f * Math.cos(t);
              py += f * Math.sin(t);

              pos.setXYZ(i, px, py, pz);
              pos.needsUpdate = true;

              size.array[i] = this.data.particleSize * 1.3;
              size.needsUpdate = true;
            }

            if (px > initX + 10 || px < initX - 10 || py > initY + 10 || py < initY - 10) {
              this.colorChange.setHSL(0.15, 1.0, 0.5);
              coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
              coulors.needsUpdate = true;

              size.array[i] = this.data.particleSize / 1.8;
              size.needsUpdate = true;
            }
          }
        }

        px += (initX - px) * this.data.ease;
        py += (initY - py) * this.data.ease;
        pz += (initZ - pz) * this.data.ease;

        pos.setXYZ(i, px, py, pz);
        pos.needsUpdate = true;
      }
    }
  }

  createText() {
    let thePoints: THREE.Vector3[] = [];

    let shapes = this.font.generateShapes(this.data.text, this.data.textSize);
    const geometry: THREE.ShapeGeometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid = -0.5 * (geometry.boundingBox!.max.x - geometry.boundingBox!.min.x);
    const yMid = (geometry.boundingBox!.max.y - geometry.boundingBox!.min.y) / 2.85;
    console.log(geometry.boundingBox!)

    geometry.center();

    let holeShapes = [];
    let pathShapes: THREE.Path[] = [];

    for (let q = 0; q < shapes.length; q++) {
      let shape = shapes[q];

      if (shape.holes && shape.holes.length > 0) {
        for (let j = 0; j < shape.holes.length; j++) {
          let hole = shape.holes[j];
          holeShapes.push(hole);
        }
      }
    }
    pathShapes.push.apply(shapes, holeShapes);

    let colors: number[] = [];
    let sizes: number[] = [];
    for (let x = 0; x < shapes.length; x++) {
      let shape = shapes[x];

      const amountPoints = shape.type === "Path" ? this.data.amount / 2 : this.data.amount;

      let points = shape.getSpacedPoints(amountPoints);

      points.forEach((element, z) => {
        const a = new THREE.Vector3(element.x, element.y, 0);
        thePoints.push(a);
        colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
        sizes.push(1);
      });
    }
    for (let x = 0; x < pathShapes.length; x++) {
      let shape = pathShapes[x];

      const amountPoints = shape.type === "Path" ? this.data.amount / 2 : this.data.amount;

      let points = shape.getSpacedPoints(amountPoints);

      points.forEach((element, z) => {
        const a = new THREE.Vector3(element.x, element.y, 0);
        thePoints.push(a);
        colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
        sizes.push(1);
      });
    }

    let geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
    geoParticles.translate(xMid, yMid, 0);

    geoParticles.setAttribute("customColor", new THREE.Float32BufferAttribute(colors, 3));
    geoParticles.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
        pointTexture: { value: this.particleImg },
      },
      vertexShader: `attribute float size;
            attribute vec3 customColor;
            varying vec3 vColor;
            void main() {
              vColor = customColor;
              vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
              gl_PointSize = size * ( 300.0 / -mvPosition.z );
              gl_Position = projectionMatrix * mvPosition;
            }`,
      fragmentShader: `uniform vec3 color;
            uniform sampler2D pointTexture;
            varying vec3 vColor;
            void main() {
              gl_FragColor = vec4( color * vColor, 1.0 );
              gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
            }`,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    this.particles = new THREE.Points(geoParticles, material);
    this.scene.add(this.particles);

    this.geometryCopy = new THREE.BufferGeometry();
    this.geometryCopy.copy(this.particles.geometry);
  }

  visibleHeightAtZDepth(depth: number, camera: THREE.PerspectiveCamera) {
    const cameraOffset = camera.position.z;
    if (depth < cameraOffset) depth -= cameraOffset;
    else depth += cameraOffset;

    const vFOV = (camera.fov * Math.PI) / 180;

    return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
  }

  visibleWidthAtZDepth(depth: number, camera: THREE.PerspectiveCamera) {
    const height = this.visibleHeightAtZDepth(depth, camera);
    return height * camera.aspect;
  }

  distance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }
}