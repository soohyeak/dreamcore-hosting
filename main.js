(function(){
  const sceneEl = document.querySelector('#scene');
  const startBtn = document.getElementById('startBtn');
  const startDiv = document.getElementById('start');
  const hud = document.getElementById('hud');
  const entrance = document.getElementById('sceneEntrance');
  const mirror = document.getElementById('sceneMirror');
  const final = document.getElementById('sceneFinal');
  const rig = document.getElementById('rig');

  const scenes = [
    { el: entrance, name: 'Entrance' },
    { el: mirror, name: 'Mirror Hall' },
    { el: final, name: 'Final Door' }
  ];
  let current = 0;

  // Initialize visibility: Entrance visible, others hidden
  if (entrance) entrance.setAttribute('visible', true);
  if (mirror) mirror.setAttribute('visible', false);
  if (final) final.setAttribute('visible', false);
  hud.textContent = 'Scene: Entrance';

  function showScene(index){
    scenes.forEach((s, idx) => {
      if (s.el) s.el.setAttribute('visible', idx === index);
    });
    current = index;
    hud.textContent = 'Scene: ' + scenes[index].name;
    if (rig) {
      const positions = [
        {x:0, y:1.6, z:0},
        {x:0, y:1.6, z:6},
        {x:0, y:1.6, z:14}
      ];
      rig.setAttribute('position', positions[index]);
    }
  }

  if (startBtn) startBtn.addEventListener('click', () => { startDiv.style.display = 'none'; showScene(0); });

  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'n') {
      showScene((current + 1) % scenes.length);
    }
  });

  // Mobile-friendly: tap/click to advance scenes
  if (sceneEl) {
    sceneEl.addEventListener('click', function(){
      showScene((current + 1) % scenes.length);
    }, {passive: true});
  }

  // Dreamcore ambience: subtle fog color cycling
  if (sceneEl) {
    let t = 0;
    function dreamLoop(){
      t += 0.01;
      const colorA = new THREE.Color(0x7A3BFF);
      const colorB = new THREE.Color(0x4BD6FF);
      const mix = (Math.sin(t) + 1) / 2;
      const color = colorA.clone().lerp(colorB, mix);
      sceneEl.setAttribute('fog', `color: #${color.getHexString()}; near: 1; far: 60`);
      requestAnimationFrame(dreamLoop);
    }
    dreamLoop();
  }
})();