
openSideMenu = () => {
  console.log("abre")
  document.getElementById('side-menu').style.width = '250px'
  document.getElementById('main').style.marginLeft = '250px'
}

closeSideMenu = () => {
  console.log("fecha")
  document.getElementById('side-menu').style.width = '0'
  document.getElementById('main').style.marginLeft = '0'
}