window.onload = function(){

    let button = document.querySelector(".btn");

    button.addEventListener('click', onClick);

    function onClick(e){

        fetch("superheroes.php")
            .then(response => {
                if (response.ok){
                    return response.text()
                }else {
                    return Promise.reject("Something went wrong")
                }
            })
            .then(data => {
                alert(data)
            })
            .catch(error => console.log('There was an error: ' + error));
        
    }
}