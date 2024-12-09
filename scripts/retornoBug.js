document.addEventListener("DOMContentLoaded", () => {
    const parametrosUrl = new URLSearchParams(window.location.search);

    const container = document.querySelector(".containerRelatorio");

    // Adicionar os textos enviados
    parametrosUrl.forEach((valor, chave) => {
        const elemento = document.createElement("p");
        if(chave== "print"){

        }else{
            if (chave === "tipo") { // Checkboxes selecionados
                const itens = valor.split(", "); // Dividir os valores
                elemento.textContent = `${chave}: ${itens.join(", ")}`; // Mostrar todos os itens
            } else {
                elemento.textContent = `${chave}: ${valor}`;
            }
            container.appendChild(elemento);
        }
    });
    

    // Recuperar a imagem do localStorage
    const imagemBase64 = localStorage.getItem("imagemBug");
    if (imagemBase64) {
        const img = document.createElement("img");
        img.src = imagemBase64; // Definir a imagem como fonte base64
        img.alt = "Imagem do Bug";
        img.style.maxWidth = "500px";
        
        container.appendChild(img);
    }

    //Mapa
    const latitude = parseFloat(new URLSearchParams(window.location.search).get("latitude"));
    const longitude = parseFloat(new URLSearchParams(window.location.search).get("longitude"));

    if (latitude && longitude) {
        // Configurando o mapa com Leaflet.js
        const map = L.map('mapa').setView([latitude, longitude], 13); // Coordenadas iniciais

        // Adicionando camada de mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Adicionando um marcador no mapa
        L.marker([latitude, longitude]).addTo(map)
            .bindPopup(`Local do bug:<br>Latitude: ${latitude}<br>Longitude: ${longitude}`)
            .openPopup();
    } else {
        document.getElementById("mapa").innerHTML = "<p>Coordenadas não fornecidas.</p>";
    }

    // Voltar para a página de formulário
    document.getElementById("volta").addEventListener("click", () => {
        window.location.href = "bug-report.html";
    });
});