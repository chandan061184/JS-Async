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

// function createPost(post)
// {
//     //To mimic server lets say server takes 2 sec to create a post
//     setTimeout(()=>{
//         posts.push(post)}
//         , 2000);
// }

// createPost({title:'Post three', body:'This is post three'});
// getPost(); //getPost() will get executed and will paint the DOM even before createPost completed


//Callback

function createPost(post, Callback)
{
    //To mimic server lets say server takes 2 sec to create a post
    setTimeout(()=>{
        posts.push(post);
        Callback();
    }, 2000);
}
//Callback getPost() method: Now getPost will get executed after posts.push(post) statement of method createPost()
createPost({title:'Post three', body:'This is post three'}, getPost);



