/* ==========================================
   HADARA - PART 3 JAVASCRIPT ENHANCEMENTS
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. PRODUCT SEARCH & FILTER FUNCTIONALITY --- */
    const searchInput = document.getElementById("productSearch");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            const productArticles = document.querySelectorAll(".product-card");
            
            productArticles.forEach(article => {
                const title = article.querySelector("h4").textContent.toLowerCase();
                const description = article.querySelector("p").textContent.toLowerCase();
                
                if (title.includes(query) || description.includes(query)) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
        });
    }

    /* --- 2. LIGHTBOX GALLERY MODAL --- */
    const images = document.querySelectorAll(".product-img");
    if (images.length > 0) {
        // Create lightbox container dynamically
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.cssText = "display:none; position:fixed; z-index:1000; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center; cursor:pointer;";
        
        const lightboxImg = document.createElement("img");
        lightboxImg.style.cssText = "max-width:85%; max-height:85%; border-radius:6px; border:3px solid #D4B27A;";
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        images.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightbox.style.display = "flex";
            });
        });

        lightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
    }

    /* --- 3. CLIENT-SIDE FORM VALIDATION (Enquiry Form) --- */
    const enquiryForm = document.querySelector("#enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all required fields before submitting your enquiry.");
                return;
            }

            // Simulate successful asynchronous submission feedback
            alert(`Thank you, ${name}! Your enquiry regarding modest apparel has been successfully sent. We will respond via email shortly.`);
            enquiryForm.reset();
        });
    }

    /* --- 4. CLIENT-SIDE FORM VALIDATION (Contact Form) --- */
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const cname = document.getElementById("cname").value.trim();
            const cemail = document.getElementById("cemail").value.trim();
            const cmessage = document.getElementById("cmessage").value.trim();

            if (cname === "" || cemail === "" || cmessage === "") {
                alert("Please complete all fields in the contact form.");
                return;
            }

            alert(`Thank you for your message, ${cname}. Your note has been compiled successfully.`);
            contactForm.reset();
        });
    }
});