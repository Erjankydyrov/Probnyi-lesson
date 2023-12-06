function startAnimation() {
  // Получаем элементы DOM
  var startButton = document.getElementById('startButton');
  var image = document.getElementById('image');

  // Скрываем кнопку и отображаем изображение с анимацией
  startButton.style.display = 'none';
  image.style.display = 'block';
  image.classList.add('show');
}
