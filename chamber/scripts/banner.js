// Banner Button
const banner = document.querySelector('.banner');
const banner_display = document.querySelector('.current_events')


banner.addEventListener("click", () => {
	banner_display.classList.remove('banner');
	banner_display.classList.add('banner_none');
});

// Display Banner on Mondays, Tuesdays, and Wednesdays
let banner_day = new Date().getDay();
if (banner_day >= 1 && banner_day <= 3) {
    document.querySelector('.current_events').display;
}
