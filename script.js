const elTitle = document.querySelector('#title');
const elInput = document.querySelector('#input');
const elRain = document.querySelector('#rain');
const elzal = document.querySelector('#zal');

elInput.addEventListener('keyup', function(e){
    e.preventDefault()
    
    if(!isNaN(elInput.value)){
        if(elInput.value > 5 && elInput.value < 30){
            elTitle.textContent = 'HA'
            elTitle.style.color = 'green'
        }else{
            elTitle.textContent = 'YO\'Q'
            elTitle.style.color = 'red'
        }
    }else{
        elTitle.textContent = 'Raqam kiriting'
        elTitle.style.color = 'red'
    }
})


elRain.addEventListener('click', function(){
    if(elRain.checked){
        elTitle.textContent = 'YO\'Q'
        elTitle.style.color = 'red'
    }else{
        elTitle.textContent = 'HA'
        elTitle.style.color = 'green'
    }
})

elzal.addEventListener('click', function(){
    if(elRain.checked && elzal.checked && (elInput.value > 5 && elInput.value < 30)-0){
        elTitle.textContent = 'HA'
        elTitle.style.color = 'green'
    }else{
        if(elzal.checked){
            elTitle.textContent = 'HA'
            elTitle.style.color = 'green'
        }else{
            if(elInput.value < 5 && elzal.checked){
                elTitle.textContent = 'YO\'Q'
                elTitle.style.color = 'red'
            }else{
                elTitle.textContent = 'HA'
                elTitle.style.color = 'green'
            }
        }
    }
})