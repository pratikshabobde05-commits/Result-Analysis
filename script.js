// script.js

const leaderboardData = [
  { rank: 1, name: 'Priya Sharma', cgpa: 9.74, badge: '🥇' },
  { rank: 2, name: 'Rahul Gupta', cgpa: 9.61, badge: '🥈' },
  { rank: 3, name: 'Sneha Patel', cgpa: 9.48, badge: '🥉' },
  { rank: 4, name: 'Amit Kumar', cgpa: 9.32, badge: '' },
  { rank: 5, name: 'Arjun Mehta', cgpa: 8.52, badge: '' }
];

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderLeaderboard();

  document
    .getElementById('login-form')
    .addEventListener('submit', handleLogin);
});

function handleLogin(e){
  e.preventDefault();

  document
    .getElementById('login-page')
    .classList.add('hidden');

  document
    .getElementById('dashboard')
    .classList.remove('hidden');

  lucide.createIcons();
}

function showSection(id){

  const sections = document.querySelectorAll('[id^="sec-"]');

  sections.forEach(section => {
    section.classList.add('hidden');
  });

  document
    .getElementById('sec-' + id)
    .classList.remove('hidden');
}

function renderLeaderboard(){

  const container = document.getElementById('leaderboard-list');

  leaderboardData.forEach(student => {

    const div = document.createElement('div');

    div.className =
      'flex items-center justify-between p-4 rounded-xl bg-white/5';

    div.innerHTML = `
      <div class="flex items-center gap-4">
        <span class="text-lg font-bold">
          ${student.badge || student.rank}
        </span>

        <div>
          <p class="font-semibold">${student.name}</p>
        </div>
      </div>

      <span class="font-bold gradient-text">
        ${student.cgpa}
      </span>
    `;

    container.appendChild(div);
  });
}
