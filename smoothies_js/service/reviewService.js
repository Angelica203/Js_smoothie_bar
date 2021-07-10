class ReviewService {
    constructor(endpoint){
        this.endpoint = endpoint
    }
 // index
    getReviews(){
     fetch(`${this.endpoint}/reviews`)
     .then(resp => resp.json())
     .then(reviews => {
        for (const review of reviews){
            const r = new Review(review)
            r.loadOnDom()
        }
        
     })
    }

    createReview() {
        const review = {
            comment: document.getElementById('comment').value,
            smoothie_id: 1
        }
        debugger
        fetch(`${this.endpoint}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                reviews
            )
        })
        .then(resp => resp.json())
        .then(reviews => {
debugger
        })
    }




}






// data.forEach(character => new Character(character))