const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
]

//()=>{}
function getPost() {
    //To mimic server lets say server takes 1 sec to get all posts
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);

}

function createPost(post) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let error = false;
            if (!error) {
                posts.push(post);
                resolve()
            }
            else {
                reject('Something went wrong!');
            }
        }, 2000);

    });
    
}

createPost({title:'Post three', body:'This is post three'})
.then(getPost)
.catch((error)=>console.log(error));


