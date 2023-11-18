var stateChanged = false;

document.addEventListener('DOMContentLoaded', function() {
    setInterval(toggleColors, 3000);
});

function toggleColors() {
    var body = document.body;
    var heading = document.getElementById('heading');

    body.classList.toggle('state-w');
    body.classList.toggle('state-b');

    if (stateChanged) {
        heading.textContent = 'HEEEEEEEEEEEEEY!';
    } else {
        heading.textContent = 'HOOOOOOOOOOOOOO!';
    }

    stateChanged = !stateChanged;
}
