
document.getElementById('submit_user').addEventListener('click', (e) => {
    e.preventDefault();
    var user = document.getElementById('input_user').value;

    searchUsers(user);
});

searchUsers = (user) => {
    fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}




