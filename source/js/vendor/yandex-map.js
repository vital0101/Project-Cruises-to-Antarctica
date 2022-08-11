ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [59.938635, 30.323118],
            zoom: 17,
            controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
        });
        myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-marker.svg',
          iconImageSize: [18, 22],
          iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);
    }
