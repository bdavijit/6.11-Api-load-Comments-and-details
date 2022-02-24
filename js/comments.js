const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displaycomments(data));
};
loadComments();

const displaycomments = (Comments) => {
  const comments_Container = document.getElementById("comments_Container");

  console.log(Comments);
  Comments.forEach((Comment) => {
    const div = document.createElement("div");
    div.classList.add("comments");
    div.innerHTML = `
     
        <h3>${Comment.name}</h3>
        <h4>${Comment.email}</h4>
        <p>${Comment.body.slice(0, 100) + "......"}</p>
        <button href="#comments_Details" onclick="CommentsDetails('${Comment.id}')">details</button>
        
 
        `;
    comments_Container.appendChild(div);
  });
};
const CommentsDetails = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then((res) => res.json())
    .then((data) => DisplayDetails(data));
};
const DisplayDetails = (Comment) => {
  const comments_Details = document.getElementById("comments_Details");
  comments_Details.innerHTML ="";

  const div = document.createElement("div");
    // div.classList.add('comments');
  div.innerHTML = `
       
      <h1>Id:${Comment.id} </h1>
      <h2>name: ${Comment.name}</h2>
      <h3>Email: ${Comment.email} </h3>
      <p>body: ${Comment.body}</p>
      <h5>post id: ${Comment.postId}</h5>
          
   
    `;
  comments_Details.appendChild(div);
};
