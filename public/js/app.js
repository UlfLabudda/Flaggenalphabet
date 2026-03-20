/* jshint esversion: 6 */
'use strict';

// ── State ──────────────────────────────────────────────────────────────────
let currentFilter = 'all';
let currentSearch = '';

// Quiz state
let quizFlags = [];
let quizIndex = 0;
let quizScore = 0;
let quizTotal = 0;
let quizAnswered = false;

// ── DOM Refs ───────────────────────────────────────────────────────────────
const flagsContainer  = document.getElementById('flags-container');
const quizContainer   = document.getElementById('quiz-container');
const searchBar       = document.getElementById('search-bar');
const searchInput     = document.getElementById('search-input');
const modalOverlay    = document.getElementById('modal-overlay');
const modalClose      = document.getElementById('modal-close');
const modalFlag       = document.getElementById('modal-flag');
const modalTitle      = document.getElementById('modal-title');
const modalId         = document.getElementById('modal-id');
const modalMorse      = document.getElementById('modal-morse');
const modalMeaning    = document.getElementById('modal-meaning');
const modalDescription = document.getElementById('modal-description');
const quizScoreEl     = document.getElementById('quiz-score');
const quizFlagEl      = document.getElementById('quiz-flag');
const quizQuestion    = document.getElementById('quiz-question');
const quizAnswers     = document.getElementById('quiz-answers');
const quizFeedback    = document.getElementById('quiz-feedback');
const btnNext         = document.getElementById('btn-next');

// ── Render Flags ───────────────────────────────────────────────────────────
function renderFlags(flagsArray) {
  flagsContainer.innerHTML = '';
  if (flagsArray.length === 0) {
    flagsContainer.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#888;padding:2rem;">Keine Flaggen gefunden.</p>';
    return;
  }
  flagsArray.forEach(flag => {
    const card = document.createElement('div');
    card.className = 'flag-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', flag.phonetic + ' – ' + flag.meaning);
    card.innerHTML = `
      ${flag.svg}
      <div class="flag-card-label">
        <span class="flag-card-phonetic">${flag.phonetic}</span>
        <span class="flag-card-id">${flag.id}</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(flag));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(flag); }
    });
    flagsContainer.appendChild(card);
  });
}

// ── Filter & Search ────────────────────────────────────────────────────────
function getFilteredFlags() {
  let flags = FLAGS_DATA;

  if (currentFilter !== 'all') {
    flags = flags.filter(f => f.type === currentFilter);
  }

  const q = currentSearch.trim().toLowerCase();
  if (q) {
    flags = flags.filter(f =>
      f.id.toLowerCase().includes(q) ||
      f.phonetic.toLowerCase().includes(q) ||
      f.meaning.toLowerCase().includes(q)
    );
  }
  return flags;
}

function applyFilters() {
  renderFlags(getFilteredFlags());
}

// ── Modal ──────────────────────────────────────────────────────────────────
function openModal(flag) {
  modalFlag.innerHTML = flag.svg;
  // Make the modal SVG larger
  const svgEl = modalFlag.querySelector('svg');
  if (svgEl) {
    svgEl.style.width = '240px';
    svgEl.style.height = 'auto';
    svgEl.removeAttribute('width');
    svgEl.removeAttribute('height');
  }
  modalTitle.textContent = flag.phonetic;
  modalId.textContent = 'Signal: ' + flag.id;
  if (flag.morse) {
    modalMorse.textContent = 'Morsecode: ' + flag.morse;
    modalMorse.style.display = '';
  } else {
    modalMorse.textContent = '';
    modalMorse.style.display = 'none';
  }
  modalMeaning.textContent = flag.meaning;
  modalDescription.textContent = flag.description;
  modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Tab Logic ──────────────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Deactivate all tabs
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (filter === 'quiz') {
      // Show quiz view
      flagsContainer.classList.add('hidden');
      searchBar.classList.add('hidden');
      quizContainer.classList.remove('hidden');
      currentFilter = 'quiz';
      startQuiz();
    } else {
      // Show flags view
      quizContainer.classList.add('hidden');
      flagsContainer.classList.remove('hidden');
      searchBar.classList.remove('hidden');
      currentFilter = filter;
      applyFilters();
    }
  });
});

// ── Search ─────────────────────────────────────────────────────────────────
searchInput.addEventListener('input', () => {
  currentSearch = searchInput.value;
  applyFilters();
});

// ── Quiz ───────────────────────────────────────────────────────────────────
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  // Use all letter flags for the quiz
  const letterFlags = FLAGS_DATA.filter(f => f.type === 'letter');
  quizFlags = shuffleArray(letterFlags);
  quizIndex = 0;
  quizScore = 0;
  quizTotal = 0;
  updateScoreDisplay();
  showQuizQuestion();
}

function updateScoreDisplay() {
  quizScoreEl.textContent = quizScore + ' von ' + quizTotal + ' richtig';
}

function showQuizQuestion() {
  if (quizIndex >= quizFlags.length) {
    // All flags done — restart with reshuffle
    quizFlags = shuffleArray(FLAGS_DATA.filter(f => f.type === 'letter'));
    quizIndex = 0;
  }

  quizAnswered = false;
  const correct = quizFlags[quizIndex];

  // Build 4 choices: correct + 3 random wrong
  const others = FLAGS_DATA.filter(f => f.type === 'letter' && f.id !== correct.id);
  const wrongs = shuffleArray(others).slice(0, 3);
  const choices = shuffleArray([correct, ...wrongs]);

  // Render flag
  quizFlagEl.innerHTML = correct.svg;
  const svgEl = quizFlagEl.querySelector('svg');
  if (svgEl) {
    svgEl.style.width = '220px';
    svgEl.style.height = 'auto';
  }

  quizQuestion.textContent = 'Welche Flagge ist das?';
  quizFeedback.textContent = '';
  quizFeedback.className = 'quiz-feedback';
  btnNext.classList.add('hidden');

  // Render answer buttons
  quizAnswers.innerHTML = '';
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'quiz-answer-btn';
    btn.textContent = choice.phonetic + ' (' + choice.id + ')';
    btn.addEventListener('click', () => handleAnswer(btn, choice, correct));
    quizAnswers.appendChild(btn);
  });
}

function handleAnswer(clickedBtn, chosen, correct) {
  if (quizAnswered) return;
  quizAnswered = true;
  quizTotal++;

  // Disable all buttons
  quizAnswers.querySelectorAll('.quiz-answer-btn').forEach(b => {
    b.disabled = true;
    // Highlight correct answer
    const phonetic = b.textContent.split(' (')[0];
    if (phonetic === correct.phonetic) {
      b.classList.add('correct');
    }
  });

  if (chosen.id === correct.id) {
    quizScore++;
    clickedBtn.classList.remove('correct');
    clickedBtn.classList.add('correct');
    quizFeedback.textContent = 'Richtig! Das ist ' + correct.phonetic + '.';
    quizFeedback.className = 'quiz-feedback correct-msg';
  } else {
    clickedBtn.classList.add('wrong');
    quizFeedback.textContent = 'Falsch! Es war ' + correct.phonetic + ' (' + correct.id + ').';
    quizFeedback.className = 'quiz-feedback wrong-msg';
  }

  updateScoreDisplay();
  btnNext.classList.remove('hidden');
}

btnNext.addEventListener('click', () => {
  quizIndex++;
  showQuizQuestion();
});

// ── Init ───────────────────────────────────────────────────────────────────
renderFlags(FLAGS_DATA);
