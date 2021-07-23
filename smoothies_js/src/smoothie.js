class Smoothie{
    static all = []
    static smoothieContainer = document.getElementById('smoothies-container')

    constructor({id, flavor, image, reviews}){
        this.id = id
        this.flavor = flavor
        this.image = image
        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `smoothie-${this.id}`
        this.element.addEventListener('submit', this.handleSubmit)
        this.reviews = reviews.map(r =>{
            
            const rObj = new Review(r)
            return rObj
        })
        Smoothie.all.push(this)

    }

    smoothieHTML(){
        // debugger
        this.element.innerHTML += `
        <div>
            <h3>${this.flavor}</h3>
            <br>
            <img src= ${this.image} width = '300'>
            <form id="new-review-smoothie-${this.id}">
            Comment: <input type="text" id="comment">
            <input type="hidden" id="smoothie_id" value="${this.id}">
            <input type="submit" id="create">
            <form>
            <div id= smoothie-${this.id}-reviews>
            <ul></ul>
            </div>
        </div>
        <br>
        <br>
        `
        return this.element
    }

    loadOnDom(){
        Smoothie.smoothieContainer.appendChild(this.smoothieHTML())
        this.reviews.forEach(r => {
            r.loadOnDom()
        })
    }
    handleSubmit = () => {
        event.preventDefault()
        const comment = event.target.comment.value
        const smoothieId = parseInt(event.target.smoothie_id.value)
        const r = new Review(comment,smoothieId)
        reviewService.createReview()   
        event.target.reset()    
    }


}