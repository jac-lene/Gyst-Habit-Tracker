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
        }
    } 
})



//mood

const getMood = document.getElementsByClassName('showMood')
const entryMoods = getMood[0].innerHTML
const entryMoodArr = entryMoods.split(',')

const moods = document.getElementsByClassName('mood')

for (let i = 0; i < moods.length; i++) {
    console.log(moods[i].value)
}

entryMoodArr.forEach((enMood) => {
    for (let i = 0; i < moods.length; i++) {
        if (enMood.includes(moods[i].value)) {
            console.log(document.getElementById(moods[i].id))
            document.getElementById(moods[i].id).checked = true;
        }
    } 
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

