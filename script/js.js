
// Переменные для работы
const postTitle = document.getElementById('title');
const postBody = document.getElementById('boby');
const btnAddPost = document.getElementById('btn_add');
const posts = document.querySelector('.posts');

// массив постов
let postList = [];

document.addEventListener('DOMContentLoaded', function (evt) {
    evt.preventDefault();
});

btnAddPost.addEventListener('click', function sendPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: postTitle,
            body: postBody,
        }),
    })
        .then(response => response.json())
        .then(data => {
            let post = {
                title: postTitle.value,
                body: postBody.value,
            };
            // console.log(post);
            postList.push(post);

            // переменная с последним постом в массиве
            let lastPost = postList[postList.length - 1];

            // место для вывода поста на экран
            let titlePost = document.createElement('h3');
            titlePost.classList = 'title';
            titlePost.textContent = lastPost.title;

            let newP = document.createElement('p');
            newP.classList = 'post_body'
            newP.textContent = lastPost.body;

            posts.append(titlePost, newP);
            postTitle.value = '';
            postBody.value = '';
        })
        .catch(error => console.log(error));
})