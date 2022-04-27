const activity = document.getElementsByClassName('activity')

const entries = document.querySelector('.entry')

// console.log(activity)

// if (activity.inner)

// for (let i = 0; i < activity.length; i++) {
//     const activityData = activity[i].innerHTML;
//     // console.log(i)
// // const activityArr = activityData.split(',');
// // console.log(activityData)
// if (activityData !== null) {
//     // console.log('full')
//     const newdiv = document.createElement('div')
//     document.querySelector('.activity').appendChild(newdiv)
//     newdiv.innerHTML = '<img class="actIcon icon" src="https://i.imgur.com/lwqy3Ee.png" />'
//     // document.querySelector('.actIcon').innerHTML =  '<img class="icon" src="https://i.imgur.com/lwqy3Ee.png" />'
// } else {
//     console.log('empty');
//     document.querySelector('.actIcon').innerHTML = null
// }
// }

const mood = document.getElementsByClassName('mood')

for (let i = 0; i < mood.length; i++) {
    // console.log(mood[i].innerHTML)
    if(mood[i].innerHTML) {
        console.log(mood[i].innerHTML)
        // document.querySelector('.moodIcon').style.display = 'block'
    }
}

// if (mood)

// for (let i = 0; i < mood.length; i++) {
//     const moodData = activity[i].innerHTML;
// // const activityArr = activityData.split(',');
// // console.log(moodData)
// if (moodData !== null) {
//     // console.log('full')
//     const newdiv = document.createElement('div')
//     document.querySelector('.mood').appendChild(newdiv)
//     newdiv.innerHTML = '<img class="moodIcon icon" src="https://i.imgur.com/MWiGByN.png" />'
// } else {
//     // console.log('empty');
//     document.querySelector('.moodIcon').innerHTML = null
// }
// }

const thought = document.getElementsByClassName('thoughts')
// console.log(thought)

// for (let i = 0; i < thought.length; i++) {
//     // console.log(thought[i])
//     const thoughtData = thought[i].innerHTML;
// const thoughtArr = thoughtData.split('');
// console.log(thoughtArr)

// if (thoughtArr.length >= 1) {
//     // console.log('full')
//     const newdiv = document.createElement('div')
//     document.querySelector('.thoughts').appendChild(newdiv)
//     newdiv.innerHTML = '<img class="thoughtIcon icon" src="https://i.imgur.com/l8WUbhB.png" />'
// } else {
//     // console.log('empty');
//     document.querySelector('.thoughtIcon').innerHTML = null
// }
// }





