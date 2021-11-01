window.onload = function(){

    const form = document.getElementById('avengerForm')

    form.addEventListener('submit', onClick);

    function onClick(e){
        e.preventDefault();

        const formData = new FormData(this)

        fetch('superheroes.php', {
            method: 'post',
            body: formData
        }).then(function (response) {
            return response.text();

        }).then(function(text){
            let result = document.getElementById("result")
            result.innerHTML = text;
        }).catch(function(error){
            console.error(error);
        })      
    }
}