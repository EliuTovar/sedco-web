document.addEventListener("DOMContentLoaded", () => {
    const dropZone = document.getElementById("drop-zone");
    const fileInput = document.getElementById("cvFile");
    const dropText = document.getElementById("drop-text");
    const cvForm = document.getElementById("cvForm");
    const submitBtn = document.querySelector(".btn-submit");

    // === 1. Lógica Visual de Arrastrar y Soltar ===
    dropZone.addEventListener("click", () => fileInput.click());

    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("dragover");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("dragover");
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("dragover");
        if (e.dataTransfer.files.length > 0) {
            fileInput.files = e.dataTransfer.files;
            updateFileName(e.dataTransfer.files[0].name);
        }
    });

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            updateFileName(fileInput.files[0].name);
        }
    });

    function updateFileName(fileName) {
        const currentLang = localStorage.getItem('selectedLang') || 'es';
        const successText = currentLang === 'en' ? "Attached file:" : "Archivo adjunto:";
        dropText.innerHTML = `<strong>${successText}</strong><br>${fileName}`;
        dropZone.style.borderColor = "#0A4386"; 
        dropZone.style.backgroundColor = "#EFF6FF"; 
    }

    // === 2. Lógica de Envío al Servidor (Google Apps Script) ===
    cvForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // NUEVA URL DEL BACKEND
        const API_URL = "http://localhost:3000/api/bolsa-trabajo";

        const file = fileInput.files[0];
        if (!file) {
            alert("Por favor adjunta tu C.V.");
            return;
        }

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = "Enviando...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        // NUEVA LÓGICA: FormData empaca el archivo y el texto automáticamente
        const formData = new FormData();
        formData.append("Nombre", cvForm.Nombre.value);
        formData.append("Correo", cvForm.Correo.value);
        formData.append("Telefono", cvForm.Telefono.value);
        formData.append("cvFile", file); // Aquí va el archivo crudo

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: formData // No se necesita JSON ni headers para archivos
            });

            const result = await response.json(); 

            if (result.status === "success") {
                const currentLang = localStorage.getItem('selectedLang') || 'es';
                alert(currentLang === 'en' ? "Your application has been sent successfully!" : "¡Tu postulación ha sido enviada con éxito!");
                
                cvForm.reset();
                dropText.innerHTML = currentLang === 'en' ? "Drag and drop your Resume here or<br>Select File (PDF, Word)" : "Arrastra y suelta tu C.V. aquí o<br>Selecciona Archivo (PDF, Word)";
                dropZone.style.borderColor = "#94A3B8";
                dropZone.style.backgroundColor = "#F8FAFC";
            } else {
                alert("Error del servidor: " + result.message);
            }
        } catch (error) {
            console.error("Error al enviar:", error);
            alert("Hubo un problema al enviar tu C.V.");
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
        }
    });
});