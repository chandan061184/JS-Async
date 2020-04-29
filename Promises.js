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

// createPost({title:'Post three', body:'This is post three'})
// .then(getPost)
// .catch((error)=>console.log(error));

//Promise.all

const promise1 = Promise.resolve('Hello World!');
const promise2 =  10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Good bye!');
    }, 2000);
});

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>res.json());

// Promise.all([promise1, promise2, promise3, promise4])
// .then((values)=>console.log(values));


// Using Async and await
async function init(){
    //Wait untill createPost completes
    await createPost({title:'Post three', body:'This is post three'});
    getPost();
}
init();
