# absolute
Test project fo Absolute Web Services

Свёрстана страница на Bootstrap с использованием HTML5, CSS3, jQuery.

Bootstrap подключается в виде Less.
Переопределения и стили в файле less/custom.less

Сборщик Gulp собирает Bootstrap из папки bootstrap.override
В файле bootstrap.override/bootstrap.less подключается только переопределённый файл переменных bootstrap.override/variables.less (изменения в цвете ссылок с сетке)

Про требования к элементам/компонентам:

* Grid - использовался bootstrap 3

* Header (sticky) см. в файле js/custom.js блок sticky menu
  + Сделан без применения сторонних плагинов

* Footer (sticky) - зафиксирован для десктопов с помощью CSS

* Fonts - собраны в папке подключение в less/fonts.less

* Buttons - цвета bootstrap, кроме цвета @brand-primary
  + CSS3 анимация - при наведении сдвиг вниз, при нажатии ScaleX

* Inputs - все сделаны на чистом CSS

* Star rating - только CSS (в процентах указано 64%)

* Carousel - thumbnail работает как требуется
  + используется плагин Owl Carousel 2 (подключается из папки owlcarousel)

* Map - используется Google Map JS API. Параметры цветов указаны в файле js/custom.js

Про требования к проекту:

* вёрстка кроссбраузерная, но не проверена в EDGE
* pixel perfect - максимально приближено, но не идеально
* Gulp - сборка проекта
* Less - CSS-препроцессор
* NPM - подключение сторонних библиотек/плагинов
* результат https://github.com/githubsrga/absolute
  + сайт на https://githubsrga.github.io/absolute/index.html
