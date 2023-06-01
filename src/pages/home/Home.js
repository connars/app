import Posts from "../../components/Posts/Posts";

function Home() {

  const postsData = [
    {
      "id": 1,
      "title": "Заголовок первой записи",
      "content": "Содержимое первой записи блога...",
      "author": "Имя автора",
      "category" : "1",
      "date": "2023-05-15",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_раздвижка.jpg"
    },
    {
      "id": 2,
      "title": "Заголовок первой записи",
      "content": "Содержимое первой записи блога...",
      "author": "Имя автора",
      "category" : "1",
      "date": "2023-05-15",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_раздвижка.jpg"
    },
    {
      "id": 3,
      "title": "Заголовок второй записи",
      "content": "Содержимое второй записи блога...",
      "author": "Имя автора",
      "category" : "2",
      "date": "2023-05-20",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_двери.jpg"
    },
    {
      "id": 4,
      "title": "Заголовок третьей записи",
      "content": "Содержимое третьей записи блога...",
      "author": "Имя автора",
      "category" : "2",
      "date": "2023-05-25",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_окна.jpg"
    },
    {
      "id": 5,
      "title": "Заголовок первой записи",
      "content": "Содержимое первой записи блога...",
      "author": "Имя автора",
      "category" : "3",
      "date": "2023-05-15",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_раздвижка.jpg"
    },
    {
      "id": 6,
      "title": "Заголовок первой записи",
      "content": "Содержимое первой записи блога...",
      "author": "Имя автора",
      "category" : "3",
      "date": "2023-05-15",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_раздвижка.jpg"
    },
    {
      "id": 7,
      "title": "Заголовок второй записи",
      "content": "Содержимое второй записи блога...",
      "author": "Имя автора",
      "category" : "4",
      "date": "2023-05-20",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_двери.jpg"
    },
    {
      "id": 8,
      "title": "Заголовок третьей записи",
      "content": "Содержимое третьей записи блога...",
      "author": "Имя автора",
      "category" : "4",
      "date": "2023-05-25",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_окна.jpg"
    },
    {
      "id": 9,
      "title": "Заголовок первой записи",
      "content": "Содержимое первой записи блога...",
      "author": "Имя автора",
      "category" : "3",
      "date": "2023-05-15",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_раздвижка.jpg"
    },
    {
      "id": 10,
      "title": "Заголовок первой записи",
      "content": "Содержимое первой записи блога...",
      "author": "Имя автора",
      "category" : "3",
      "date": "2023-05-15",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_раздвижка.jpg"
    },
    {
      "id": 11,
      "title": "Заголовок второй записи",
      "content": "Содержимое второй записи блога...",
      "author": "Имя автора",
      "category" : "4",
      "date": "2023-05-20",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_двери.jpg"
    },
    {
      "id": 12,
      "title": "Заголовок третьей записи",
      "content": "Содержимое третьей записи блога...",
      "author": "Имя автора",
      "category" : "4",
      "date": "2023-05-25",
      "image": "http://plamet.ua/wp-content/uploads/2023/05/главная_окна.jpg"
    }
  ];

  return (
    <div>
         <Posts postsData={postsData} />
    </div>
  );
}

export default Home;
