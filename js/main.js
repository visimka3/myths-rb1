$('.sl').slick({
	autoplay:true,
	autoplaySpeed:3000,
	dots: true,
	arrows: false,
	variableWidth: false,
});
const tabheader = document.querySelector('.tabheader'),
	tabs = document.querySelectorAll('.tab-content'),
	tabcontent = document.querySelectorAll('.tabcontent');

	function hideTabContent() {
        tabcontent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }

    function showTabContent(i = 0) {

        tabcontent[i].style.display = 'flex';
        tabs[i].classList.add('active');
    }
    hideTabContent();
    showTabContent();

    tabheader.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tab-content')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })