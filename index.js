// Function to handle the movement of an element based on scroll direction and visibility
function handleScrollMovement(element, position) {
    const lastScrollY = window.scrollY; // Capture initial scroll position

    // Function to check if the element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    document.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        // Determine scroll direction
        if (currentScrollY > lastScrollY) {
            // Scrolling down (forward)
            if (isElementInViewport(element) && position.value < 90) {
                position.value += 0.5; // Increment position
            }
        } else {
            // Scrolling up (backward)
            if (isElementInViewport(element) && position.value > 0) {
                position.value -= 0.5; // Decrement position
            }
        }

        // Update the position of the element
        element.style.top = `${position.value}%`;

        // Update lastScrollY
        lastScrollY = currentScrollY;
    });
}

// Variables to store positions
let planePosition = { value: 0 }; // Position of the plane
let carPosition = { value: 0 };   // Position of the car

// Select the elements
const plane = document.querySelector('#plane');
const car = document.querySelector('#car');

// Call the scroll handler for the plane and car separately
handleScrollMovement(plane, planePosition);
handleScrollMovement(car, carPosition);
