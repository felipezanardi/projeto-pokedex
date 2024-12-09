document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("questionario");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const dadosFormulario = new FormData(formulario);

        // Converter imagem em base64 e salvar no localStorage
        const arquivoImagem = dadosFormulario.get("print");
        if (arquivoImagem) {
            const leitor = new FileReader();
            leitor.onload = () => {
                localStorage.setItem("imagemBug", leitor.result); // Salvar imagem em base64 no localStorage

                
                // Criar parâmetros restantes
                document.querySelectorAll('input[type="checkbox"]:checked').forEach((input) => {
                    const currentValue = dadosFormulario.get(input.name) || "";
                    const newValue = currentValue.split(", ").includes(input.value)
                        ? currentValue // Não adicionar valor duplicado
                        : currentValue
                        ? `${currentValue}, ${input.value}`
                        : input.value;
                    dadosFormulario.set(input.name, newValue);
                });

                const stringConsulta = new URLSearchParams(dadosFormulario).toString();
                window.open(`retorno-report.html?${stringConsulta}`, '_blank');
            };
            leitor.readAsDataURL(arquivoImagem);
        } else {
            alert("Nenhuma imagem foi anexada!");
        }
    });

    document.getElementById("Localizacao").addEventListener("click", localizar);

    function localizar() {
        const x = document.getElementById("Localizacao");

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (posicao) => {
                    const latitude = posicao.coords.latitude;
                    const longitude = posicao.coords.longitude;

                    document.getElementById("latitude").value = latitude.toFixed(6);
                    document.getElementById("longitude").value = longitude.toFixed(6);

                    x.innerHTML = `Coordenadas atuais: Latitude-${latitude.toFixed(6)} || Longitude-${longitude.toFixed(6)}`;
                },
                (erro) => {
                    switch (erro.code) {
                        case erro.PERMISSION_DENIED:
                            x.innerHTML = "Usuário negou a solicitação de geolocalização.";
                            break;
                        case erro.POSITION_UNAVAILABLE:
                            x.innerHTML = "A localização não está disponível.";
                            break;
                        case erro.TIMEOUT:
                            x.innerHTML = "A solicitação para obter a localização expirou.";
                            break;
                        case erro.UNKNOWN_ERROR:
                            x.innerHTML = "Erro desconhecido.";
                            break;
                    }
                }
            );
        } else {
            x.innerHTML = "Geolocalização não é suportada pelo seu navegador.";
        }
    }
});