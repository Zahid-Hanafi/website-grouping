function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");

  // Toggle active classes
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
}

// Function to toggle the dropdown visibility when clicked
function toggleDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}
