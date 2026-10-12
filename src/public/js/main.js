(function () {
  var abas = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  var paineis = abas.map(function (aba) {
    return document.getElementById(aba.getAttribute('aria-controls'));
  });
  var ids = abas.map(function (aba) {
    return aba.dataset.aba;
  });

  function ativar(id, opcoes) {
    var indice = ids.indexOf(id);
    if (indice === -1) return;
    var config = opcoes || {};

    abas.forEach(function (aba, i) {
      var ativa = i === indice;
      aba.setAttribute('aria-selected', String(ativa));
      aba.tabIndex = ativa ? 0 : -1;
      paineis[i].hidden = !ativa;
    });

    if (config.foco) abas[indice].focus();

    if (config.hash !== false && location.hash !== '#' + id) {
      history.replaceState(null, '', '#' + id);
    }
  }

  abas.forEach(function (aba, i) {
    aba.addEventListener('click', function () {
      ativar(aba.dataset.aba);
    });

    aba.addEventListener('keydown', function (evento) {
      var destino = null;
      if (evento.key === 'ArrowRight') destino = (i + 1) % abas.length;
      if (evento.key === 'ArrowLeft') destino = (i - 1 + abas.length) % abas.length;
      if (evento.key === 'Home') destino = 0;
      if (evento.key === 'End') destino = abas.length - 1;
      if (destino === null) return;

      evento.preventDefault();
      ativar(ids[destino], { foco: true });
    });
  });

  window.addEventListener('hashchange', function () {
    ativar(location.hash.replace('#', ''), { hash: false });
  });

  var inicial = location.hash.replace('#', '');
  ativar(ids.indexOf(inicial) !== -1 ? inicial : ids[0], { hash: false });
})();
