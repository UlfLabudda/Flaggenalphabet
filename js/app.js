/**
 * Maritimes Flaggenalphabet – App-Logik
 */

/* ── State ────────────────────────────────────────────── */
let currentTab    = 'all';
let currentSearch = '';
let quizState = {
  remaining: [],
  correct:   0,
  total:     0,
  streak:    0,
  current:   null,
  answered:  false
};

/* ── DOM References ───────────────────────────────────── */
const flagsGrid     = document.getElementById('flags-grid');
const searchInput   = document.getElementById('search-input');
const resultCount   = document.getElementById('result-count');
const browseView    = document.getElementById('browse-view');
const quizView      = document.getElementById('quiz-view');
const modalOverlay  = document.getElementById('modal-overlay');

/* ── Helpers ──────────────────────────────────────────── */
function filterFlags() {
  let list = FLAGS;

  if (currentTab !== 'all' && currentTab !== 'quiz') {
    list = list.filter(f => f.type === currentTab);
  }

  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    list = list.filter(f =>
      f.id.toLowerCase().includes(q)        ||
      f.phonetic.toLowerCase().includes(q)  ||
      f.meaning.toLowerCase().includes(q)   ||
      f.description.toLowerCase().includes(q)
    );
  }

  return list;
}

function typeLabel(type) {
  return {
    letter:  'Buchstabenflagge',
    numeral: 'Zahlenwimpel',
    special: 'Sonderflagge / Wimpel'
  }[type] || type;
}

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + '…' : str;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Render Browse Grid ───────────────────────────────── */
function renderGrid() {
  const list = filterFlags();
  resultCount.textContent = `${list.length} Flagge${list.length !== 1 ? 'n' : ''}`;

  if (list.length === 0) {
    flagsGrid.innerHTML = '<p style="color:var(--muted);padding:2rem;">Keine Flaggen gefunden.</p>';
    return;
  }

  flagsGrid.innerHTML = list.map(flag => `
    <div class="flag-card" data-id="${flag.id}" role="button" tabindex="0"
         aria-label="${flag.id} – ${flag.phonetic}">
      ${flag.svg}
      <div class="card-id">${flag.id}</div>
      <div class="card-name">${flag.phonetic}</div>
      <div class="card-label">${truncate(flag.meaning.split('—')[0].split('–')[0].trim(), 42)}</div>
    </div>
  `).join('');

  flagsGrid.querySelectorAll('.flag-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openModal(card.dataset.id);
    });
  });
}

/* ── Modal ────────────────────────────────────────────── */
function openModal(id) {
  const flag = FLAGS.find(f => f.id === id);
  if (!flag) return;

  document.querySelector('#modal-flag-svg').innerHTML = flag.svg;
  document.querySelector('.modal-id').textContent      = flag.id;
  document.querySelector('.modal-phonetic').textContent = flag.phonetic;
  document.querySelector('.modal-morse').textContent   = flag.morse ? `Morse: ${flag.morse}` : '';
  document.querySelector('.modal-meaning').textContent = flag.meaning;
  document.querySelector('.modal-description').textContent = flag.description;
  document.querySelector('.modal-type-label').textContent  = typeLabel(flag.type);

  // Make the SVG inside the modal a bit larger
  const svg = document.querySelector('#modal-flag-svg svg');
  if (svg) { svg.removeAttribute('style'); }

  modalOverlay.classList.remove('hidden');
  document.getElementById('modal-close').focus();
}

function closeModal() {
  modalOverlay.classList.add('hidden');
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── Tab Navigation ───────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;

    if (currentTab === 'quiz') {
      browseView.classList.add('hidden');
      quizView.classList.remove('hidden');
      startQuiz();
    } else {
      quizView.classList.add('hidden');
      browseView.classList.remove('hidden');
      renderGrid();
    }
  });
});

/* ── Search ───────────────────────────────────────────── */
searchInput.addEventListener('input', () => {
  currentSearch = searchInput.value.trim();
  renderGrid();
});

/* ── Quiz ─────────────────────────────────────────────── */
function startQuiz() {
  quizState = {
    remaining: shuffle(FLAGS.filter(f => f.type === 'letter' || f.type === 'numeral')),
    correct:   0,
    total:     0,
    streak:    0,
    current:   null,
    answered:  false
  };
  updateQuizStats();
  nextQuestion();
}

