let posts = [];

document.addEventListener('DOMContentLoaded', function getPost() {
    let container = document.querySelector('.container');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        params: {
            "SelectionCriteria": {},
            "fieldsNames": ["title", "body"]
        }
    })
        .then(Response => Response.json())
        .then(post => {
            posts.push(post);

            post.forEach((el) => {
                let titlePost = document.createElement('h2');
                titlePost.classList = 'title';
                titlePost.innerText = 'Заголовок: ' + el.title;

                let postBody = document.createElement('p');
                postBody.classList = 'post';
                postBody.innerText = el.body;

                container.append(titlePost, postBody);

            })
        })
        .catch(error => console.log(error));
})