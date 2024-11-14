import React from "react";
import { Link } from "react-router-dom"; 
import "./ahome.css";

function HomePage() {
  return (
    <div className="homepage">
      {}
      <nav className="navbar">
        <div className="logo">Foodie</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="aa">
      {}
      <section className="banner">
        <h1>Delicious Food Delivered To Your Doorstep</h1>
        <p>Order your favorite meals from the best restaurants in town</p>
        <button>Order Now</button>
      </section>

      {}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src="https://www.tasteofhome.com/wp-content/uploads/2021/01/New-York-Style-Pizza_EXPS_FT20_105578_F_1217_1.jpg" alt="Pizza" />
            <h3>Pizza</h3>
          </div>
          <div className="category-card">
            <img src="http://www.choicemeats.co.ke/wp-content/uploads/2017/02/burger.jpg" alt="Burgers" />
            <h3>Burgers</h3>
          </div>
          <div className="category-card">
            <img src="https://gocookyummy.com/wp-content/uploads/2023/04/size-sushi-serving.jpg" alt="Sushi" />
            <h3>Sushi</h3>
          </div>
          <div className="category-card">
            <img src="https://www.tasteofhome.com/wp-content/uploads/2017/09/exps187568_SD153320D12_05_1b.jpg" alt="Desserts" />
            <h3>Desserts</h3>
          </div>
        </div>
      </section>
      </div>
      {}
      <section className="featured-items">
      <div className="aaa">
        <h2>Featured Items</h2>
        <div className="featured-cards">
          <div className="featured-card">
            <img src="https://img.freepik.com/premium-photo/grilled-chicken_42136-2804.jpg" alt="Featured Item 1" />
            <h3>Grilled Chicken</h3>
            <p>₹599</p>
          </div>
          <div className="featured-card">
            <img src="https://www.superhealthykids.com/wp-content/uploads/2021/10/best-veggie-pizza-featured-image-square-2-500x500.jpg" alt="Featured Item 2" />
            <h3>Veggie Pizza</h3>
            <p>₹199</p>
          </div>
          <div className="featured-card">
            <img src="https://www.giftmyemotions.com/image/cache/floralnation/amazone/0138-800x800.jpg" alt="Featured Item 3" />
            <h3>Chocolate Cake</h3>
            <p>₹499</p>
          </div>
        </div>
      </div>
      </section>
      {}
      <footer className="footer">
        <p>&copy; 2024 Foodie. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/login" className="footer-link">Login</Link>
          <Link to="/signup" className="footer-link">Sign Up</Link>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;