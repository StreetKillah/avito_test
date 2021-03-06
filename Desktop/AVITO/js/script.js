
getLocalValue = () => {
      document.getElementById('input_user').value = localStorage.getItem('input_key');
}
window.addEventListener("load", (e) => {
    e.preventDefault();
    getLocalValue();
});
document.getElementById('submit_user').addEventListener('click', (e) => {
    let elem_input = document.getElementById('input_user');
    let value = elem_input.value;
    let key = elem_input.getAttribute('name');
    localStorage.setItem(key, value);
    
    searchUsers(value);
});

searchUsers = (name) => {
    document.getElementById('repositories_list').innerHTML = "";
    fetch(`https://api.github.com/search/repositories?q=${name}&sort=stars&order=desc`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for(let elem in data.items){
           console.log(data.items[elem]);
            document.getElementById('repositories_list').insertAdjacentHTML('beforeend',`<div id='elem'><span id="name_elem">${data.items[elem].name}</span>
            <span id="owner"><img src="${data.items[elem].owner.avatar_url}" alt="." /><div>by ${data.items[elem].owner.login}</div></span>
            <span id="last_commit">Last commit: ${data.items[elem].updated_at.slice(0,10)}</span>
            <a href="https://${data.items[elem].git_url.slice(6)}" id="link_to_github">Open at Github</a>
            <span id="stars"><img src="./img/star.svg" alt="." />${data.items[elem].stargazers_count}</span>
        </div>`);
      } 
      
    });
}




