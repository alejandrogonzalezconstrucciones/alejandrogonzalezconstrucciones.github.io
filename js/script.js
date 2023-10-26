const circle = document.querySelector('.circle');
        
        // Función para controlar la animación cuando el elemento es visible
        const handleScroll = () => {
            const rect = circle.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                circle.style.opacity = '1';
                circle.style.transform = 'scale(1)';
                window.removeEventListener('scroll', handleScroll); // Detiene la escucha de eventos cuando se activa la animación.
            }
        };

        window.addEventListener('scroll', handleScroll);
