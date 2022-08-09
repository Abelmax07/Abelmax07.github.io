const container = document.getElementById("container")

const base_url = "https://api.github.com/search/repositories?q=dnit";

async function repositorio() {
    const reponse = await fetch(base_url)
    const data = await reponse.json()

    data.items.map(repositoy => {
        const full_name = document.createElement("h2")
        full_name.classList.add("fullname")

        const ownerLogin = document.createElement("p")
        ownerLogin.classList.add("ownerlogin")

        const description = document.createElement("p")
        description.classList.add("descricao")

        const imagem = document.createElement("img")
        imagem.src = repositoy.owner.avatar_url
        imagem.classList.add("foto")

        full_name.innerHTML = repositoy.full_name
        ownerLogin.innerHTML = repositoy.owner.login
        description.innerHTML = repositoy.description
        const itemContainer = document.createElement("div")
        itemContainer.classList.add("item")
        
        itemContainer.appendChild(imagem)
        itemContainer.appendChild(full_name)
        itemContainer.appendChild(ownerLogin)
        itemContainer.appendChild(description)
        container.appendChild(itemContainer)
    })
}

repositorio()