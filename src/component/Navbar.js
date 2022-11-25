const Navbar =() => {
    return (
        <div>
            <a class="menu-toggle rounded" href="#"><i class="fas fa-bars"></i></a>
            <nav id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand"><a href="#page-top">Menu</a></li>
                    <li class="sidebar-nav-item"><a href="#page-top">Home</a></li>
                    <li class="sidebar-nav-item"><a href="#about">About</a></li>
                    <li class="sidebar-nav-item"><a href="#services">Services</a></li>
                    <li class="sidebar-nav-item"><a href="#portfolio">Portfolio</a></li>
                    <li class="sidebar-nav-item"><a href="#location">Location</a></li>
                    <li class="sidebar-nav-item"><a href="#send-email">Send Email</a></li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;