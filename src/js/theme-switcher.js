'use strict';

let ls = window.localStorage

//Set dark theme, if previously selected, before content load
if (ls.colorTheme === "dark") {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

window.addEventListener('load', (e) => {
  const themeSwitch = document.querySelector("#theme-switch")
  const iconImg = themeSwitch.querySelector("img")

  //Set the switch styles and icon according to the pre-selected theme
  themeSwitch.setAttribute("aria-checked", ls.colorTheme === "dark" ? "true" : "false")
  iconImg.src = ls.colorTheme === "dark" ? "assets/ic_dark.svg" : "assets/ic_light.svg"

  themeSwitch.addEventListener('click', (e) => {
    if (themeSwitch.getAttribute("aria-checked") === "false") {
      //Switch to dark theme
      document.documentElement.classList.add('dark')
      ls.colorTheme = "dark"
      themeSwitch.setAttribute("aria-checked", "true")
      iconImg.src = "assets/ic_dark.svg"
    } else {
      //Switch to light theme
      document.documentElement.classList.remove('dark')
      ls.colorTheme = "light"
      themeSwitch.setAttribute("aria-checked", "false")
      iconImg.src = "assets/ic_light.svg"
    }
  })
})