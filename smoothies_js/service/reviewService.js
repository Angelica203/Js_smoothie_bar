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
            comment: document.getElementById('comment').value
            // smoothie_id: 
        }
        debugger;
    }


}






// data.forEach(character => new Character(character))