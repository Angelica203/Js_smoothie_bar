
const base_url = 'http://127.0.0.1:3000'
const reviewService = new ReviewService(base_url)
// const addEventListerner = addEventListener('submit', handleSubmit)
// const addEventListener = addEventListerner('reviews-container')
// const review = document.getElementById('new-review-form')
reviewService.getReviews()
Review.renderForm()

// function handleSubmit(){
// reviewService.createReview()
// }

// const base_url = 'http://127.0.0.1:3000'
// const reviewService = new ReviewService(base_url)
// // const reviews = fetchAndLoadReviews()

// // const base_url = 'http://127.0.0.1:3000'
// // // console.log('Hi')
// // const  reviewService = new ReviewService(base_url)

// //  reviewService.getReviews(