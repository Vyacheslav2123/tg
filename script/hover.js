document.querySelector('.country').addEventListener('mousemove', function() {
    document.querySelector('#country-text').style.color = '#7b71c6'
})
document.querySelector('.country').addEventListener('mouseout', function() {
    document.querySelector('#country-text').style.color = '#aaaaaa'
})
document.querySelector('.num').addEventListener('mousemove', function() {
    document.querySelector('#num-text').style.color = '#7b71c6'
})
document.querySelector('.num').addEventListener('mouseout', function() {
    document.querySelector('#num-text').style.color = '#aaaaaa'
})
document.querySelector('.country').addEventListener('click', function() {
    document.querySelector('#country-text').style.color = '#7b71c6'
})
document.querySelector('.num').addEventListener('click', function() {
    document.querySelector('#num-text').style.color = '#7b71c6'
})