// Переменные для работы
const btnAddPost = document.getElementById("btn_add");
const posts = document.querySelector(".posts");
let now = new Date();
let date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
let time = `${now.getHours()}:${now.getMinutes()}`;
let fullDate = date + " " + time;

// массив постов
let postList = [];

btnAddPost.addEventListener("click", function sendPost() {
  let post = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
    date: fullDate,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      postList.push(post);

      // переменная с последним постом в массиве
      let lastPost = postList[postList.length - 1];
      console.log(lastPost);

      // место для вывода поста на экран
      let divPost = document.createElement("div");
      divPost.classList = 'divPost';

      let titlePost = document.createElement("h2");
      titlePost.classList = "title";
      titlePost.textContent = lastPost.title;

      let datePost = document.createElement("p");
      datePost.classList = "date";
      datePost.textContent = lastPost.date;

      let newP = document.createElement("p");
      newP.classList = "post_body";
      newP.textContent = lastPost.body;

      posts.append(divPost);
      divPost.append(titlePost, datePost, newP);
      title.value = "";
      body.value = "";
    })
    .catch((error) => console.log(error));
});
