const cl = console.log;


const snackbar = (msg, icon) => {
    Swal.fire({
        title: msg,
        icon: icon,
        timer: 3000
      });
}


const postForm = document.getElementById('postForm');
const title = document.getElementById('title');
const content = document.getElementById('content');
const blogsContainer = document.getElementById('blogsContainer')


let blogsArr = [
    {
        title: "Angular 16 - introduced signals in angular",
        content: "Angular 16 - introduced signals in angular. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, error nemo. Illo consequuntur vitae neque."
    },
    {
        title: "Rxjs State managment in Angular",
        content: "Rxjs State managment in Angular. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, error nemo. Illo consequuntur vitae neque."
    }
]


const templating = (arr) => {
    let result = ``;
    arr.forEach(ele => {
        result += `  
                    <div class="card mb-4">
                        <div class="card-header">
                             ${ele.title}
                        </div>
                        <div class="card-body">
                            ${ele.content}
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-sm btn-info">Edit</button>
                            <button class="btn btn-sm btn-danger">Remove</button>
                        </div>
                    </div>
                      `
    });
    blogsContainer.innerHTML = result;
}


const createBlogs = (blog) => {
    //APi call to add new blog in DB
    setTimeout(() => {
        let err = Math.random() >= .5 ? false : true; // err == flase >> API success
        if(!err){
            blogsArr.push(blog)
            fetchAllblogs(); // callback function
        }else{
            snackbar(`Something went wrong, while creating a new Blog`, 'error')
        }
    }, 3000);
} 

const fetchAllblogs = () => {
    // To make a API call >> feth type data from DB
    setTimeout(() => {
        let err = Math.random() >= .5 ? false : true;
        if(!err){
            let data = blogsArr;
            templating(data)
            snackbar(`data is fetched successfully !!!`, 'success')
        }else{
            snackbar(`Something went wrong, while fetching Blog data`, 'error')
        }
    }, 1500);
}

const OnPostAdd = (eve) => {
    eve.preventDefault();
    // get a new post object 

    let postObj = {
        title: title.value,
        content: content.value.trim(),
    }
    postForm.reset()
    cl(postObj)
    createBlogs(postObj);
    fetchAllblogs()
}



postForm.addEventListener('submit', OnPostAdd)