class SmoothieService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    //index
    getSmoothies(){
        fetch(`${this.endpoint}/smoothies`)
        .then(resp => resp.json())
        .then(reviews => {
            
        })

    }
//show page

    smoothieShow(){
        fetch(`http://localhost:3000/smoothies/${id}`)
        Review.reviewForm.innerHTML += `
        <form if="new-review-form">
            Comment: <input type="text" id="comment">
            <input type="submit" id="create">
        <form>
        `
        .then(resp => resp.json())
        .then(smoothies =>{
        
            smoothiesContainer.innerHTML =''
            smoothiesContainer.innerHTML +=`
            <img src=${smoothies.image}/>
            <br>
            <a id="backbttn" href="#">Back</a>
            `
            const backbttn =
            document.getElementById('backbttn')
                backbttn.addEventListener('click', back)
        })
    }
}