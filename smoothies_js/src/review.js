class Review {
    // remember obj
    static all = []
    static reviewsContainer = document.getElementById("reviews-container")
    static reviewForm = document.getElementById('new-review-form')

    //static filter =[]
    constructor({id, comment, smoothie_id}){
        this.id = id
        this.comment = comment
        this.smoothie_id = smoothie_id
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `review-${this.id}`
        // this.bindEventListeners()

        Review.all.push(this)
    }



    render() {
    const reviewsContainer = document.getElementById('reviewsContainer')
    reviewsContainer.innerHTML = 'my reviews'
    }  

     
    reviewHTML(){
        // debugger
        this.element.innerHTML += `
        <div>
            <h3>${this.comment}</h3>
        </div>
         `
        return this.element
    }

    loadOnDom(){
        Review.reviewsContainer.appendChild(this.reviewHTML())
    }
  
    static renderForm(){
        Review.reviewForm.innerHTML += `
        <form if="new-review-form">
            Comment: <input type="text" id="comment">
            <input type="submit" id="create">
        <form>
        `
    }
    // static renderForm(){
    //     // debugger
    //     const review = document.getElementById('new-review-form').value
    //     // console.log(document.getElementById('new-review-form'))
    //     // debugger;
    // }
    
}