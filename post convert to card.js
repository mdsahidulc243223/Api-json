const loadPost=()=>{
const url="https://jsonplaceholder.typicode.com/posts/1/comments"
fetch(url)
.then(res=>res.json())
.then((data)=>displayPost(data));
}
// {postId: 1, id: 1, name: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'}
const displayPost=(posts)=>{
    // 1.get the  container and empty the container
const postContainer=document.getElementById("post-container");
postContainer.innerText="";
posts.forEach((post)=>{
// 2.create element
const postCard=document.createElement("div");
postCard.innerHTML=`
<div class="post-card">
    <h2>${post.name}</h2>
    <p>${post.body}</p>
  </div>
`;

// 3. add to the container
postContainer.appendChild(postCard);
});
}
loadPost(); ///ata korle button e ar click kora lagbe na card auto display hobe