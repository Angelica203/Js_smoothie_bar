class SmoothieService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    //index
    async getSmoothies(){
        await fetch(`${this.endpoint}/smoothies`)
        .then(resp => resp.json())
        .then(smoothies => {
        for(const smoothie of smoothies){
            const s = new Smoothie(smoothie)
            s.loadOnDom()  
        } 
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
            
            `
            // const backbttn =
            // document.getElementById('backbttn')
            //     backbttn.addEventListener('click', back)
        })
    }
}


// <a id="backbttn" href="#">Back</a>