let noticiasPorPagina = 5;
let paginaActual = 1;

function cargarNoticias() {
    fetch('json/noticias.json')
        .then(response => response.json())
        .then(noticias => {
            let inicio = (paginaActual - 1) * noticiasPorPagina;
            let fin = inicio + noticiasPorPagina;
            let noticiasAMostrar = noticias.slice(inicio, fin);

            let noticiasHTML = noticiasAMostrar.map(noticia => `
                <div class="blog-list-box animate fadeInLeft wow" data-wow-duration="1500ms" data-wow-delay="200ms"> 
                    <div class="blog-single-image">
                        <a href="blog-details.html?noticia=${noticia.id}">
                            <img src="${noticia.imagen}" alt="Imagen de ${noticia.titulo}">
                        </a>
                        <a href="blog-details.html?noticia=${noticia.id}">
                            <p>${noticia.dia}</p><span>${noticia.mes}</span>
                        </a>
                    </div>
                    <div class="blog-single-meta">
                        <ul>
                            <li><span>by </span><a href="blog-details.html?noticia=${noticia.id}">${noticia.autor}</a></li>
                            |
                            <li><a href="blog-details.html?noticia=${noticia.id}">${noticia.categoria}</a></li>
                        </ul>
                    </div>
                    <div class="blog-single-details">
                        <h4><a href="blog-details.html?noticia=${noticia.id}">${noticia.titulo}</a></h4>
                        <p>${noticia.descripcion}</p>
                        <a href="blog-details.html?noticia=${noticia.id}" class="btn btn-theme btn-outline-dark">Leer más +</a>
                    </div>
                </div>
            `).join('');

            document.getElementById('noticias-container').innerHTML += noticiasHTML;
            paginaActual++;

            // Ocultar botón si no hay más noticias
            if (fin >= noticias.length) {
                document.getElementById('cargar-mas').style.display = 'none';
            }
        })
        .catch(error => console.error('Error al cargar las noticias:', error));
}

// Evento para cargar más noticias
document.getElementById('cargar-mas').addEventListener('click', cargarNoticias);

// Cargar las primeras noticias al iniciar
cargarNoticias();
