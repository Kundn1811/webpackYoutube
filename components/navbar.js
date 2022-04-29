function navbar() {
    return ` 
    <div id="nav-left-child">
    <i class="fa-solid fa-bars"></i>
    <div id="logo">
        <i class="fa-brands fa-youtube"></i>
        <h2>YouTube</h2>
    </div>
</div>
<div id="input">
    <input type="text" id="query" placeholder="Search">
    <i class="fa-solid fa-magnifying-glass" id="search"></i>
   
</div>
<div id="icon">
    <i class="fa-solid fa-video"></i>
    <i class="fa-solid fa-table-cells"></i>
    <i class="fa-solid fa-bell"></i>
    <i class="fa-solid fa-user"></i>
</div>
   
    `
}

export {navbar};