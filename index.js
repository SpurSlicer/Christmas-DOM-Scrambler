const christmas_colors = ['white', 'red', 'green'];
const [window_width, window_height] = [window.screen.width, window.screen.height];
const getChristmasColor = () => { return christmas_colors[Math.floor(Math.random()*3)]; };
const scramble = (element) => {
    if (element == undefined) return;
    element.style.width = `${Math.floor(Math.random()*window_width)+1}px`;
    element.style.height = `${Math.floor(Math.random()*window_height)+1}px`;
    element.style.font = `${Math.floor(Math.random()*100)+1}px`;
    element.style.color = getChristmasColor();
    element.style.backgroundColor = getChristmasColor();
    element.style.borderWidth = `${Math.floor(Math.random()*20)+1}px`;
    element.style.borderStyle = `${((Math.floor(Math.random)*2) == 0) ? `solid` : `dashed`}`;
    element.style.borderColor = getChristmasColor();
    for (const child of element.children) {
        scramble(child);
    }
}
(() => { setInterval(() => {scramble(document.querySelector('html'));}, 100) })();