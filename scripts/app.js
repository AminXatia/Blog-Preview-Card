const title = document.querySelector(".description__title")
const wrapper = document.querySelector(".wrapper")

title.addEventListener('mouseenter', () => {
    wrapper.style.boxShadow = "1.6rem 1.6rem 0 #000"
} )
title.addEventListener('mouseleave', () => {
    wrapper.style.boxShadow = "0.8rem 0.8rem 0 #000 "
} )

