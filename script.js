document.getElementById('heartButton').addEventListener('click', function() {
    createFloatingElements('heart', 25);

});

document.getElementById('quoteButton').addEventListener('click', function() {
    showRandomQuote();
});

document.getElementById('starButton').addEventListener('click', function() {
    createFloatingElements('star', 20);
});

document.getElementById('tulipButton').addEventListener('click', function() {
    createFloatingElements('tulip', 15);
});

function createFloatingElements(type, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.classList.add(type);
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.width = Math.random() * 30 + 20 + 'px';
        element.style.height = element.style.width;
        element.style.animation = `floatUp ${Math.random() * 4 + 6}s ease-in-out`;
        document.querySelector('.floating-elements').appendChild(element);
        setTimeout(() => {
            element.remove();
        }, 7000);
    }
}

function showRandomQuote() {
    const quotes = [
        "Love is not about how much you say 'I love you', but how much you can prove that it's true.",
        "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
        "I may not be your first date, kiss, or love, but I want to be your last everything.",
        "Every time I see you, I fall in love all over again.",
        "I love you more than yesterday and less than tomorrow."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = `<div class="quote">${quotes[randomIndex]}</div>`;
    quoteContainer.querySelector('.quote').style.display = 'block';
    setTimeout(() => {
        quoteContainer.querySelector('.quote').style.display = 'none';
    }, 5000);
}
