
const base_url = 'http://127.0.0.1:3000'
const reviewService = new ReviewService(base_url)

Review.reviewForm.addEventListener('submit', handleSubmit)
reviewService.getReviews()
Review.renderForm()

function handleSubmit(event){
    event.preventDefault()
reviewService.createReview()
event.target.reset()
}

// const base_url = 'http://127.0.0.1:3000'
// const reviewService = new ReviewService(base_url)
// // const reviews = fetchAndLoadReviews()

// // const base_url = 'http://127.0.0.1:3000'
// // // console.log('Hi')
// // const  reviewService = new ReviewService(base_url)

// //  reviewService.getReviews(