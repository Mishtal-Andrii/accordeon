//using selectors inside the element
const questions = document.querySelectorAll(".question");
const btns = document.querySelectorAll('.question-btn')

/* //First variant
btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text')
  })
})
          */     

//Second variant(close previuse when open)
questions.forEach(question => {

  const btn = question.querySelector('.question-btn')

  btn.addEventListener('click', () => {

    questions.forEach(item => {
      if (item !== question) {
        item.classList.remove('show-text')
      }
    })

    question.classList.toggle('show-text')
  })
})