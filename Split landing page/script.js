const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// add event listener for  when the mouse hovers over the left side 
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))

// add event listener for  when the mouse hovers out of the left side
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// add event listener for  when the mouse hovers over the right side
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))

// add event listener for  when the mouse hovers out of the right side
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
