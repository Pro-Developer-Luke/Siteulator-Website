      
      function TosVisibility(value){
        const tos = document.getElementById('tosPopUp');
        if(value == 1){
            tos.classList.remove('hide');
        }
        else if(value == 0){
            tos.classList.add('hide');
        }        
      }
      
      function nextSection(section) { // Next Button
        const prevSection = document.getElementById(`section${section}`);
        const nextSection = document.getElementById(`section${section + 1}`);
      
        if (nextSection) {
          prevSection.classList.remove('active');
          nextSection.classList.add('active');
        }
      }
      
      function prevSection(section) { // Back Button
        const prevSection = document.getElementById(`section${section}`);
        const previousSection = document.getElementById(`section${section - 1}`);
      
        if (previousSection) {
          prevSection.classList.remove('active');
          previousSection.classList.add('active');
        }
      }
      
      function selectSection(section) { // Navigation Bar
        newSection = document.getElementById(`section${section}`);
        
        // Get all sections and buttons dynamically
        const sections = Array.from(document.querySelectorAll('.section'));
        const buttons = Array.from(document.querySelectorAll('.navBtn button'));
      
        // Remove the active class from all sections and buttons
        sections.forEach((sec) => sec.classList.remove('active'));
        buttons.forEach((btn) => btn.classList.remove('activeNav'));
      
        // Add the active class to the selected section and button
        newSection.classList.add('active');
        document.getElementById(`navBtn${section}`).classList.add('activeNav');
      }

        function submitForm() { 
            alert('Form submitted!');
        }

        const checkboxes = document.querySelectorAll('.option');
        const totalDisplay = document.getElementById('sumTotal');
        const designRequirementsCell = document.getElementById('designRequirements');
        const designCostCell = document.getElementById('designCost');
        const functionalityRequirementsCell = document.getElementById('functionalityRequirements');
        const functionalityCostCell = document.getElementById('functionalityCost');
        
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

        function updateTable() {
            // Initialize placeholders for content
            let designRequirements = [];
            let designCosts = [];
          
            let functionalityRequirements = [];
            let functionalityCosts = [];
          
            // Loop through checkboxes
            checkboxes.forEach((checkbox) => {
              if (checkbox.checked) {
                // Check the category of the checkbox
                const category = checkbox.dataset.category; // "Design" or "Functionality"
                const requirement = checkbox.name; // Name of the requirement
                const cost = parseFloat(checkbox.value); // Cost value
          
                if (category === 'Design') {
                  designRequirements.push(requirement);
                  designCosts.push(`£${cost.toFixed(2)}`);
                } else if (category === 'Functionality') {
                  functionalityRequirements.push(requirement);
                  functionalityCosts.push(`£${cost.toFixed(2)}`);
                }
              }
            });
          
            // Update the Design row
            designRequirementsCell.innerHTML = designRequirements.join('<br>') || 'None';
            designCostCell.innerHTML = designCosts.join('<br>') || '£0.00';
          
            // Update the Functionality row
            functionalityRequirementsCell.innerHTML = functionalityRequirements.join('<br>') || 'None';
            functionalityCostCell.innerHTML = functionalityCosts.join('<br>') || '£0.00';
          }
          
          // Add event listeners to checkboxes
          checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', updateTable);
          });
        
        