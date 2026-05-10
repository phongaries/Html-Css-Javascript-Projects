const allInputs = document.querySelectorAll('input');
allInputs.forEach( (input) =>{
    input.addEventListener ( 'keydown', (event) =>{
        if(event.key ==='Enter' && !isNaN(event.target.value)){
            const currentId = event.target.id;
            const currentValue = parseFloat(event.target.value);
            let celValue;
            let kelValue;
            let fahValue;
            switch(currentId){
                case 'celcius-temp':
                    kelValue = currentValue + 273.15;
                    fahValue = currentValue * 1.8 + 32;
                    document.querySelector('#kelvin-temp').value = kelValue.toFixed(2);
                    document.querySelector('#fahrenheit-temp').value = fahValue.toFixed(2);
                    break;
                case 'fahrenheit-temp':
                    celValue = (currentValue - 32)/1.8;
                    kelValue = celValue + 273.15;
                    document.querySelector('#kelvin-temp').value = kelValue.toFixed(2);
                    document.querySelector('#celcius-temp').value = celValue.toFixed(2);
                    break;
                case 'kelvin-temp':
                    celValue = currentValue - 273.15;
                    fahValue = (celValue * 1.8) + 32;
                    document.querySelector('#celcius-temp').value = celValue.toFixed(2);
                    document.querySelector('#fahrenheit-temp').value = fahValue.toFixed(2);
                    break;
            };
        };
    });
});


