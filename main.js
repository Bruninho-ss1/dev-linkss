function GetGitHubProfileInfos() {
    const url = `https://api.github.com/users/Bruninho-ss1`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
    
  }
  GetGitHubProfileInfos()

function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
}
  