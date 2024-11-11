        function nextSection(section) { //Next Button
            const prevSection = document.getElementById(`section${section}`);
            const nextSection = document.getElementById(`section${section + 1}`);

            if (nextSection) {
                prevSection.classList.remove('active');
                nextSection.classList.add('active');
                
            }

            
        }

        function prevSection(section) { //Back Button
            const prevSection = document.getElementById(`section${section}`);
            const previousSection = document.getElementById(`section${section - 1}`);

            if (previousSection) {
                prevSection.classList.remove('active');
                previousSection.classList.add('active');
            }

            
        }

        function selectSection(section){ // Navigation Bar
            newSection = document.getElementById(`section${section}`)
            const otherSection1 = document.getElementById(`section1`);
            const otherSection2 = document.getElementById(`section2`);
            const otherSection3 = document.getElementById(`section3`);
            const otherSection4 = document.getElementById(`section4`);

            newBtn = document.getElementById(`navBtn${section}`)
            const otherBtn1 = document.getElementById(`navBtn1`);
            const otherBtn2 = document.getElementById(`navBtn2`);
            const otherBtn3 = document.getElementById(`navBtn3`);
            const otherBtn4 = document.getElementById(`navBtn4`);

            otherSection1.classList.remove('active');
            otherSection2.classList.remove('active');
            otherSection3.classList.remove('active');
            otherSection4.classList.remove('active');
            newSection.classList.add('active');

            otherBtn1.classList.remove('activeNav');
            otherBtn2.classList.remove('activeNav');
            otherBtn3.classList.remove('activeNav');
            otherBtn4.classList.remove('activeNav');
            newBtn.classList.add('activeNav');
            
        }

        function submitForm() { 
            alert('Form submitted!');
        }

        const checkboxes = document.querySelectorAll('.option');
        const totalDisplay = document.getElementById('sumTotal');
        
        function updateTotal() {
            let total = 0;
        
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    total += parseInt(checkbox.value);
                }
            });
        
            totalDisplay.textContent = `£${total}`;
        }
        
        // Adds event listeners to all checkboxes
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', updateTotal);
        });