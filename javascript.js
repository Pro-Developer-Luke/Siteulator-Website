      
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
        const securityRequirementsCell = document.getElementById('securityRequirements');
        const securityCostCell = document.getElementById('securityCost');
        const hostingCostCell = document.getElementById('hostingCost');
        const hostingRequirementsCell = document.getElementById('hostingRequirements');
        

        const sslRadios = document.querySelectorAll('input[name="sslCertificate"]');
        const dnsRadios = document.querySelectorAll('input[name="domainName"]');
        
        function updateTotal() {
            let total = 0;
        
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    total += parseInt(checkbox.value);
                }
            });

            sslRadios.forEach((radio) => {
              if (radio.checked && radio.id === 'sslYes') {
                  total += parseInt(radio.value);
              }
          });

          dnsRadios.forEach((radio) => {
            if (radio.checked && radio.id === 'dnsYes') {
                total += parseInt(radio.value);
            }
        });
        
            totalDisplay.textContent = `£${total}`;
        }

        // Adds event listeners to all checkboxes
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener('change', () => {
              updateTotal();
              updateTable();
          });
      });

        sslRadios.forEach((radio) => {
          radio.addEventListener('change', () => {
              updateTotal(); // Update total with SSL
              updateTable(); // Update the table to reflect the SSL change
          });
      });

      dnsRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            updateTotal(); // Update total with SSL
            updateTable(); // Update the table to reflect the SSL change
        });
    });

        function updateTable() {
            // Initialize placeholders for content
            let designRequirements = [];
            let designCosts = [];
          
            let functionalityRequirements = [];
            let functionalityCosts = [];

            let securityRequirements = [];
            let securityCosts = [];

            let hostingRequirements = [];
            let hostingCosts = [];
          
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

            sslRadios.forEach((radio) => {
              if (radio.checked && radio.id === 'sslYes') {
                  securityRequirements.push('SSL Certificate');
                  securityCosts.push('£79.00');
              }
          });

          dnsRadios.forEach((radio) => {
            if (radio.checked && radio.id === 'dnsYes') {
                hostingRequirements.push('Domain Name');
                hostingCosts.push('£15.00');
            }
        });
          
            // Update the Design row
            designRequirementsCell.innerHTML = designRequirements.join('<br>') || 'None';
            designCostCell.innerHTML = designCosts.join('<br>') || '£0.00';
          
            // Update the Functionality row
            functionalityRequirementsCell.innerHTML = functionalityRequirements.join('<br>') || 'None';
            functionalityCostCell.innerHTML = functionalityCosts.join('<br>') || '£0.00';
          
            securityRequirementsCell.innerHTML = securityRequirements.join('<br>') || 'None';
            securityCostCell.innerHTML = securityCosts.join('<br>') || '£0.00';

            hostingRequirementsCell.innerHTML = hostingRequirements.join('<br>') || 'None';
            hostingCostCell.innerHTML = hostingCosts.join('<br>') || '£0.00';

          }
          
          
        
        