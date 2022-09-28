function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove',hovered);

    function hovered(event){
        let percent =Math.trunc(event.offsetX / (event.target.clientWidth - 1) * 100);
        document.getElementById('result').textContent = percent + '%';
    }
}
