
document.addEventListener("DOMContentLoaded", function() {
    const thebtn = document.getElementById("commentMM");
    thebtn.addEventListener("submit", function() {
        alert("The comment was sent successfully !");
    });
});
let darkMode = false;

function toggleTheme() {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? 'rgb(18, 10, 49)' : 'rgb(110, 190, 196)';
  document.body.style.color = darkMode ? 'rgb(110, 190, 196)' : 'rgb(18, 10, 49)';
}

document.getElementById('theme-togglem').addEventListener('click', toggleTheme);

function displayComment(comment) {
    const p = document.createElement("p");
    p.textContent = comment;
    document.getElementById('comments-container').appendChild(p);
  }
  
 
  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const commentText = document.getElementById('comment-text').value.trim();
    if (commentText !== '') {
      displayComment(commentText); 
      document.getElementById('comment-text'). value = ''
    }
  });