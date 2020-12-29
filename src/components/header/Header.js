function Header() {
    return (
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand website-name" href="#">DIVE SHOP</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><a href="/products">Products</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}

export default Header;