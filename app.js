const github = new GitHub();

const searchUser = document.getElementById("searchUser");

//event listener

searchUser.addEventListener("keyup", e => {
  //get input text

  const userText = e.target.value;
  if (userText !== "") {
    // console.log(userText);

    //make http call

    github.getUser(userText).then(data => {
      //console.log(data);

      if (data.prifile.message === "Not Fouond") {
        //show alert
      } else {
        //show the profile
      }
    });
  }else{
    //clear profile
    
  }
});
