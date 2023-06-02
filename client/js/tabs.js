var tabs = document.querySelectorAll('.tab');
var tabContents = document.querySelectorAll('.tab-content');
tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
        // Remove 'active' class from all tabs and tab contents
        tabs.forEach(function (t) { return t.classList.remove('active'); });
        tabContents.forEach(function (content) { return content.classList.remove('active'); });
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