function updateQuizStats() {
  document.getElementById('quiz-score').textContent = quizState.correct;
  document.getElementById('quiz-total').textContent = quizState.total;
  const streakEl = document.getElementById('quiz-streak');
  if (quizState.streak >= 3) {
    streakEl.textContent = ` 🔥 ${quizState.streak} in Folge!`;
  } else {
    streakEl.textContent = '';
  }
}

function nextQuestion() {
  const feedbackEl = document.getElementById('quiz-feedback');
  const nextBtn    = document.getElementById('quiz-next');
  feedbackEl.classList.add('hidden');
  nextBtn.classList.add('hidden');

  if (quizState.remaining.length === 0) {
    showQuizSummary();
    return;
  }

  quizState.current  = quizState.remaining.pop();
  quizState.answered = false;

  // Display flag
  document.getElementById('quiz-flag-display').innerHTML = quizState.current.svg;

  // Build 4 answer options (1 correct + 3 random distractors)
  const correctFlag = quizState.current;
  const pool = FLAGS.filter(f =>
    f.id !== correctFlag.id &&
    (f.type === 'letter' || f.type === 'numeral')
  );
  const distractors = shuffle(pool).slice(0, 3);
  const options     = shuffle([correctFlag, ...distractors]);

  const optionsEl = document.getElementById('quiz-options');
  optionsEl.innerHTML = options.map(opt => `
    <button class="quiz-option" data-id="${opt.id}">
      <strong>${opt.id} – ${opt.phonetic}</strong><br>
      <small>${opt.meaning.slice(0, 60)}${opt.meaning.length > 60 ? '…' : ''}</small>
    </button>
  `).join('');

  optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn.dataset.id));
  });
}

function handleAnswer(chosenId) {
  if (quizState.answered) return;
  quizState.answered = true;
  quizState.total++;

  const isCorrect = chosenId === quizState.current.id;
  if (isCorrect) {
    quizState.correct++;
    quizState.streak++;
  } else {
    quizState.streak = 0;
  }
  updateQuizStats();

  // Visual feedback on buttons
  const optionsEl = document.getElementById('quiz-options');
  optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.id === quizState.current.id) {
      btn.classList.add('correct');
    } else if (btn.dataset.id === chosenId && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Text feedback
  const feedbackEl = document.getElementById('quiz-feedback');
  feedbackEl.classList.remove('hidden', 'correct-fb', 'wrong-fb');
  if (isCorrect) {
    feedbackEl.classList.add('correct-fb');
    feedbackEl.innerHTML = `✅ <strong>Richtig!</strong> ${quizState.current.phonetic} (${quizState.current.id}) — ${quizState.current.meaning}`;
  } else {
    const correct = FLAGS.find(f => f.id === quizState.current.id);
    feedbackEl.classList.add('wrong-fb');
    feedbackEl.innerHTML = `❌ <strong>Falsch.</strong> Es war <strong>${correct.id} – ${correct.phonetic}</strong>: ${correct.meaning}`;
  }

  const nextBtn = document.getElementById('quiz-next');
  nextBtn.classList.remove('hidden');
  nextBtn.textContent = quizState.remaining.length > 0 ? 'Weiter →' : 'Ergebnis anzeigen';
}

function showQuizSummary() {
  const pct = quizState.total > 0
    ? Math.round((quizState.correct / quizState.total) * 100) : 0;

  let emoji = pct >= 90 ? '🏆' : pct >= 70 ? '👍' : pct >= 50 ? '📚' : '⚓';
  let msg   = pct >= 90
    ? 'Ausgezeichnet! Sie kennen das Flaggenalphabet sehr gut.'
    : pct >= 70
    ? 'Gut gemacht! Noch etwas Übung und Sie sind Experte.'
    : pct >= 50
    ? 'Ordentlich! Wiederholen Sie die schwierigen Flaggen.'
    : 'Weiter üben — der ICS braucht Zeit. Viel Erfolg!';

  document.getElementById('quiz-flag-display').innerHTML = `
    <div style="text-align:center;padding:2rem;">
      <div style="font-size:4rem;">${emoji}</div>
      <h2 style="margin:.5rem 0">${quizState.correct} / ${quizState.total} richtig (${pct}%)</h2>
      <p style="color:var(--muted)">${msg}</p>
    </div>`;
  document.getElementById('quiz-options').innerHTML = '';
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-next').classList.add('hidden');
}

document.getElementById('quiz-next').addEventListener('click', nextQuestion);
document.getElementById('quiz-restart').addEventListener('click', startQuiz);

/* ── Initial Render ───────────────────────────────────── */
renderGrid();
