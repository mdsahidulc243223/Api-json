// const loadPost=()=>{ //es-6 e ai vabe function decliar kore
//     const url="https://jsonplaceholder.typicode.com/posts/1/comments";
//     fetch(url)
//     .then(res=>res.json())
//     .then(json=>displayPost(json))
// }
// // array of object recive korse displayPost ta 
// const displayPost=(posts)=>{
   
// // 1) get the container
// const postContainer=document.getElementById("post-container");
// // console.log(postContainer);
// postContainer.innerText="";  //aki jinis bar bar na asar jonno innitialy empty rakha hoyse
//  posts.forEach((post) => {
//     //   console.log(post.body)  
//      //ata for of /for loop use kore o dekha jabe
//     // 2)Create html element
//     const li=document.createElement("li");
//     li.innerText= post.body;
//     console.log(li);
//     // 3) add li in container
//     postContainer.appendChild(li); //appendchidl dia kono kichy html e push kora hoy and seta k display te ui hiseve show korano hoy
// });
// }