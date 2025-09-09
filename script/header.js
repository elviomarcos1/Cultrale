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

        const currentPath = window.location.pathname; // Pega o caminho da URL (ex: /produtos.html)
        const navLinks = document.querySelectorAll('.nav-bar ul li a');

        navLinks.forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === currentPath || link.hash && link.hash === window.location.hash) {
                link.classList.add('active');
            }
            if (currentPath === '/' && link.getAttribute('href') === '#inicio') {
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
                
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });
