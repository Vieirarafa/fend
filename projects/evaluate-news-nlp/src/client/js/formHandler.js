import { isUrlValid } from "./urlIsValid";

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    var input_url= document.getElementById('url').value
    //Verify if the user input is valid Url
    if(isUrlValid(input_url)===true) {

        console.log('Valid input url');
        alert("Is Valid URL");
        //Fetch the API
        fetch('http://localhost:8080/analyse/', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: input_url})
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res); 
             
            // Populate html with result
            alert("Update UI");
            document.querySelector('.score_tag').innerHTML = `score_tag: ${res.score_tag}`
            document.querySelector('.agreement').innerHTML = `agreement: ${res.agreement}`
            document.querySelector('.subjectivity').innerHTML = `subjectivity: ${res.subjectivity}`
            document.querySelector('.confidence').innerHTML = `confidence: ${res.confidence}`
            document.querySelector('.irony').innerHTML = `irony: ${res.irony}`

            return res
        })
        }else{
        //Error menssage
     console.log('Enter a valid url')
     alert("Is Not Valid Url");
    }
}
    export { handleSubmit }



