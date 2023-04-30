import React from 'react'

const Navbar = () => {
  return (
    <section id="header">

    <a class="navbar-logo" href="index.html">
        BiBo shop
    </a>
    <div>
        <ul id="navbar">
            <li><a class="active" href="index.html">Home</a></li>
            <li><a href="shop.html">boutique</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="About.html">A propos</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li>
                <a class="lg-bag nav6" href="cart.html">
                    <i class="fa fa-shopping-bag" aria-hidden="true" style={{position: 'relative'}}>
                        <span id="cart_count"></span>
                    </i>
                </a>
            </li>
            <a href="#" id="close"><i class="fas fa-times"></i></a>
        </ul>
    </div>
    <div id="mobile">
        <a href="cart.html"><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
        <i id="bar" class="fas fa-outdent"></i>

    </div>
</section>
  )
}

export default Navbar