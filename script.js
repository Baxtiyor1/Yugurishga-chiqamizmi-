const elTitle = document.querySelector('#title');
const elInput = document.querySelector('#input');
const elRain = document.querySelector('#rain');
const elzal = document.querySelector('#zal');

elInput.addEventListener('keyup', function(e){
    e.preventDefault()
    
    if(!isNaN(elInput.value)){
        if(elInput.value > 5 && elInput.value < 30){
            elTitle.textContent = 'HA'
        }else{
            elTitle.textContent = 'YO\'Q'
        }
    }else{
        elTitle.textContent = 'Raqam kiriting'
    }
})


elRain.addEventListener('click', function(){
    if(elRain.checked){
        elTitle.textContent = 'YO\'Q'
    }else{
        elTitle.textContent = 'HA'
    }
})

elzal.addEventListener('click', function(){
    if(elRain.checked && elzal.checked && (elInput.value > 5 && elInput.value < 30)){
        elTitle.textContent = 'HA'
    }else{
        if(elzal.checked){
            elTitle.textContent = 'HA'
        }else{
            if(elInput.value < 5 && elzal.checked){
                elTitle.textContent = 'YO\'Q'
            }else{
                elTitle.textContent = 'HA'
            }
        }
    }
})