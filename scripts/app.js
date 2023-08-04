/* ************** SideBar dropdown toggles ************** */
const DDL1st = Array.from(document.querySelectorAll('.dropdown-toggle--1st'))
const DDL2nd = Array.from(document.querySelectorAll('.dropdown-toggle--2nd'))
const DDL3rd = Array.from(document.querySelectorAll('.dropdown-toggle--3rd'))

changeVisibilityDropdown(DDL1st)
changeVisibilityDropdown(DDL2nd)
changeVisibilityDropdown(DDL3rd)

/* ************** Toggle sidebar visibility ************** */
const hamburgerMenu = document.querySelector('#hamburger-checkbox')
const sidebar = document.querySelector('#sidebar')
const wrapper = document.querySelector('#wrapper')

hamburgerMenu.addEventListener('change', (e) => {
    console.log(e.target.checked)
    if (e.target.checked) {
        wrapper.setAttribute('class', 'moved')
    } else {
        wrapper.removeAttribute('class')
    }
})