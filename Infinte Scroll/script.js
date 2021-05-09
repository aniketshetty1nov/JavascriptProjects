const postsContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');

const filter = document.getElementById('filter');


let limit = 3;
let page = 1;


// Fetch Posts from API
async function getPosts(){
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

      const data = await res.json();

      return data;

}

//SHow Posts in DOM
async function showPosts(){
      const posts = await getPosts();
      // console.log(posts);
      posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.classList.add('post');
            postEl.innerHTML = `
                  <div class="number">${post.id}</div>
                  <div class="post-info">
                        <h2 class = "post-title">${post.title}</h2>
                        <p class= "post-body">${post.body}</p>
                  </div>        
            `;

            postsContainer.appendChild(postEl);

      });
}


//Filter Posts by Input
function filterPosts(e){

      // console.log(e.target.value).toUpperCase;
      const term = e.target.value;
      const posts = document.querySelectorAll('.post');

      posts.forEach(post => {

           const title= post.querySelector('.post-title').innerText;
           const body= post.querySelector('.post-body').innerText;
            // console.log(title);
            // console.log(term);

           if(title.indexOf(term) > -1 ||  body.indexOf(term) > -1){
                  post.style.display = 'flex';
           }
           else{
             post.style.display = 'none';
           }
      });


}
 
//Show Initial posts
showPosts();


//SHow Loader and fetch moree posts
function showLoading(){
      loading.classList.add('show');

      setTimeout(()=>{
            loading.classList.remove('show');

            setTimeout(() => {
                  page++; 
                  showPosts();
            },300);
      },1000)

    
}


window.addEventListener('scroll', ()=>{

      // console.log(document.documentElement.clientHeight);
      // console.log(document.documentElement.scrollHeight);
      // console.log(document.documentElement.scrollTop);
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if(scrollTop + clientHeight >= scrollHeight-5 ){
           showLoading();

      }


});


filter.addEventListener('input',filterPosts);