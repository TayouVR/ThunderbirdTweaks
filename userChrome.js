function moveElements() {
  // Find the first element with the class 'titlebar-buttonbox-container'
  const titlebarButtonBox = document.querySelector('.titlebar-buttonbox-container');

  // Find the container with the ID 'toolbar-menubar'
  const toolbarMenubar = document.getElementById('toolbar-menubar');

  // Check if both elements exist before moving
  if (titlebarButtonBox && toolbarMenubar) {
	toolbarMenubar.classes += " unified-toolbar";
	  
	// Create a temporary container element to parse the HTML
	const spacer = document.createElement('spacer');
	spacer.style.flex = '1 1 auto';
	spacer.classList.add("skip-focus");
	toolbarMenubar.appendChild(spacer);
	
    // Move the 'titlebar-buttonbox-container' element into 'toolbar-menubar'
    toolbarMenubar.appendChild(titlebarButtonBox);
  } else {
    console.error('One or both elements not found.');
  }
}

moveElements();
