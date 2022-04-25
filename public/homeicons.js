const activity = document.getElementsByClassName('activity')

for (let i = 0; i < activity.length; i++) {
    const activityData = activity[i].innerHTML;
// const activityArr = activityData.split(',');
console.log(activityData)
if (activityData !== null) {
    console.log('full')
    document.querySelector('.actIcon').src = "https://i.imgur.com/lwqy3Ee.png"
}
}

const mood = document.getElementsByClassName('mood')

for (let i = 0; i < mood.length; i++) {
    const moodData = activity[i].innerHTML;
// const activityArr = activityData.split(',');
console.log(moodData)
if (moodData !== null) {
    console.log('full')
    document.querySelector('.moodIcon').src = "https://i.imgur.com/QjBiDfe.png"
}
}

const thought = document.getElementsByClassName('thoughts')

if (thought !== null) {
    console.log('full')
    document.querySelector('.thoughtIcon').src = "https://i.imgur.com/l8WUbhB.png"
}





