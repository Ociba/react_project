import React from 'react';
 //import {Switch, Link} from 'react-router-dom';
function Navbar (){
   return (
      <div>
    {/* <Navbar bg="success" variant="dark">
    <Navbar.Brand href="#home">
        <img
            alt=""
            src={image}
            width="40"
            height="40"
            className="d-inline-block align-top"
            />{' '}
        <>
        React Bootstrap
        </>{' '}
        <div className="right">
            <Switch>
                <Link to="/" className="link">
                Home</Link>
            </Switch>
            <Switch>
                <Link to="/about" className="link">
                About</Link>
            </Switch>
            <Switch>
                <Link to="/contact" className="link">
                Contact</Link>
            </Switch>
            <Switch>
                <Link to="/news" className="link">
                News</Link>
            </Switch>
            <Switch>
                <Link to="/services" className="link">
                Services</Link>
            </Switch>
        </div>
    </Navbar.Brand>
</Navbar> */}
 <header class="header clearfix">
<div class="sub-header-group">
                <div class="sub-header">
                    <div class="ui dropdown">
                        <a href="#" class="category_drop hover-btn" data-toggle="modal" data-target="#category_model" title="Categories"><i class="uil uil-apps"></i><span class="cate__icon">Select Category</span></a>
                    </div>
                    <nav class="navbar navbar-expand-lg navbar-light py-3">
                        <div class="container-fluid">
                            <button class="navbar-toggler menu_toggle_btn" type="button" data-target="#navbarSupportedContent"><i class="uil uil-bars"></i></button>
                            <div class="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu" id="navbarSupportedContent">
                                <ul class="navbar-nav main_nav align-self-stretch">
                                    <li class="nav-item"><a href="index.html" class="nav-link active" title="Home">Home</a></li>
                                    <li class="nav-item"><a href="shop_grid.html" class="nav-link new_item" title="New Products">New Products</a></li>
                                    <li class="nav-item"><a href="shop_grid.html" class="nav-link" title="Featured Products">Featured Products</a></li>
                                    <li class="nav-item">
                                        <div class="ui icon top left dropdown nav__menu">
                                            <a class="nav-link" title="Pages">Pages <i class="uil uil-angle-down"></i></a>
                                            <div class="menu dropdown_page">
                                                <a href="dashboard_overview.html" class="item channel_item page__links">Account</a>
                                                <a href="about_us.html" class="item channel_item page__links">About Us</a>
                                                <a href="shop_grid.html" class="item channel_item page__links">Shop Grid</a>
                                                <a href="single_product_view.html" class="item channel_item page__links">Single Product View</a>
                                                <a href="checkout.html" class="item channel_item page__links">Checkout</a>
                                                <a href="request_product.html" class="item channel_item page__links">Product Request</a>
                                                <a href="order_placed.html" class="item channel_item page__links">Order Placed</a>
                                                <a href="bill.html" class="item channel_item page__links">Bill Slip</a>
                                                <a href="sign_in.html" class="item channel_item page__links">Sign In</a>
                                                <a href="sign_up.html" class="item channel_item page__links">Sign Up</a>
                                                <a href="forgot_password.html" class="item channel_item page__links">Forgot Password</a>
                                                <a href="contact_us.html" class="item channel_item page__links">Contact Us</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <div class="ui icon top left dropdown nav__menu">
                                            <a class="nav-link" title="Blog">Blog <i class="uil uil-angle-down"></i></a>
                                            <div class="menu dropdown_page">
                                                <a href="our_blog.html" class="item channel_item page__links">Our Blog</a>
                                                <a href="blog_no_sidebar.html" class="item channel_item page__links">Our Blog Two No Sidebar</a>
                                                <a href="blog_left_sidebar.html" class="item channel_item page__links">Our Blog with Left Sidebar</a>
                                                <a href="blog_right_sidebar.html" class="item channel_item page__links">Our Blog with Right Sidebar</a>
                                                <a href="blog_detail_view.html" class="item channel_item page__links">Blog Detail View</a>
                                                <a href="blog_left_sidebar_single_view.html" class="item channel_item page__links">Blog Detail View with Sidebar</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item"><a href="contact_us.html" class="nav-link" title="Contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="catey__icon">
                        <a href="#" class="cate__btn" data-toggle="modal" data-target="#category_model" title="Categories"><i class="uil uil-apps"></i></a>
                    </div>
                    <div class="header_cart order-1">
                        <a href="#" class="cart__btn hover-btn pull-bs-canvas-left" title="Cart"><i class="uil uil-shopping-cart-alt"></i><span>Cart</span><ins>2</ins><i class="uil uil-angle-down"></i></a>
                    </div>
                    <div class="search__icon order-1">
                        <a href="#" class="search__btn hover-btn" data-toggle="modal" data-target="#search_model" title="Search"><i class="uil uil-search"></i></a>
                    </div>
                </div>
            </div>
            </header>
   </div>
   
   );

}
 
export default Navbar;