const activity = document.querySelectorAll('.activity')

activity.forEach((act) => {
    // console.log(act.checked)
    act.addEventListener('click', () => {
        if (act.checked == true) {
            console.log(act.id, ': true')
            document.querySelector(`.${act.id}`).style.borderBottom = '1px solid black'
        } else if (act.checked == false) {
            document.querySelector(`.${act.id}`).style.borderBottom = null
        }
        })  
    })

const mood = document.querySelectorAll('.mood')
// console.log(mood)

function checkCheck() {
    mood.forEach((moocheck) => {
        if (moocheck.checked == false) {
            console.log(moocheck, 'unchecked')
            document.querySelector(`.${moocheck.id}`).style.borderBottom = null
        }
    })
}

mood.forEach((moo) => {
    moo.addEventListener('click', () => {
        if (moo.checked == true) {
            // console.log(moo.id, ': true')
            document.querySelector(`.${moo.id}`).style.borderBottom = '1px solid black'
            checkCheck()
            // console.log(mood)
        }
    })
})





