const allActs = document.querySelector('.showAct').innerHTML

const actArr = allActs.split(',')

// console.log(actArr)

const activityMaster = ['social', 'yoga', 'meditation', 'rest', 'exercise', 'dance/play']

function icon(img, name) {
    const imgDiv = document.createElement('div')
    const nameDiv = document.createElement('div')
    document.querySelector('.iconname').appendChild(imgDiv)
    imgDiv.innerHTML = `<img src = "${img}" class="showIcon"/><br>`
    nameDiv.innerHTML = `<p class="name">${name}</p>`
    imgDiv.appendChild(nameDiv)
}


actArr.forEach((act) => {
    activityMaster.forEach((activity) => {
if (act.includes(activity)) {
    // console.log(act)
    if (act.includes('yoga')) {
        icon('https://i.imgur.com/e1iwlfc.png', 'Yoga')
    } 
    if (act.includes('meditation')) {
        icon('https://i.imgur.com/PanqHkS.png', 'Meditation')
    }
    if (act.includes('social')) {
        icon('https://i.imgur.com/gPq87BK.png', 'Social')
    }
    if (act.includes('rest')) {
        icon('https://i.imgur.com/yaHCwmH.png', 'Rest')
    }
    if (act.includes('exercise')) {
        icon('https://i.imgur.com/SQHiIVk.png', 'Exercise')
    }
    if (act.includes('dance/play')) {
        icon('https://i.imgur.com/tSyZgXs.png', 'Dance/Play')
    }
}
    }
)})


const mood = document.querySelector('.showMood').innerHTML
console.log(mood)

function moodicon(img, name) {
    const imgDiv = document.createElement('div')
    const nameDiv = document.createElement('div')
    document.querySelector('.iconmood').appendChild(imgDiv)
    imgDiv.innerHTML = `<img src = "${img}" class="showIcon"/>`
    nameDiv.innerHTML = `<p class="name">${name}</p>`
    imgDiv.appendChild(nameDiv)
}


if (mood.includes('great')) {
    moodicon('https://i.imgur.com/hcer7On.png', 'Great')
} 
if (mood.includes('good')) {
    moodicon('https://i.imgur.com/ZuN0AKm.png', 'Good')
} 
if (mood.includes('okay')) {
    moodicon('https://i.imgur.com/mrfYPjJ.png', 'Okay')
} 
if (mood.includes('sad')) {
    moodicon('https://i.imgur.com/mAzaux7.png', 'Sad')
} 
if (mood.includes('stressed')) {
    moodicon('https://i.imgur.com/8naTwMh.png', 'Stressed')
} 
if (mood.includes('bad')) {
    moodicon('https://i.imgur.com/VUDyyt8.png', 'Bad')
} 




document.getElementById('delete').addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.modal').style.display = 'block';
})

document.querySelector('.no').addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.modal').style.display = 'none';
})