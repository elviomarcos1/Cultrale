 document.addEventListener('DOMContentLoaded', function() {
        const hamburgerBtn = document.querySelector('.hamburger-menu');
        const mainNavBar = document.querySelector('.nav-bar');
        const navLinks = document.querySelectorAll('.nav-bar ul li a');

        hamburgerBtn.addEventListener('click', function() {
            mainNavBar.classList.toggle('open');
            hamburgerBtn.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (mainNavBar.classList.contains('open')) {
                    mainNavBar.classList.remove('open');
                    hamburgerBtn.classList.remove('open');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    });

     document.addEventListener('DOMContentLoaded', function() {
        // ... (seu código JavaScript existente para o hambúrguer, se houver) ...

        const currentPath = window.location.pathname; // Pega o caminho da URL (ex: /produtos.html)
        const navLinks = document.querySelectorAll('.nav-bar ul li a');

        navLinks.forEach(link => {
            // Remove a classe 'active' de todos os links primeiro
            link.classList.remove('active');

            // Verifica se o href do link corresponde ao caminho atual da URL
            // Isso pode precisar de ajustes dependendo de como suas URLs estão estruturadas.
            // Ex: Se o link é "#produtos" e a URL é "index.html#produtos", isso funciona.
            // Se o link é "produtos.html" e a URL é "seusite.com/produtos.html", isso funciona.
            if (link.getAttribute('href') === currentPath || link.hash && link.hash === window.location.hash) {
                link.classList.add('active');
            }
            // Caso especial para a página inicial, se a URL for "/", o link 'Inicio' deve ser ativo.
            if (currentPath === '/' && link.getAttribute('href') === '#inicio') {
                 link.classList.add('active');
            }
            // Outro caso: se a URL for '/index.html' e o link é para a home
            if (currentPath.includes('index.html') && link.getAttribute('href') === '#inicio') {
                link.classList.add('active');
            }
        });

        // Fechar o menu ao clicar em um link (se tiver hambúrguer)
        const hamburgerBtn = document.querySelector('.hamburger-menu');
        const mainNavBar = document.getElementById('mainNavBar');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (mainNavBar && hamburgerBtn && mainNavBar.classList.contains('open')) {
                    mainNavBar.classList.remove('open');
                    hamburgerBtn.classList.remove('open');
                    document.body.classList.remove('no-scroll');
                }

                // Opcional: Atualizar a classe 'active' imediatamente ao clicar em um link de âncora
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
