ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.938635, 30.323118],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });
        var myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
          iconLayout: 'default#image',
          iconImageHref: './img/map-marker.svg',
          iconImageSize: [18, 22],
          iconImageOffset: [-3, -42]
      });
    }
