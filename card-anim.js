// card-anim.js — requiere que lwf.js esté cargado antes.
//
// Estructura esperada (una carpeta por asset_id):
//   assets/4017790/card_4017790.lwf
//   assets/4017790/card_4017790_0.png … _4.png
//   assets/1024350/card_1024350.lwf
//   ...
//
// Uso:
//   const card = CardAnim.mount(canvas, '4017790');
//   card.destroy();   // al quitar la carta de la pantalla

(function (global) {
  var BASE = 'assets/';        // carpeta que contiene una subcarpeta por asset_id
  var active = new Set();      // instancias que se están animando
  var rafId = 0;
  var last = 0;

  // Un solo bucle compartido para todas las cartas
  function loop(now) {
    var dt = Math.min((now - (last || now)) / 1000, 0.1);
    last = now;
    active.forEach(function (inst) {
      if (inst.lwf && inst.lwf.active && inst.visible) {
        inst.lwf.exec(dt);
        inst.lwf.render();
      }
    });
    rafId = active.size ? requestAnimationFrame(loop) : 0;
  }

  function ensureLoop() {
    if (!rafId) {
      last = 0;
      rafId = requestAnimationFrame(loop);
    }
  }

  function loadOnce(canvas, assetId, base, useWorker, cb) {
    LWF.useCanvasRenderer();
    LWF.ResourceCache.get().loadLWF({
      lwf: 'card_' + assetId + '.lwf',                 // el runtime le antepone prefix
      prefix: base + assetId + '/',
      stage: canvas,
      fitForHeight: true,
      useAlwaysAdditionalColorShader: true,
      worker: useWorker,
      onload: function (l) { cb(l, this.lwfUrl); }
    });
  }

  function mount(canvas, assetId, opts) {
    opts = opts || {};
    var inst = { lwf: null, visible: true, destroyed: false };
    var base = opts.base || BASE;

    function onLoaded(l, url) {
      if (!l) {
        // Primer intento con Worker falló: reintenta una vez sin Worker
        // (mismo workaround que documenta el instructivo, sección 4, punto 8).
        console.warn('[CardAnim] falló con Worker, reintentando sin Worker:', url);
        loadOnce(canvas, assetId, base, false, function (l2, url2) {
          if (!l2) {
            console.warn('[CardAnim] no se pudo cargar (ni con ni sin Worker):', url2);
            if (opts.onerror) opts.onerror(url2);
            return;
          }
          finishLoad(l2);
        });
        return;
      }
      finishLoad(l);
    }

    function finishLoad(l) {
      if (inst.destroyed) { l.destroy(); return; }   // se quitó la carta antes de terminar de cargar
      l.rootMovie.attachMovie('ef_001', 'ef_001');
      l.rootMovie.moveTo(canvas.width, canvas.height);
      inst.lwf = l;
      if (opts.onload) opts.onload(l);
    }

    loadOnce(canvas, assetId, base, opts.worker !== false, onLoaded);

    // Solo animar mientras el canvas es visible en pantalla
    var io = new IntersectionObserver(function (entries) {
      inst.visible = entries[entries.length - 1].isIntersecting;
    });
    io.observe(canvas);

    inst.destroy = function () {
      inst.destroyed = true;
      io.disconnect();
      active.delete(inst);
      if (inst.lwf) { inst.lwf.destroy(); inst.lwf = null; }
    };

    active.add(inst);
    ensureLoop();
    return inst;
  }

  global.CardAnim = { mount: mount };
})(window);
