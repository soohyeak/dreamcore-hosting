(function(){
  // Tablet-first MVP: 1st-person default + 3rd-person boat cam
  var sceneEl = document.querySelector('#scene');
  var startBtn = document.getElementById('startBtn');
  var startDiv = document.getElementById('start');
  var hud = document.getElementById('hud');
  var entrance = document.getElementById('sceneEntrance');
  var mirror = document.getElementById('sceneMirror');
  var final = document.getElementById('sceneFinal');
  var rig = document.getElementById('rig');

  if (entrance) entrance.setAttribute('visible', true);
  if (mirror) mirror.setAttribute('visible', false);
  if (final) final.setAttribute('visible', false);
  if (hud) hud.textContent = 'Scene: Entrance';

  var current = 0;
  function showScene(index){
    if (entrance) entrance.setAttribute('visible', index===0);
    if (mirror) mirror.setAttribute('visible', index===1);
    if (final) final.setAttribute('visible', index===2);
    current = index;
    var sceneNames = ['Entrance','Mirror Hall','Final Door'];
    if (hud) hud.textContent = 'Scene: ' + sceneNames[index];
    if (rig){
      var positions = [{x:0,y:1.6,z:0},{x:0,y:1.6,z:6},{x:0,y:1.6,z:14}];
      rig.setAttribute('position', positions[index]);
    }
  }

  if (startBtn){ startBtn.addEventListener('click', function(){ if (startDiv) startDiv.style.display='none'; showScene(0); }); }

  window.addEventListener('keydown', function(e){ if (e.key.toLowerCase() === 'n'){ showScene((current+1)%3); } });

  // Simple ambient loop to simulate ambience
  if (sceneEl){ var t=0; (function loop(){ t+=0.01; var cA = new THREE.Color(0x7A3BFF); var cB = new THREE.Color(0x4BD6FF); var mix=(Math.sin(t)+1)/2; var color = cA.clone().lerp(cB, mix); sceneEl.setAttribute('fog','color:#'+color.getHexString()+'; near:1; far:60'); requestAnimationFrame(loop);}()); }
})();