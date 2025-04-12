document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }, 4000);  // Прелоадер исчезает через 4 секунды

    // Реакция на клик по кнопке
    document.getElementById('replyButton').addEventListener('click', function() {
        document.querySelector('.message').style.display = 'none';
        document.querySelector('.response-form').style.display = 'block';
    });

    // Отправка ответа
    document.getElementById('responseSubmit').addEventListener('click', function() {
        document.querySelector('.response-form').style.display = 'none';
        document.querySelector('.love-question').style.display = 'block';
        document.querySelector('.answer-buttons').style.display = 'flex'; // Появление кнопок "Да" и "Нет"
    });

    // Кнопка "Любишь меня?"
    document.getElementById('loveButton').addEventListener('click', function() {
        document.querySelector('.answer-buttons').style.display = 'flex'; // Появление кнопок "Да" и "Нет"
    });

    // Кнопка "Да" (переход на сайт)
    let yesButton = document.getElementById('yesButton');
    yesButton.addEventListener('click', function() {
        document.querySelector('.love-question').innerHTML = "<p>Я так и знал! 😊</p>";
        setTimeout(function() {
            window.location.href = "https://emaktab.uz/"; // Перенаправление на сайт через 3 секунды
        }, 3000);
    });

    // Кнопка "Нет" убегает от мыши
    let noButton = document.getElementById('noButton');

    document.addEventListener('mousemove', function(event) {
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        // Получаем размеры и позицию кнопки "Нет"
        let noButtonRect = noButton.getBoundingClientRect();
        let buttonX = noButtonRect.left + noButtonRect.width / 2;
        let buttonY = noButtonRect.top + noButtonRect.height / 2;

        // Расстояние между мышью и кнопкой
        let distanceX = Math.abs(mouseX - buttonX);
        let distanceY = Math.abs(mouseY - buttonY);

        // Если мышь близка к кнопке, она будет перемещаться
        if (distanceX < 100 && distanceY < 100) {
            let randomX = Math.random() * (window.innerWidth - noButtonRect.width) + "px"; // Ограничиваем по ширине
            let randomY = Math.random() * (window.innerHeight - noButtonRect.height) + "px"; // Ограничиваем по высоте

            noButton.style.left = randomX;
            noButton.style.top = randomY;
            noButton.style.transition = "left 0.2s ease, top 0.2s ease"; // Плавное перемещение
        }
    });
});
// Создание лепестков
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.getElementById('petal-container').appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 500);

// Всплывающие сердечки при наведении
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = (e.pageX - 10) + 'px';
        heart.style.top = (e.pageY - 10) + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    });
});
