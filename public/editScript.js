//activities

const getAct = document.getElementsByClassName('showAct')
const entryActs = getAct[0].innerHTML
const entryActArr = entryActs.split(',')

const activities = document.getElementsByClassName('activity')

for (let i = 0; i < activities.length; i++) {
    console.log(activities[i].value)
}

entryActArr.forEach((enActs) => {
    for (let i = 0; i < activities.length; i++) {
        if (enActs.includes(activities[i].value)) {
            console.log(document.getElementById(activities[i].id))
            document.getElementById(activities[i].id).checked = true;
            if (document.getElementById(activities[i].id).checked = true) {
                document.querySelector(`.${activities[i].id}`).style.borderBottom = '1px solid black'
            }
        }
    } 
})

const activity = document.querySelectorAll('.activity')

activity.forEach((act) => {
    // console.log(act.checked)
    act.addEventListener('click', () => {
        if (act.checked == true) {
            // console.log(act.id, ': true')
            document.querySelector(`.${act.id}`).style.borderBottom = '1px solid black'
        } else if (act.checked == false) {
            document.querySelector(`.${act.id}`).style.borderBottom = null
        }
        })  
    })


//mood

const getMood = document.getElementsByClassName('showMood')
const entryMoods = getMood[0].innerHTML
const entryMoodArr = entryMoods.split(',')

const moods = document.getElementsByClassName('mood')

const mood = document.querySelectorAll('.mood')
// console.log(mood)

function checkCheck() {
    mood.forEach((moocheck) => {
        if (moocheck.checked == false) {
            // console.log(moocheck, 'unchecked')
            document.querySelector(`.${moocheck.id}`).style.borderBottom = null
        }
    })
}

for (let i = 0; i < moods.length; i++) {
    console.log(moods[i].value)
}

entryMoodArr.forEach((enMood) => {
    for (let i = 0; i < moods.length; i++) {
        if (enMood.includes(moods[i].value)) {
            console.log(document.getElementById(moods[i].id))
            document.getElementById(moods[i].id).checked = true;
            if (document.getElementById(moods[i].id).checked = true) {
                document.querySelector(`.${moods[i].id}`).style.borderBottom = '1px solid black'
                checkCheck()
            }
        }
    } 
})

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

//thoughts

const getThought = document.getElementsByClassName('showThought')
const entryThought = getThought[0].innerHTML
const thoughtCount = entryThought.split('').length

// console.log(thoughtCount)

if (entryThought.split('').length === 0) {
    console.log('empty')
} else {
    document.getElementsByClassName('thoughts')[0].innerHTML = entryThought
}

