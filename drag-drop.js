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
        e.preventDefault(); // Evitamos que la página se recargue

        // PEGA AQUÍ LA URL DE TU WEB APP DE GOOGLE
        const GOOGLE_APP_URL = "https://script.google.com/macros/s/AKfycbxVRD5w9wTySSIvyvmY-aiY9uPUpHxmuvbmH3YVls7JMoeChx3jmiFx0SdGhcyHIm-ldQ/exec";

        const file = fileInput.files[0];
        if (!file) {
            alert("Por favor adjunta tu C.V.");
            return;
        }

        // Cambiar estado del botón para que el usuario sepa que está cargando
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = "Enviando...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        // Convertir archivo a Base64 para enviarlo seguro
        const reader = new FileReader();
        reader.onload = async function() {
            const base64Data = reader.result.split(',')[1]; // Extrae solo la cadena base64

            // Construir los datos a enviar
            const payload = {
                Nombre: cvForm.Nombre.value,
                Correo: cvForm.Correo.value,
                Telefono: cvForm.Telefono.value,
                fileName: file.name,
                mimeType: file.type,
                fileBase64: base64Data
            };

            try {
                const response = await fetch(GOOGLE_APP_URL, {
                    method: "POST",
                    body: JSON.stringify(payload)
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
                    // Muestra el error exacto en pantalla
                    alert("Error del servidor: " + result.message);
                    console.error("Detalle del error:", result);
                }

            } catch (error) {
                console.error("Error al enviar:", error);
                alert("Hubo un problema al enviar tu C.V. Revisa la consola para más detalles.");
            } finally {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
            }
        };

        // Si hay un error leyendo el archivo
        reader.onerror = function(error) {
            console.error("Error leyendo el archivo:", error);
            alert("Error al procesar el archivo adjunto.");
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
        };

        // Ejecutar la lectura
        reader.readAsDataURL(file);
    });
});