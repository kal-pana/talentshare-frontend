function likePost(button) {
  if (!button.liked) {
    button.innerText = "❤️ Liked";
    button.style.backgroundColor = "#d6336c";
    button.liked = true;
  } else {
    button.innerText = "❤️ Like";
    button.style.backgroundColor = "#4e54c8";
    button.liked = false;
  }
}

function followAccount(button){
  if(!button.followed){
    button.innerText = "➕ followed";
    button.style.backgroundColor = "#008000";
    button.followed = true;
  }
  else{
    button.innerText = "➕ follow";
    button.style.backgroundColor = "#4e54c8";
    button.followed = false;
  }
}