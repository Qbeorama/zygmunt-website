// ============================================================
// APP — game logic, circular carousel, animations
// ============================================================
(function () {
  'use strict';

  // --- STATE ---
  let collectedTags = [];
  let currentQuestion = 0;
  let matchedEndings = [];
  let carouselIndex = 0; // which of the 3 is in front (0, 1, 2)

  // --- DOM refs ---
  const screens = {
    questions: document.getElementById('screen-questions'),
    tarot: document.getElementById('screen-tarot'),
    endingImage: document.getElementById('screen-ending-image'),
    endingVideo: document.getElementById('screen-ending-video'),
  };
  const questionText = document.getElementById('question-text');
  const answersContainer = document.getElementById('answers-container');
  const zoomOverlay = document.getElementById('zoom-overlay');
  const zoomCardImg = document.getElementById('zoom-card-img');

  const carouselCards = document.querySelectorAll('.carousel-card');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  // --- SCREEN MANAGEMENT ---
  function showScreen(key) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[key].classList.add('active');
  }

  // --- QUESTIONS ---
  function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    questionText.classList.add('fade-out');
    answersContainer.classList.add('fade-out');

    setTimeout(() => {
      questionText.textContent = q.text;
      answersContainer.innerHTML = '';
      q.answers.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = a.text;
        btn.addEventListener('click', () => pickAnswer(a));
        answersContainer.appendChild(btn);
      });
      questionText.classList.remove('fade-out');
      answersContainer.classList.remove('fade-out');
    }, currentQuestion === 0 ? 0 : 350);
  }

  function pickAnswer(answer) {
    collectedTags.push(...answer.tags);
    currentQuestion++;
    if (currentQuestion < QUESTIONS.length) {
      renderQuestion();
    } else {
      selectEndings();
      showScreen('tarot');
      updateCarousel();
    }
  }

  // --- ENDING SELECTION ---
  function selectEndings() {
    matchedEndings = [];
    for (const ending of ENDINGS) {
      if (matchedEndings.length >= 3) break;
      if (ending.requiredTags.every(t => collectedTags.includes(t))) {
        matchedEndings.push(ending);
      }
    }
    // Fallback: pad with unmatched endings
    if (matchedEndings.length < 3) {
      for (const ending of ENDINGS) {
        if (matchedEndings.length >= 3) break;
        if (!matchedEndings.includes(ending)) matchedEndings.push(ending);
      }
    }

    // Set card face images (cards are revealed from the start)
    carouselCards.forEach((card, i) => {
      card.querySelector('img').src = 'Cards-jpg/' + matchedEndings[i].tarotCard + '.jpg';
    });

    carouselIndex = 0;
  }

  // --- CIRCULAR CAROUSEL ---
  // 3 visual slots on an elliptical path:
  //   Front (bottom-center): large, bright, high z-index
  //   Back-left: smaller, dimmed
  //   Back-right: smaller, dimmed
  function getSlotParams() {
    const narrow = window.innerWidth <= 600;
    const xOff = narrow ? 110 : 180;
    const yOff = narrow ? 20 : 30;
    return [
      { x: 0, y: yOff, scale: 1, opacity: 1, brightness: 1, z: 3 },
      { x: -xOff, y: -yOff, scale: 0.72, opacity: 0.55, brightness: 0.6, z: 1 },
      { x: xOff, y: -yOff, scale: 0.72, opacity: 0.55, brightness: 0.6, z: 1 },
    ];
  }

  function updateCarousel() {
    const SLOT_PARAMS = getSlotParams();
    carouselCards.forEach((card, i) => {
      // Which visual slot does card i occupy?
      const slot = ((i - carouselIndex) % 3 + 3) % 3;
      const p = SLOT_PARAMS[slot];

      card.style.transform = `translate(${p.x}px, ${p.y}px) scale(${p.scale})`;
      card.style.opacity = p.opacity;
      card.style.filter = `brightness(${p.brightness})`;
      card.style.zIndex = p.z;
      card.classList.toggle('is-front', slot === 0);
    });
  }

  btnPrev.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 2) % 3;
    updateCarousel();
  });

  btnNext.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 1) % 3;
    updateCarousel();
  });

  // Click on front card → pick it
  document.querySelector('.carousel').addEventListener('click', (e) => {
    const card = e.target.closest('.carousel-card.is-front');
    if (!card) return;
    pickCard();
  });

  // --- CARD PICK: ZOOM → ENDING ---
  function pickCard() {
    const ending = matchedEndings[carouselIndex];
    zoomCardImg.src = 'Cards-jpg/' + ending.tarotCard + '.jpg';

    // Reset zoom state
    zoomOverlay.classList.remove('zoomed');
    zoomOverlay.classList.add('active');

    // Zoom after brief pause
    requestAnimationFrame(() => {
      setTimeout(() => zoomOverlay.classList.add('zoomed'), 400);
    });

    // Show ending after zoom
    setTimeout(() => {
      showEnding(ending);
      setTimeout(() => {
        zoomOverlay.classList.remove('active', 'zoomed');
      }, 400);
    }, 1600);
  }

  // --- MARKDOWN ---
  function renderMarkdown(text) {
    const escaped = text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return escaped
      .split(/\n\n+/)
      .map(para => para
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.+?)__/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/_(.+?)_/g, '<em>$1</em>')
        .replace(/\n/g, '<br>')
      )
      .map(para => `<p>${para}</p>`)
      .join('');
  }

  function setMarkdownText(el, text) {
    el.innerHTML = renderMarkdown(text);
  }

  // --- ENDINGS ---
  function showEnding(ending) {
    const typeLabel = ending.type === 'canonic'
      ? 'KANONICZNE ZAKOŃCZENIE'
      : 'NIEKANONICZNE ZAKOŃCZENIE';

    const text = ending.textKey
      ? (window.TEXTS && window.TEXTS[ending.textKey]) || ''
      : (ending.text || '');

    if (ending.variant === 'video') {
      const vid = document.getElementById('ending-video');
      const videoScreen = document.getElementById('screen-ending-video');
      videoScreen.classList.toggle('ending-light', ending.id === 'lina-keller');
      vid.src = ending.video;
      vid.play().catch(() => {});
      document.getElementById('ending-video-type').textContent = typeLabel;
      document.getElementById('ending-video-title').textContent = ending.title;
      setMarkdownText(document.getElementById('ending-video-text'), text);
      showScreen('endingVideo');
      videoScreen.scrollTop = 0;
    } else {
      document.getElementById('ending-img').src = ending.image;
      document.getElementById('ending-image-type').textContent = typeLabel;
      document.getElementById('ending-image-title').textContent = ending.title;
      setMarkdownText(document.getElementById('ending-image-text'), text);
      showScreen('endingImage');
      screens.endingImage.scrollTop = 0;
    }
  }

  // --- AGAIN BUTTONS ---
  document.querySelectorAll('.btn-again').forEach(btn => {
    btn.addEventListener('click', resetGame);
  });

  function resetGame() {
    collectedTags = [];
    currentQuestion = 0;
    matchedEndings = [];
    carouselIndex = 0;

    const vid = document.getElementById('ending-video');
    vid.pause();
    vid.removeAttribute('src');

    showScreen('questions');
    renderQuestion();
  }

  // --- INIT ---
  renderQuestion();
})();
