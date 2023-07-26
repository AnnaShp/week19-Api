
// Переменные для работы
const btnAddPost = document.getElementById('btn_add');
const posts = document.querySelector('.posts');

// массив постов
let postList = [];

btnAddPost.addEventListener('click', function sendPost() {
    let post = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(post),
    })
        .then(response => response.json())
        .then(data => {
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
            title.value = '';
            body.value = '';
        })
        .catch(error => console.log(error));
})