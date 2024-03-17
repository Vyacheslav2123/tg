document.getElementById('next').style.display = 'none'
let input = document.getElementById('phone')
input.onkeyup= function(e){
    var len= this.value.replace(/\s+/g, '').length;
    if (len === 2) {
        this.value +=' ';
    }
    if (len === 5) {
        this.value +=' ';
    }
    if (len === 8) {
        this.value +=' ';
    }
    if (len > 6) {
        document.getElementById('next').style.display = 'block'
    }
}

document.querySelector('.checkbox').addEventListener('click', function () {
    document.querySelector('.fa-check-square').style.visibility = 'visible'
    document.querySelector('.checkbox').style.backgroundColor = 'white'
    document.querySelector('.checkbox').style.borderColor = '#8774e1'
})