// Toggle visibility of an element by adding or removing the 'hide' class
function tosVisibility(value){
  const tos = document.getElementById('tosPopUp');
  if(value == 1){
      tos.classList.remove('hide');
  }
  else if(value == 0){
      tos.classList.add('hide');
  }        
}

// Navigate between sections (Next/Back buttons)
function navigateSection(currentSection, direction) {
  const current = document.getElementById(`section${currentSection}`);
  const target = document.getElementById(`section${currentSection + direction}`);
  if (target) {
      current.classList.remove('active'); // Hide current section
      target.classList.add('active'); // Show target section
  }
}

// Select a specific section using the navigation bar
function selectSection(section) {
  const sections = document.querySelectorAll('.section'); // All sections
  const buttons = document.querySelectorAll('.navBtn button'); // All navigation buttons

  // Remove the active class from all sections and buttons
  sections.forEach(sec => sec.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('activeNav'));

  // Add the active class to the selected section and button
  document.getElementById(`section${section}`).classList.add('active');
  document.getElementById(`navBtn${section}`).classList.add('activeNav');
}

// Simulate form submission
function submitForm() {
  alert('Form submitted!');
}

// Select elements for checkboxes, radio buttons, and table cells
const checkboxes = document.querySelectorAll('.option');
const sslRadios = document.querySelectorAll('input[name="sslCertificate"]');
const dnsRadios = document.querySelectorAll('input[name="domainName"]');

const totalDisplay = document.getElementById('sumTotal');

// Map table rows to simplify updates
const rows = {
  Design: {
      requirementsCell: document.getElementById('designRequirements'),
      costCell: document.getElementById('designCost')
  },
  Functionality: {
      requirementsCell: document.getElementById('functionalityRequirements'),
      costCell: document.getElementById('functionalityCost')
  },
  Security: {
      requirementsCell: document.getElementById('securityRequirements'),
      costCell: document.getElementById('securityCost')
  },
  Hosting: {
      requirementsCell: document.getElementById('hostingRequirements'),
      costCell: document.getElementById('hostingCost')
  }
};

// Calculate and update the total cost
function updateTotal() {
  // Sum up the selected checkbox values
  let total = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .reduce((sum, checkbox) => sum + parseInt(checkbox.value), 0);

  // Add costs for selected SSL and DNS options
  if (document.getElementById('sslYes').checked) total += 79;
  if (document.getElementById('dnsYes').checked) total += 15;

  // Update the total display
  totalDisplay.textContent = `£${total}`;
}

// Update the breakdown table with selected items and costs
function updateTable() {
  // Initialize an object to store table data
  const tableData = {
      Design: { requirements: [], costs: [] },
      Functionality: { requirements: [], costs: [] },
      Security: { requirements: [], costs: [] },
      Hosting: { requirements: [], costs: [] }
  };

  // Loop through checkboxes to populate design and functionality rows
  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          const category = checkbox.dataset.category; // "Design" or "Functionality"
          tableData[category].requirements.push(checkbox.name); // Requirement name
          tableData[category].costs.push(`£${parseFloat(checkbox.value).toFixed(2)}`); // Cost
      }
  });

  // Add SSL and DNS options to their respective rows if selected
  if (document.getElementById('sslYes').checked) {
      tableData.Security.requirements.push('SSL Certificate');
      tableData.Security.costs.push('£79.00');
  }
  if (document.getElementById('dnsYes').checked) {
      tableData.Hosting.requirements.push('Domain Name');
      tableData.Hosting.costs.push('£15.00');
  }

  // Update each row dynamically
  Object.entries(rows).forEach(([category, { requirementsCell, costCell }]) => {
      const { requirements, costs } = tableData[category];
      requirementsCell.innerHTML = requirements.join('<br>') || 'None'; // Display requirements or "None"
      costCell.innerHTML = costs.join('<br>') || '£0.00'; // Display costs or "£0.00"
  });
}

// Attach event listeners to all inputs (checkboxes, SSL, DNS radios)
[...checkboxes, ...sslRadios, ...dnsRadios].forEach(input => {
  input.addEventListener('change', () => {
      updateTotal(); // Recalculate total cost
      updateTable(); // Refresh the table
  });
});

// Initialize total and table on load
updateTotal();
updateTable();