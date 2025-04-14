document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const megaMenu = document.querySelector(".mega-menu");

  toggleButton.addEventListener("click", () => {
    megaMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    const isClickInside = toggleButton.contains(event.target) || megaMenu.contains(event.target);
    if (!isClickInside) {
      megaMenu.classList.add("hidden");
    }
  });

  const departamentoItems = document.querySelectorAll('.departamento-item');
  const categoriasFixa = document.querySelector('.categorias-fixa');
  const conteudoCategorias = document.getElementById('conteudo-categorias');

  const categoriasPorDepartamento = {
    categoria1: ['Categoria', 'Categoria', 'Categoria','Categoria','Categoria','Categoria','Categoria','Categoria', 'Categoria', 'Categoria','Categoria','Categoria','Categoria','Categoria','Categoria', 'Categoria', 'Categoria','Categoria','Categoria','Categoria','Categoria'],
    categoria2: ['Categoria', 'Categoria', 'Categoria','Categoria','Categoria','Categoria','Categoria','Categoria', 'Categoria', 'Categoria','Categoria','Categoria','Categoria','Categoria','Categoria', 'Categoria', 'Categoria','Categoria','Categoria','Categoria','Categoria']
  };

  let isHoveringDepartamento = false;
  let isHoveringCategoria = false;

  departamentoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      isHoveringDepartamento = true;

      const categoria = item.getAttribute('data-categoria');
      conteudoCategorias.innerHTML = '';

      if (categoriasPorDepartamento[categoria]) {
        const categorias = categoriasPorDepartamento[categoria];
        const chunkSize = 7;

        for (let i = 0; i < categorias.length; i += chunkSize) {
          const coluna = document.createElement('div');
          coluna.classList.add('coluna-categorias');

          const chunk = categorias.slice(i, i + chunkSize);
          chunk.forEach(cat => {
            const p = document.createElement('p');
            p.textContent = cat;
            coluna.appendChild(p);
          });

          conteudoCategorias.appendChild(coluna);
        }
      } else {
        conteudoCategorias.innerHTML = '<p>Sem categorias</p>';
      }

      // POSICIONA a .categorias-fixa fora do scroll
      const itemRect = item.getBoundingClientRect();
      categoriasFixa.style.top = `${itemRect.top}px`; // Y da tela
      categoriasFixa.style.left = `${itemRect.right + 10}px`; // à direita do item

      categoriasFixa.classList.remove('hidden');
    });

    item.addEventListener('mouseleave', () => {
      isHoveringDepartamento = false;
      setTimeout(() => {
        if (!isHoveringDepartamento && !isHoveringCategoria) {
          categoriasFixa.classList.add('hidden');
        }
      }, 200);
    });
  });

  categoriasFixa.addEventListener('mouseenter', () => {
    isHoveringCategoria = true;
    categoriasFixa.classList.remove('hidden');
  });

  categoriasFixa.addEventListener('mouseleave', () => {
    isHoveringCategoria = false;
    setTimeout(() => {
      if (!isHoveringDepartamento && !isHoveringCategoria) {
        categoriasFixa.classList.add('hidden');
      }
    }, 200);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollRightButton = document.getElementById('scroll-right');
  const scrollLeftButton = document.getElementById('scroll-left');
  const container = document.querySelector('.produtos');

  if (scrollRightButton && container) {
    scrollRightButton.addEventListener('click', () => {
      container.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });
  }

  if (scrollLeftButton && container) {
    scrollLeftButton.addEventListener('click', () => {
      container.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
 
  const scrollRightButton2 = document.getElementById('scroll-right2');
  const scrollLeftButton2 = document.getElementById('scroll-left2');
  const container2 = document.querySelector('.produtos2');

  if (scrollRightButton2 && container2) {
    
    scrollRightButton2.addEventListener('click', () => {
      container2.scrollBy({
        left: 300,  
        behavior: 'smooth' 
      });
    });
  }

  if (scrollLeftButton2 && container2) {
   
    scrollLeftButton2.addEventListener('click', () => {
      container2.scrollBy({
        left: -300, 
        behavior: 'smooth' 
      });
    });
  }
});



