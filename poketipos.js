if(window.Miobjeto){
    window.Miobjeto.add=function(){

        // ************************
        // LLAMADO DE LOS ELEMENTOS
        // ************************
        fetch('./type.json')
        .then(response => response.json())
        .then(data => {
            const contenedorProductos = document.querySelector(".filter-by-type");

            data.forEach(type => {
                const article = document.createElement("div");
                article.classList.add("group-type");

                article.innerHTML = `
                    
                    <input type="checkbox" name="${type.tipo}" class="type_filter" id="${type.tipo}" value="${type.tipo}"></input>
                    <label for="${type.tipo}">${type.nombre}</label>
                `;
                contenedorProductos.appendChild(article);
            });

            // ***********************************************
            // CAPTURA DE EVENTO Y ALMACENADO AL OBJETO GLOBAL
            // ***********************************************
            const addtipe = document.querySelectorAll(".type_filter");

            addtipe.forEach(checkbox => {
                checkbox.addEventListener("change", () => {
                    window.Miobjeto.Lista.length = 0; // Vaciamos el array antes de volver a llenarlo

                    addtipe.forEach(checkbox => {
                        if (checkbox.checked) {
                            window.Miobjeto.Lista.push(checkbox.id); // Agregamos los IDs de los checkboxes marcados a la lista
                        }
                    });
                    
                });
            });


        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));


    };
}
