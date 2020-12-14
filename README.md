<h2>Необходимо разработать React-приложение для отображения таблицы с данными.</h2> 
<h3>Функционал</h3>

Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике — по убыванию.</br>
</br>Графическим элементом или текстовым сообщением указывается направление сортировки.
</br>Клиентская пагинация: данные необходимо отображать постранично, максимум 50 элементов на страницу. 
</br>Необходимо предоставить пользовательскую навигацию для перехода по страницам.
</br>Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Перефильтрация осуществляется по нажатию на кнопку "Найти".
</br>По клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей.
</br>Данные в таблицу загружаются с сервера. 
</br>Способ загрузки с сервера на ваш выбор.
</br>Над таблицей присутсвует кнопка добавить, по нажатии на которую выпадает форма добавления ряда 
+------+------------+-----------------+-----------------+---------------+ | id | firstName | lastName | email | phone | +------+------------+-----------------+-----------------+--                                                           -------------+ |input | input | input | input | input | +------+------------+-----------------+-----------------+--------
</br>После заполнения всех инпутов активируется кнопка Добавить в таблицу которая вставляет заполненный ряд в начало таблицы
</br>Для демонстрации работы компонента необходимо сделать простую HTML страницу. </br>Пользователю предлагается выбрать набор данных: маленький или большой. При выборе набора данных он загружается с сервера и по данным строится таблица.
