function showSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'flex'
}
function closeSidebar(){
    const sidebar = document.querySelector('.side-bar')
    sidebar.style.display = 'none'
}

module.export = {
    showSidebar,
    closeSidebar,
    
}