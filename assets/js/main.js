const mode = document.getElementById('valor');

mode.addEventListener('click', () => {

    const body = document.getElementById('body');

    if (body.classList.contains('light')) {
        body.classList.remove('light');
        return;
    }
    body.classList.add('light');

});

