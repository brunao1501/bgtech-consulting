/* BGTech Consulting — deliberate motion with conversion-first interactions.
   No external animation framework, autoplay, or tracking scripts. */
(() => {
  'use strict';
  const home = document.querySelector('.home-shell');
  if (!home) return;

  const stage = home.querySelector('.cinema-stage');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

  // A still hero image with two navigable projects replaces the rotating slides.
  // The real preview files already exist in the BGTech site.
  if (stage) {
    stage.classList.add('motion-upgraded');
    const gallery = document.createElement('div');
    gallery.className = 'motion-gallery';
    gallery.setAttribute('aria-label', 'Explore projetos demonstrativos');
    const projects = [
      { href: '/restaurante/', image: '/assets/hero-restaurante.jpg', title: 'Gastronomia', subtitle: 'Ver modelo' },
      { href: '/educacao/', image: '/assets/hero-educacao.jpg', title: 'Educação', subtitle: 'Ver modelo' }
    ];
    for (const project of projects) {
      const link = document.createElement('a');
      link.href = project.href;
      link.setAttribute('aria-label', 'Explorar o modelo de ' + project.title);
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      const label = document.createElement('span');
      const kicker = document.createElement('small');
      kicker.textContent = project.subtitle;
      label.append(kicker, document.createTextNode(project.title));
      link.append(img, label);
      gallery.append(link);
    }
    stage.append(gallery);

    if (precisePointer.matches && !reducedMotion.matches) {
      let scheduled = false;
      let targetX = 0, targetY = 0, pointerX = 50, pointerY = 50;
      stage.addEventListener('pointermove', event => {
        const box = stage.getBoundingClientRect();
        const nx = ((event.clientX - box.left) / box.width - .5) * 2;
        const ny = ((event.clientY - box.top) / box.height - .5) * 2;
        targetX = Math.max(-1, Math.min(1, nx));
        targetY = Math.max(-1, Math.min(1, ny));
        pointerX = Math.max(0, Math.min(100, 50 + nx * 30));
        pointerY = Math.max(0, Math.min(100, 50 + ny * 30));
        if (!scheduled) {
          scheduled = true;
          requestAnimationFrame(() => {
            stage.style.setProperty('--motion-tilt-x', (-targetY * 2.1).toFixed(2) + 'deg');
            stage.style.setProperty('--motion-tilt-y', (targetX * 2.8).toFixed(2) + 'deg');
            stage.style.setProperty('--motion-pointer-x', pointerX.toFixed(1) + '%');
            stage.style.setProperty('--motion-pointer-y', pointerY.toFixed(1) + '%');
            scheduled = false;
          });
        }
      }, { passive: true });
      stage.addEventListener('pointerleave', () => {
        stage.style.setProperty('--motion-tilt-x','0deg');
        stage.style.setProperty('--motion-tilt-y','0deg');
        stage.style.setProperty('--motion-pointer-x','50%');
        stage.style.setProperty('--motion-pointer-y','48%');
      });
    }
  }

  // Lead-oriented CTA visible in the first viewport; the existing form is preserved.
  const cta = home.querySelector('.home-hero-actions .home-btn-primary');
  if (cta) {
    cta.href = '#contato';
    for (const node of cta.childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        node.textContent = 'Solicitar proposta ';
        break;
      }
    }
  }
  const portfolio = home.querySelector('.home-hero-actions .home-btn-ghost');
  if (portfolio) portfolio.textContent = 'Ver exemplos de sites';

  // Pointer highlight only on devices where hover exists.
  if (precisePointer.matches && !reducedMotion.matches) {
    home.querySelectorAll('.home-service-card').forEach(card => {
      let scheduled = false, x = 50, y = 50;
      card.addEventListener('pointermove', event => {
        const bounds = card.getBoundingClientRect();
        x = ((event.clientX - bounds.left) / bounds.width) * 100;
        y = ((event.clientY - bounds.top) / bounds.height) * 100;
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          card.style.setProperty('--motion-x', x.toFixed(1) + '%');
          card.style.setProperty('--motion-y', y.toFixed(1) + '%');
          scheduled = false;
        });
      }, { passive: true });
    });
  }
})();