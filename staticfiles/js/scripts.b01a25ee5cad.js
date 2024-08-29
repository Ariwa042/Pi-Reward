document.addEventListener('DOMContentLoaded', function () {
    const claimBtn = document.getElementById('claim-btn');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    claimBtn.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
