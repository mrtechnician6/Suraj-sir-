document.addEventListener('DOMContentLoaded', () => {
    const stages = document.querySelectorAll('.stage');
    const progressBar = document.getElementById('progress-bar');
    const next1 = document.getElementById('next1');

    // Start progress on load
    setTimeout(() => { if(progressBar) progressBar.style.width = '100%'; }, 200);
    
    // Show button after 4 seconds
    setTimeout(() => { if(next1) next1.classList.remove('hidden'); }, 4200);

    function showStage(index) {
        stages.forEach((s, i) => s.classList.toggle('active', i === index));
    }

    const bind = (id, target) => {
        const btn = document.getElementById(id);
        const action = (e) => { e.preventDefault(); showStage(target); };
        btn.addEventListener('click', action);
        btn.addEventListener('touchstart', action);
    };

    bind('next1', 1);
    bind('next2', 2);
    bind('next3', 3);
    document.getElementById('restart').onclick = () => location.reload();
});
