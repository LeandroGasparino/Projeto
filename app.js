console.log(dados);

// Obtém o elemento do botão de pesquisa e adiciona um evento de clique
let searchButton = document.getElementById("search-button").addEventListener("click", function(){
    // Obtém o valor do input de pesquisa
    let searchInput = document.getElementById('search-input').value;
    console.log('Valor da pesquisa:', searchInput);

    // Filtra os dados com base no valor da pesquisa
    let filteredData = dados.filter(function(item){
        return item.titulo.toLowerCase().includes(searchInput.toLowerCase());
    });

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementsByClassName("resultado-pesquisa")[0];
    section.innerHTML = "";

    // Exibe os dados filtrados
    filteredData.forEach(function(item){
        // Cria um elemento de div para cada item filtrado
        let div = document.createElement("div");
        div.className = "item-resultado";

        // Cria um elemento de h2 para exibir o título do item
        let h2 = document.createElement("h2");
        h2.textContent = item.titulo;

        // Cria um elemento de p para exibir a descrição do item
        let p = document.createElement("p");
        p.className = "descrição-meta";
        p.textContent = item.descricao;

        // Cria um elemento de a para exibir um link para mais informações
        let a = document.createElement("a");
        a.href = item.link;
        a.target = "_blank";
        a.textContent = "Mais informações";

        // Adiciona os elementos criados à div
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(a);

        // Adiciona a div à seção
        section.appendChild(div);
    });

    // Exibe os dados filtrados no console
    console.log(filteredData);
});
