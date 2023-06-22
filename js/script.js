function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const phrases = ['Front End Dev', 'UI/UX Designer']
const el = document.getElementById('typewriter')

let sleepTime = 100

let curPhraseIndex = 0

const writeLoop = async () => {
    while (true){
        let curWord = phrases[curPhraseIndex]
        for (let i = 0; i < curWord.length; i++){
            el.innerText = curWord.substring(0, i + 1)
            await sleep(sleepTime)
        }

        await sleep(sleepTime * 5   )

        for (let i = curWord.length; i > 0; i--){
            el.innerText = curWord.substring(0, i - 1)
            await sleep(sleepTime)
        }
        await sleep(sleepTime * 5)

        if (curPhraseIndex === phrases.length - 1){
            curPhraseIndex = 0
        }else {
            curPhraseIndex++
        }
    }
}

writeLoop()

// animasi
const animasi = document.querySelector('.offcanvas-body')
animasi.classList.add('animate__animated', 'animate__fadeInDown')

const animasi2 = document.querySelector('#foot')
animasi2.classList.add('animate__animated', 'animate__fadeInUp')

const animasiContact = document.querySelector('#anim')
animasiContact.classList.add('animate__animated', 'animate__fadeInUp')
// end animasi

// hover
function toggleTransform(event) {
  event.target.style.transform = event.type === 'mouseenter' ? 'scale(1.1)' : 'scale(1)'
}

const elements = [
  document.querySelector('#html-form'),
  document.querySelector('#css-form'),
  document.querySelector('#js-form'),
  document.querySelector('#boots-form'),
  document.querySelector('#tail-form'),
]

elements.forEach(element => {
  element.addEventListener('mouseenter', toggleTransform);
  element.addEventListener('mouseleave', toggleTransform);
})
// end hover
  