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
