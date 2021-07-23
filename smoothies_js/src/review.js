class Review {
    // remember obj
    static all = []

    //static filter =[]
    constructor({id, comment, smoothie_id}){
        this.id = id
        this.comment = comment
        this.smoothie_id = smoothie_id
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `review-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        // this.bindEventListeners()

        Review.all.push(this)
    }

    render() {
    const reviewsContainer = document.getElementById('reviews-container')
    reviewsContainer.append(this.reviewHTML())
    }  

     
    reviewHTML(){
        // debugger
        this.element.innerHTML += `
        ${this.comment}
        <button id='delete-bttn'>Delete</button>
        <br>
        <br>
         `
        return this.element
    }

    loadOnDom(){
        const revcont = document.getElementById(`smoothie-${this.smoothie_id}-reviews`).firstElementChild
        revcont.appendChild(this.reviewHTML())
    
    }
  

    handleClick = () => {
        if (event.target.innerText === 'Delete'){
            this.element.remove()
            reviewService.deleteReview(this.id)
        }
    }

}


