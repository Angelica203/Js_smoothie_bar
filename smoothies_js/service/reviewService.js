class ReviewService {
    constructor(endpoint){
        this.endpoint = endpoint
    }
 // index
    async getReviews(){
    await smoothieService.getSmoothies()
    await fetch(`${this.endpoint}/reviews`)
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
            comment: event.target.comment.value,
            smoothie_id: parseInt(event.target.smoothie_id.value)
            }
        // debugger
        fetch(`${this.endpoint}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                review
            )
        })
        .then(resp => resp.json())
        .then(reviews => {
            const r = new Review(review)
            r.loadOnDom()
        })
    }

    deleteReview(id){
        // debugger;
        fetch(`${this.endpoint}/reviews/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }




}






// data.forEach(character => new Character(character))