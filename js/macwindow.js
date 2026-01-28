document.addEventListener("DOMContentLoaded", () => {
  const win = document.getElementById("macWindow")
  const closeBtn = document.querySelector(".dot.close")
  const minBtn = document.querySelector(".dot.min")
  const fullBtn = document.querySelector(".dot.full")

  // CLOSE — hides the window
  closeBtn.addEventListener("click", () => {
    win.style.display = "none"
  })

  // MINIMIZE — collapses the window
  minBtn.addEventListener("click", () => {
    win.dataset.originalHeight = win.style.height
    win.style.height = "30px"
    win.style.overflow = "hidden"
  })

  // FULLSCREEN / RESTORE
  let isFull = false
  fullBtn.addEventListener("click", () => {
    if (!isFull) {
      win.dataset.originalWidth = win.style.width
      win.dataset.originalHeight = win.style.height

      win.style.position = "fixed"
      win.style.top = "0"
      win.style.left = "0"
      win.style.width = "100vw"
      win.style.height = "100vh"
      win.style.zIndex = "999"

      isFull = true
    } else {
      win.style.position = "static"
      win.style.width = win.dataset.originalWidth || ""
      win.style.height = win.dataset.originalHeight || ""
      win.style.zIndex = "1"

      isFull = false
    }
  })
})