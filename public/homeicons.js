const activity = document.getElementsByClassName('activity')

for (let i = 0; i < activity.length; i++) {
    const activityData = activity[i].innerHTML;
// const activityArr = activityData.split(',');
console.log(activityData)
if (activityData !== null) {
    // console.log('full')
    document.querySelector('.actIcon').innerHTML =  '<img class="icon" src="https://i.imgur.com/lwqy3Ee.png" />'
} else {
    console.log('empty');
    document.querySelector('.actIcon').innerHTML = null
}
}

const mood = document.getElementsByClassName('mood')

for (let i = 0; i < mood.length; i++) {
    const moodData = activity[i].innerHTML;
// const activityArr = activityData.split(',');
console.log(moodData)
if (moodData !== null) {
    // console.log('full')
    document.querySelector('.moodIcon').innerHTML =  '<img class="icon" src="https://i.imgur.com/QjBiDfe.png" />'
} else {
    console.log('empty');
    document.querySelector('.moodIcon').innerHTML = null
}
}

const thought = document.getElementsByClassName('thoughts')


for (let i = 0; i < thought.length; i++) {
    const thoughtData = thought[i].innerHTML;
const thoughtArr = thoughtData.split('');
console.log(thoughtArr)

if (thoughtArr.length > null) {
    console.log('full')
    document.querySelector('.thoughtIcon').innerHTML =  '<img class="icon" src="https://i.imgur.com/l8WUbhB.png" />'
} else {
    console.log('empty');
    document.querySelector('.thoughtIcon').innerHTML = null
}
}





