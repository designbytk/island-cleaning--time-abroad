
// const images = document.querySelectorAll('.anim');
export default function delayAnimation() {


    let observer = new IntersectionObserver((i) => {
        i.forEach(img => {
            if (img.intersectionRatio > 0) {
                img.target.style.animation = `anim--vintage .7s forwards ease-out`;
                // entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
            }

            else {
                img.target.style.animation = 'none';
            }
        })
    })

    let target = document.querySelector('.vintage-photo');
    observer.observe(target);

}

// exports.observer = observer
// images.forEach(image => {
//     observer.observe(image)
// })
