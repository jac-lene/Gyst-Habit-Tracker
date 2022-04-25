document.getElementById('delete').addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.modal').style.display = 'block';
})

document.querySelector('.no').addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.modal').style.display = 'none';
})