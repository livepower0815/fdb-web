export const initSlider = selector => {
  const slider = document.querySelector(selector)
  const sliderItem = slider.childNodes
  let mouseDown = false
  let startX, scrollLeft

  function startDragging(e) {
    mouseDown = true
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  }
  function stopDragging() {
    mouseDown = false
    sliderItem.forEach(item => {
      item.classList.remove('-pointer-none')
    })
  }

  function moveDragging(e) {
    e.preventDefault()
    if (!mouseDown) {
      return
    }
    const x = e.pageX - slider.offsetLeft
    const scroll = x - startX
    slider.scrollLeft = scrollLeft - scroll
    sliderItem.forEach(item => {
      item.classList.add('-pointer-none')
    })
  }

  // Add the event listeners
  slider.addEventListener('mousemove', moveDragging)
  slider.addEventListener('mousedown', startDragging, false)
  slider.addEventListener('mouseup', stopDragging, false)
  slider.addEventListener('mouseleave', stopDragging, false)

  function removeEvent() {
    slider.removeEventListener('mousemove', moveDragging)
    slider.removeEventListener('mousedown', startDragging, false)
    slider.removeEventListener('mouseup', stopDragging, false)
    slider.removeEventListener('mouseleave', stopDragging, false)
  }

  return removeEvent
}
