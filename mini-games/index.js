  // ---- Rules content + dialog wiring ----
  const RULES = {
    memory: `
      <strong>Card Memory</strong><br><br>
      • Flip two cards each turn.<br>
      • Match pairs to keep them face up.<br>
      • Clear all pairs in the fewest moves to win.<br><br>
      <em>Tips:</em> Start with the corners, and say pairs out loud to memorize faster.
    `,
    tictactoe: `
      <strong>Tic-Tac-Toe</strong><br><br>
      • Two players take turns placing X and O.<br>
      • First to line up three (row/column/diagonal) wins.<br>
      • Full board with no three-in-a-row = draw.<br><br>
      <em>Controls:</em> Click/tap a cell. Use “Restart Game” to play again.
    `,
    rps: `
      <strong>Rock–Paper–Scissors</strong><br><br>
      • Rock beats Scissors • Scissors beats Paper • Paper beats Rock.<br>
      • Choose a “Best of” target; first to reach it wins the match.<br><br>
      <em>Controls:</em> Click/tap Rock, Paper, or Scissors. Use <b>Reset</b> to start a new match.
    `,
    snake: `
      <strong>Snake</strong><br><br>
      • <b>Move:</b> W/A/S/D or swipe on touch screens.<br>
      • <b>Pause/Play:</b> F key or single tap (when alive).<br>
      • <b>Restart:</b> R key or double-tap (alive) / single tap (dead).<br>
      • Eat food to grow longer; avoid hitting yourself.<br>
      • High score saves automatically.
    `
  };

  const dlg = document.getElementById('rulesDlg');
  const dlgTitle = document.getElementById('dlgTitle');
  const dlgBody = document.getElementById('dlgBody');
  const closeDlg = document.getElementById('closeDlg');

  const TITLES = {
    memory: 'Rules — Card Memory',
    tictactoe: 'Rules — Tic-Tac-Toe',
    rps: 'Rules — Rock–Paper–Scissors',
    snake: 'Rules — Snake'
  };

  document.querySelectorAll('[data-rules]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.rules;
      dlgTitle.textContent = TITLES[key] || 'Game Rules';
      dlgBody.innerHTML = RULES[key] || 'No rules available.';
      dlg.showModal();
    });
  });

  closeDlg.addEventListener('click', () => dlg.close());
  dlg.addEventListener('cancel', e => { e.preventDefault(); dlg.close(); });