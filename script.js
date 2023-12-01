let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;
    clickStars(rating);
}

function hoverStars(rating) {
    const stars = document.querySelectorAll('.star');
    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].classList.add('inactive');
        } else {
            stars[i].classList.remove('inactive');
        }
    }
}

function clickStars(rating) {
    const stars = document.querySelectorAll('.star');
    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].innerHTML = '&starf;';
            stars[i].classList.add('active');
        } else {
            stars[i].innerHTML = '&star;';
            stars[i].classList.remove('active');
        }
    }
}

function resetStars() {
    hoverStars(selectedRating);
}

function submitRating() {
    const url1 = 'URL1'; // înlocuiește cu URL1
    const url2 = 'URL2'; // înlocuiește cu URL2

    if (selectedRating >= 1 && selectedRating <= 4) {
        window.location.href = url1;
    } else if (selectedRating === 5) {
        window.location.href = url2;
    }
}
