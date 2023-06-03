import './maps.css';
import { useEffect, useRef } from 'react';

function Maps() {
  const mapRef = useRef(null);
  const apiKey = 'AIzaSyBWEj0dCgDU8FcpHq0TkqXOVDVZ4X-NBrM'; // Замените на свой API-ключ Google Maps

  useEffect(() => {
    // Функция, которая будет вызвана при загрузке скрипта Google Maps
    window.initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 8,
      });
      const darkMapStyles = require('./darkMapStyle.json');
      map.setOptions({ styles: darkMapStyles });
      // Создание пользовательских иконок
      const icon1 = {
        url: 'https://ehoss.com/mail/marker.png', // Путь к изображению для первой иконки
        scaledSize: new window.google.maps.Size(50, 50), // Размер иконки
      };

      const icon2 = {
        url: 'https://ehoss.com/mail/marker.png', // Путь к изображению для второй иконки
        scaledSize: new window.google.maps.Size(50, 50), // Размер иконки
      };

      // Создание маркеров с пользовательскими иконками
      const marker1 = new window.google.maps.Marker({
        position: { lat: 48.165994765408215, lng: 17.15407051939942 }, // Координаты первой точки
        map, // Карта, на которую добавляем маркер
        icon: icon1, // Иконка для первой точки
      });

      const marker2 = new window.google.maps.Marker({
        position: { lat: 48.20797664010454, lng: 17.72602060395612 }, // Координаты второй точки
        map, // Карта, на которую добавляем маркер
        icon: icon2, // Иконка для второй точки
      });

      // Создание границ для фокусировки карты между двумя маркерами
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(marker1.getPosition());
      bounds.extend(marker2.getPosition());
      
      // Фокусировка карты на границах
      map.fitBounds(bounds);
            // Создание полигональной зоны
      const zoneCoords = [
        { lat: 48.197070, lng: 17.360877 },
        { lat: 48.155841686555256, lng: 17.38743130593463 },
        { lat:  48.15319274206418, lng: 17.49319914977359 },
        { lat: 48.22131045301261, lng: 17.463679984402372 },
      ];

      const zone = new window.google.maps.Polygon({
        paths: zoneCoords,
        strokeColor: '#FF0000', // Цвет обводки (красный)
        strokeOpacity: 0.8, // Прозрачность обводки (от 0 до 1)
        strokeWeight: 2, // Толщина обводки
        fillColor: '#FF0000', // Цвет заливки (красный)
        fillOpacity: 0.35, // Прозрачность заливки (от 0 до 1)
      });

      // Создание информационного окна
      const infoWindow = new window.google.maps.InfoWindow({
        content: '<div style="color: black;">Тестовая зона 1(For Viktor)</div>',
      });

      // Добавление обработчиков событий для отображения информационного окна
      window.google.maps.event.addListener(zone, 'mouseover', function (event) {
        infoWindow.setPosition(event.latLng);
        infoWindow.open(map);
      });

      window.google.maps.event.addListener(zone, 'mouseout', function () {
        infoWindow.close();
      });

      // Добавление зоны на карту
      zone.setMap(map);

    };

    // Загрузка скрипта Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Очистка ресурсов после размонтирования компонента
    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  return (
    <>
      <div className="map-nav">
        <h2>
          Какое-то меню
        </h2>
        <ul>
          <li>Фокус на зону</li>
          <li>nav 2</li>
          <li>nav 3</li>
          <li>nav 4</li>
        </ul>
      </div>
      <div ref={mapRef} style={{ width: '100%', height: '90vh' }}></div>
    </>
  );
}

export default Maps;