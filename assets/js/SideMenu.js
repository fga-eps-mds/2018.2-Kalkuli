
toggleSideMenu = () => {
  document.getElementById('sidebar').classList.toggle('active')   
  document.getElementById('background-shadow').classList.toggle('active')
}

closeSideMenu = () => {
  document.getElementById('sidebar').classList.remove('active')   
  document.getElementById('background-shadow').classList.remove('active')
}