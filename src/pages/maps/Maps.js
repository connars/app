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
        // Создание пользовательских иконок
        const icon1 = {
          url: 'http://plamet.ua/wp-content/uploads/2023/06/marker-3.png', // Путь к изображению для первой иконки
          scaledSize: new window.google.maps.Size(50, 50), // Размер иконки
        };
  
        const icon2 = {
          url: 'http://plamet.ua/wp-content/uploads/2023/06/marker-3.png', // Путь к изображению для второй иконки
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
            <div className='map-nav'>
                <ul>
                    <li>
                       nav 1
                    </li>
                    <li>
                       nav 2
                    </li>
                    <li>
                       nav 3
                    </li>
                    <li>
                       nav 4
                    </li>
                </ul>
            </div>
            <div ref={mapRef} style={{ width: '100%', height: '90vh' }}>
        
            </div>;
        </>
    )

  }

export default Maps;