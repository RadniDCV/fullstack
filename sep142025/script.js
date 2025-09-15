// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functionality
const modal = document.getElementById('uploadModal');
const uploadBtn = document.querySelector('.btn-secondary');
const closeBtn = document.querySelector('.close');
const fileInput = document.getElementById('fileInput');
const uploadArea = document.getElementById('uploadArea');
const fileInfo = document.getElementById('fileInfo');

// Abrir modal
uploadBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// File upload functionality
fileInput.addEventListener('change', handleFileSelect);

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        displayFileInfo(file);
        uploadFile(file);
    }
}

// Drag and drop functionality
uploadArea.addEventListener('click', () => {
    fileInput.click();
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const file = e.dataTransfer.files[0];
    if (file && isValidFileType(file)) {
        displayFileInfo(file);
        uploadFile(file);
    } else {
        alert('Por favor, sube un archivo PDF, DOC o DOCX');
    }
});

// Validar tipo de archivo
function isValidFileType(file) {
    const validTypes = ['application/pdf', 'application/msword', 
                       'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return validTypes.includes(file.type);
}

// Mostrar información del archivo
function displayFileInfo(file) {
    const fileSize = (file.size / 1024 / 1024).toFixed(2);
    fileInfo.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div>
                <strong>${file.name}</strong>
                <p style="color: #6b7280; font-size: 0.9rem; margin-top: 0.25rem;">
                    ${fileSize} MB
                </p>
            </div>
            <div style="color: #10b981;">
                ✓ Archivo cargado
            </div>
        </div>
    `;
    fileInfo.classList.add('show');
}

// Simular carga de archivo
function uploadFile(file) {
    // Aquí iría la lógica real de carga al servidor
    console.log('Subiendo archivo:', file.name);
    
    // Simular progreso de carga
    setTimeout(() => {
        alert(`CV "${file.name}" subido exitosamente!`);
        modal.style.display = 'none';
        fileInfo.classList.remove('show');
        fileInput.value = '';
    }, 1500);
}

// Descargar CV (ejemplo)
function downloadCV() {
    // Aquí puedes poner la URL de tu CV
    const cvUrl = 'path/to/your-cv.pdf';
    
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mi_CV.pdf';
    
    // Simular clic para iniciar descarga
    // link.click();
    
    // Por ahora solo mostramos una alerta
    alert('Funcionalidad de descarga: Reemplaza con la URL de tu CV');
}

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.timeline-item, .skill-card').forEach(el => {
    observer.observe(el);
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Typed effect para el título
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Inicializar efecto de escritura (opcional)
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.hero-subtitle');
    if (txtElement) {
        const words = ['Desarrollador Web Full Stack', 'Diseñador UI/UX', 'Freelancer'];
        // Descomenta la siguiente línea si quieres el efecto de escritura
        // new TypeWriter(txtElement, words, 2000);
    }
}

// Formulario de contacto (si lo agregas más tarde)
function handleContactForm(e) {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado');
}

// Función para actualizar el año actual en el footer (si lo agregas)
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Particles.js configuration (opcional - requiere librería externa)
function initParticles() {
    // Configuración de partículas para el fondo
    // Requiere incluir particles.js
}

// Easter egg: Konami Code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// CSS para el easter egg (agregar al CSS)
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Función para guardar CV en localStorage
function saveToLocalStorage(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const fileData = {
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            data: e.target.result
        };
        localStorage.setItem('uploadedCV', JSON.stringify(fileData));
        console.log('CV guardado en localStorage');
    };
    reader.readAsDataURL(file);
}

// Función para recuperar CV de localStorage
function loadFromLocalStorage() {
    const savedCV = localStorage.getItem('uploadedCV');
    if (savedCV) {
        const fileData = JSON.parse(savedCV);
        console.log('CV recuperado:', fileData.name);
        return fileData;
    }
    return null;
}

// Limpiar localStorage
function clearLocalStorage() {
    localStorage.removeItem('uploadedCV');
    console.log('CV eliminado de localStorage');
}

// Exportar funciones para uso global
window.downloadCV = downloadCV;
window.handleContactForm = handleContactForm;
window.clearLocalStorage = clearLocalStorage;