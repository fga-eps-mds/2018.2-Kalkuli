
openSideMenu = () => {
  console.log("abre")
  document.getElementById("side-menu").classList.toggle('active')
}

closeSideMenu = () => {
  console.log("fecha")
  document.getElementById('side-menu').style.width = '0'
}