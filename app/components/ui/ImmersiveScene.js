"use client";
import { useEffect, useRef, useState } from "react";

export default function ImmersiveScene() {
  const mountRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mount = mountRef.current;
    if (!mount) return;
    let cleanup = () => {};
    const start = () => {
      const THREE = window.THREE;
      if (!THREE) { setStatus("error:THREE not on window"); return; }
      try { cleanup = bootScene(THREE, mount); setStatus("ready"); }
      catch (err) { console.error("[gvk] scene boot failed:", err); setStatus("error:" + err.message); }
    };
    if (window.THREE) { start(); return () => cleanup(); }
    let script = document.querySelector('script[data-gvk-three]');
    if (!script) {
      script = document.createElement("script");
      script.src = "/three.min.js";
      script.async = false;
      script.dataset.gvkThree = "1";
      document.head.appendChild(script);
    }
    script.addEventListener("load", start, { once: true });
    script.addEventListener("error", () => setStatus("error:script load failed"), { once: true });
    return () => cleanup();
  }, []);

  return (
    <div
      ref={mountRef}
      id="gvk-immersive-mount"
      data-gvk-status={status}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#06030a",
      }}
    />
  );
}

function bootScene(THREE, mount) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x08040a, 1);
  if ("outputColorSpace" in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace || 3001;
  renderer.toneMapping = THREE.ACESFilmicToneMapping || 4;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = false;
  mount.appendChild(renderer.domElement);
  renderer.domElement.style.display = "block";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 3.5, 22);
  camera.lookAt(0, 1, 0);

  const disposables = { geos: [], mats: [], texs: [] };
  const track = (geo, mat, tex) => {
    if (geo) disposables.geos.push(geo);
    if (mat) disposables.mats.push(mat);
    if (tex) disposables.texs.push(tex);
  };

  const buildSkyTex = () => {
    const c = document.createElement("canvas");
    c.width = 2; c.height = 512;
    const ctx = c.getContext("2d");
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0.00, "#030105");
    g.addColorStop(0.12, "#0a040c");
    g.addColorStop(0.28, "#180810");
    g.addColorStop(0.44, "#2e0e08");
    g.addColorStop(0.58, "#5a1a08");
    g.addColorStop(0.70, "#8c2e0a");
    g.addColorStop(0.80, "#c04818");
    g.addColorStop(0.88, "#e06828");
    g.addColorStop(0.94, "#f08030");
    g.addColorStop(1.00, "#f09050");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 2, 512);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace || 3001;
    return tex;
  };

  const skyTex = buildSkyTex();
  const skyGeo = new THREE.SphereGeometry(900, 32, 20);
  const skyMat = new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, depthWrite: false });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  scene.add(sky);
  track(skyGeo, skyMat, skyTex);

  const buildSunTex = () => {
    const c = document.createElement("canvas"); c.width = 256; c.height = 256;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0.00, "rgba(255,245,220,1)");
    g.addColorStop(0.08, "rgba(255,220,160,0.95)");
    g.addColorStop(0.22, "rgba(255,160,80,0.7)");
    g.addColorStop(0.45, "rgba(255,100,40,0.3)");
    g.addColorStop(0.75, "rgba(200,60,20,0.08)");
    g.addColorStop(1.00, "rgba(180,40,10,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace || 3001;
    return t;
  };
  const sunTex = buildSunTex();
  const sunGeo = new THREE.PlaneGeometry(28, 28);
  const sunMat = new THREE.MeshBasicMaterial({ map: sunTex, transparent: true, opacity: 1.0, depthWrite: false, blending: THREE.AdditiveBlending });
  const sunDisc = new THREE.Mesh(sunGeo, sunMat);
  sunDisc.position.set(6, 2.5, -600);
  scene.add(sunDisc);
  track(sunGeo, sunMat, sunTex);

  const buildRayTex = (alpha) => {
    const c = document.createElement("canvas"); c.width = 64; c.height = 512;
    const ctx = c.getContext("2d");
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, `rgba(255,180,80,${alpha})`);
    g.addColorStop(0.4, `rgba(255,140,40,${alpha * 0.5})`);
    g.addColorStop(1, "rgba(255,100,20,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 512);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace || 3001;
    return t;
  };

  const rayGroup = new THREE.Group();
  scene.add(rayGroup);
  const rayAngles = [-0.35, -0.15, 0, 0.12, 0.28, 0.45];
  rayAngles.forEach((angle, i) => {
    const h = 80 + Math.random() * 40;
    const w = 1.5 + Math.random() * 2.5;
    const alpha = 0.04 + Math.random() * 0.06;
    const rTex = buildRayTex(alpha);
    const rGeo = new THREE.PlaneGeometry(w, h);
    const rMat = new THREE.MeshBasicMaterial({ map: rTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    const ray = new THREE.Mesh(rGeo, rMat);
    ray.position.set(angle * 60 + 6, h * 0.25, -80 - i * 8);
    ray.rotation.z = angle * 0.5;
    ray.userData.baseOpacity = alpha;
    ray.userData.phase = i * 0.8;
    rayGroup.add(ray);
    track(rGeo, rMat, rTex);
  });

  const STAR_COUNT = 1800;
  const starPos = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.46;
    const r = 700 + Math.random() * 100;
    starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    starPos[i * 3 + 1] = r * Math.cos(phi) + 80;
    starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xfff0e0, size: 1.1, transparent: true, opacity: 0.55, sizeAttenuation: true, depthWrite: false });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);
  track(starGeo, starMat);

  const EMBER_COUNT = 3200;
  const ePos = new Float32Array(EMBER_COUNT * 3);
  const eCol = new Float32Array(EMBER_COUNT * 3);
  const eVel = new Float32Array(EMBER_COUNT * 3);
  const ePhase = new Float32Array(EMBER_COUNT);

  const emberPalette = [
    [1.0, 0.15, 0.04],
    [1.0, 0.35, 0.08],
    [1.0, 0.55, 0.12],
    [1.0, 0.72, 0.20],
    [1.0, 0.85, 0.35],
    [1.0, 0.92, 0.60],
    [1.0, 0.96, 0.85],
  ];

  for (let i = 0; i < EMBER_COUNT; i++) {
    ePos[i * 3]     = (Math.random() - 0.5) * 80;
    ePos[i * 3 + 1] = -2.8 + Math.random() * 30;
    ePos[i * 3 + 2] = (Math.random() - 0.5) * 60 - 15;
    eVel[i * 3]     = (Math.random() - 0.5) * 0.012;
    eVel[i * 3 + 1] = 0.008 + Math.random() * 0.025;
    eVel[i * 3 + 2] = (Math.random() - 0.5) * 0.006;
    const ci = Math.floor(Math.random() * emberPalette.length);
    eCol[i * 3]     = emberPalette[ci][0];
    eCol[i * 3 + 1] = emberPalette[ci][1];
    eCol[i * 3 + 2] = emberPalette[ci][2];
    ePhase[i] = Math.random() * Math.PI * 2;
  }

  const emberGeo = new THREE.BufferGeometry();
  emberGeo.setAttribute("position", new THREE.BufferAttribute(ePos.slice(), 3));
  emberGeo.setAttribute("color", new THREE.BufferAttribute(eCol, 3));

  const buildEmberTex = () => {
    const c = document.createElement("canvas"); c.width = 64; c.height = 64;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0.00, "rgba(255,255,255,1)");
    g.addColorStop(0.18, "rgba(255,240,200,0.85)");
    g.addColorStop(0.45, "rgba(255,160,80,0.4)");
    g.addColorStop(0.75, "rgba(255,80,20,0.12)");
    g.addColorStop(1.00, "rgba(200,40,10,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace || 3001;
    return t;
  };
  const emberTex = buildEmberTex();

  const emberMat = new THREE.PointsMaterial({
    size: 0.28,
    map: emberTex,
    vertexColors: true,
    transparent: true,
    opacity: 0.88,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    alphaTest: 0.01,
  });
  const embers = new THREE.Points(emberGeo, emberMat);
  scene.add(embers);
  track(emberGeo, emberMat, emberTex);

  const emberPositions = emberGeo.attributes.position.array;

  const ambient = new THREE.AmbientLight(0x0a0408, 1.0);
  scene.add(ambient);

  const sunLight = new THREE.DirectionalLight(0xffb060, 1.8);
  sunLight.position.set(6, 4, -300);
  scene.add(sunLight);

  const fillLight = new THREE.PointLight(0xff2208, 0.6, 120);
  fillLight.position.set(0, -1, -10);
  scene.add(fillLight);

  const emberGlow = new THREE.PointLight(0xff6020, 0.4, 40);
  emberGlow.position.set(0, 5, -5);
  scene.add(emberGlow);

  scene.fog = new THREE.FogExp2(0x120608, 0.006);

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const onMouseMove = (e) => {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener("mousemove", onMouseMove);

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener("resize", onResize);

  let raf = 0;
  const clock = new THREE.Clock();

  const animate = () => {
    raf = requestAnimationFrame(animate);
    const dt = clock.getDelta();
    const t  = clock.getElapsedTime();

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    camera.position.x += (mouse.x * 1.8 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.8 + 3.5 - camera.position.y) * 0.04;
    camera.lookAt(mouse.x * 0.5, 1.0, 0);

    sky.rotation.y += dt * 0.003;
    stars.rotation.y += dt * 0.002;

    rayGroup.children.forEach((r) => {
      r.material.opacity = r.userData.baseOpacity * (0.7 + 0.3 * Math.sin(t * 0.4 + r.userData.phase));
    });

    for (let i = 0; i < EMBER_COUNT; i++) {
      const i3 = i * 3;
      emberPositions[i3]     += eVel[i3]     + Math.sin(t * 0.6 + ePhase[i]) * 0.003;
      emberPositions[i3 + 1] += eVel[i3 + 1];
      emberPositions[i3 + 2] += eVel[i3 + 2];
      if (emberPositions[i3 + 1] > 32) {
        emberPositions[i3]     = (Math.random() - 0.5) * 80;
        emberPositions[i3 + 1] = -2.8;
        emberPositions[i3 + 2] = (Math.random() - 0.5) * 60 - 15;
      }
    }
    emberGeo.attributes.position.needsUpdate = true;

    emberGlow.intensity = 0.3 + 0.18 * Math.sin(t * 1.4);
    emberMat.opacity = 0.82 + 0.1 * Math.sin(t * 0.7);

    renderer.render(scene, camera);
  };
  animate();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", onResize);
    disposables.geos.forEach(g => g.dispose && g.dispose());
    disposables.mats.forEach(m => m.dispose && m.dispose());
    disposables.texs.forEach(t => t.dispose && t.dispose());
    renderer.dispose();
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
  };
}