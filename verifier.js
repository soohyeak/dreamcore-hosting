(function(){
  var btn = document.getElementById('run');
  if (!btn) return;
  btn.addEventListener('click', function(){
    var frame = document.getElementById('frame');
    var log = document.getElementById('log');
    log.textContent = '';
    var inner = frame.contentDocument || frame.contentWindow.document;
    var checks = [];
    checks.push({name:'HUD present', ok: !!inner.getElementById('hud')});
    checks.push({name:'Start button present', ok: !!inner.getElementById('startBtn')});
    checks.push({name:'Entrance present', ok: !!inner.getElementById('sceneEntrance')});
    checks.push({name:'Mirror Hall present', ok: !!inner.getElementById('sceneMirror')});
    checks.push({name:'Final Door present', ok: !!inner.getElementById('sceneFinal')});
    log.textContent = checks.map(function(c){ return c.name + ': ' + (c.ok? 'OK':'MISSING'); }).join('\n');
  });
})();