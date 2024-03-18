document.addEventListener("DOMContentLoaded", function() {
    fetch('./type.json')
        .then(response => response.json())
        .then(data => {
            const contenedorProductos = document.querySelector(".filter-by-type");

            data.forEach(type => {
                const article = document.createElement("div");
                article.classList.add("group-type");

                article.innerHTML = `
                    <input type="checkbox" name="${type.tipo}" id="${type.tipo}">
                    <label for="${type.tipo}">${type.nombre}</label>
                `;
                contenedorProductos.appendChild(article);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});