export function customCursor() {
    
    const cursor = document.querySelector(".custom__cursor");
    const services = document.querySelectorAll(".block.services");

    document.addEventListener("mousemove", function(e) {
        let x = e.clientX;
        let y = e.clientY;

        cursor.style.left = x + "px";
        cursor.style.top = y + "px";

    });

    services.forEach((block) => {
        if (block) {
            let elem = block.querySelector('.services__list');
            elem.addEventListener("mouseenter", function(e) {
                cursor.classList.add('lemon__cursor');
                cursor.classList.remove('negative__effect');

                scaleUp();
            });
        
            elem.addEventListener("mouseleave", function(e) {
                cursor.classList.add('negative__effect');
                cursor.classList.remove('lemon__cursor');

                scaleDown();
            });
        }
    });

    function scaleUp() {
        cursor.classList.remove("cursor-scale-down");
        cursor.classList.add("cursor-scale-up");
    }

    function scaleDown() {
        cursor.classList.remove("cursor-scale-up");
        cursor.classList.add("cursor-scale-down");
    }

}