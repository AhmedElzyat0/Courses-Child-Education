//! After the delay, the code navigates to the new page using

// Get all links on the page
const links = document.querySelectorAll('a');

// Add event listener to each link
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the href attribute of the clicked link
    const href = link.getAttribute('href');

    // Add a delay of 1 second before navigating to the new page
    setTimeout(() => {
      window.location.href = href;
    }, 1000);
  });
});


//! apply the dark mode styling.

const toggleButton = document.getElementById('toggle-btn');
const sections = document.querySelectorAll('');

// Check local storage for saved mode
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
   sections.forEach(section => section.classList.add('dark-mode'));
}

toggleButton.addEventListener('click', () => {
  // Toggle the mode class on the body element
  sections.forEach(section => section.classList.toggle('dark-mode'));
  
  // Save the mode to local storage
  const mode = sections[0].classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
});


function openTab(event, tabName) {
   const tabcontent = document.getElementsByClassName('fas fa-bars');
   const tablinks = document.getElementsByClassName('fas fa-bars');
   const tab = document.getElementById(menu-btn);
   
   // If the tab is already active, do nothing
   if (tab.classList.contains('active')) {
     return;
   }
   
   // Show the tab content and mark the tab as active
   for (let i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = 'none';
     tablinks[i].classList.remove('active');
   }
   tab.style.display = 'block';
   event.currentTarget.classList.add('active');
   
   // If the clicked tab is Tab1, load the list
   if (tabName === 'Tab1') {
     loadList();
   }
 }
 
 function loadList() {
   const list = document.getElementById('Tab1List');
   // Add list items here...
 }