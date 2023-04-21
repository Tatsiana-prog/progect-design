	//подключение модального окна
const modalIcon = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');

modalIcon.addEventListener('click', function () {
	this.classList.toggle('modal-icon--active');
	modal.classList.toggle('modal--active');
});

// Находим ссылки внутри мобильной навигации
const modalLinks = document.querySelectorAll('.modal a');

// Обходим ссылки методом forEach
modalLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		modalIcon.classList.remove('modal-icon--active'); // Убираем активный класс у иконки моб. навигации
		modal.classList.remove('modal--active'); // Убираем активный класс у блока моб. навигации
	});
})



























	