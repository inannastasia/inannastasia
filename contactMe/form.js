document.addEventListener("DOMContentLoaded", function() {

    
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); 
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const phone = document.getElementById("phone").value;
            const website = document.getElementById("website").value;
            const age = document.getElementById("age").value;
            const dob = document.getElementById("dob").value;
            const time = document.getElementById("time").value;
            const color = document.getElementById("color").value;
            const range = document.getElementById("range").value;
            const topic = document.getElementById("topic").value;
            const message = document.getElementById("message").value;

            
            const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

            
            const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
                .map(cb => cb.value)
                .join(", ") || "None";

            
            const resultContainer = document.getElementById("resultContainer");
            const resultBody = document.querySelector("#resultTable tbody");

            
            resultBody.innerHTML = ""; 

            
            resultContainer.style.display = "block";

            
            const formData = [
                ["Name", name],
                ["Email", email],
                ["Password", password],
                ["Phone", phone],
                ["Website", website],
                ["Age", age],
                ["Date of Birth", dob],
                ["Preferred Time", time],
                ["Favorite Color", color],
                ["Interest Level", range],
                ["Contact Method", contactMethod],
                ["Services Interested In", services],
                ["Topic", topic],
                ["Message", message]
            ];

            
            formData.forEach(([key, value]) => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${key}</td><td>${value}</td>`;
                resultBody.appendChild(row);
            });
            contactForm.reset();
            
        });
      }
    })
