// Select all panel section
const panels = document.querySelectorAll('.panel');

// Toggle open class (flex: 5)
function toggleOpen() {
  this.classList.toggle('open');
}

// Text transition
function toggleOpenActive(e) {

  console.log(e.propertyName);

  // Detect flex-grow transition end
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }

}

// Click event on panel
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// Flex-Grow transitionend event
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));
