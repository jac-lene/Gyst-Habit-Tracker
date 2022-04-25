const allActs = document.querySelector('.showAct').innerHTML

const actArr = allActs.split(',')

// console.log(actArr)

const activityMaster = ['social', 'yoga', 'meditation', 'rest', 'exercise', 'dance/play']

function icon(img, name) {
    const imgDiv = document.createElement('div')
    const nameDiv = document.createElement('div')
    document.querySelector('.iconname').appendChild(imgDiv)
    document.querySelector('.iconname').appendChild(nameDiv)
    imgDiv.innerHTML = `<img src = "${img}" class="showIcon"/>`
    nameDiv.innerHTML = `<p>${name}</p>`
}


actArr.forEach((act) => {
    activityMaster.forEach((activity) => {
if (act.includes(activity)) {
    console.log(act)
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









document.getElementById('delete').addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.modal').style.display = 'block';
})

document.querySelector('.no').addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.modal').style.display = 'none';
})