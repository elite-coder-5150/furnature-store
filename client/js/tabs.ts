const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and tab contents
        tabs.forEach((t) => t.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        // Add 'active' class to the clicked tab and corresponding tab content
        tab.classList.add('active');
        tabContents[index].classList.add('active');
    });
});

// q: what does the above code do?
// a: it adds an event listener to each tab, so that when a tab is clicked,
//    it will remove the 'active' class from all tabs and tab contents, and
//    then add the 'active' class to the clicked tab and corresponding tab
//    content
