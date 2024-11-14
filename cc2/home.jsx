import React, { useState, useContext, createContext } from 'react';
import {  FaShoppingCart,  FaUtensils } from 'react-icons/fa';


const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};


const restaurants = {
  'Pizza Place': [
    { name: 'Pepperoni Pizza', price: 120, img: 'https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2-500x500.jpg' },
    { name: 'Margherita Pizza', price: 100, img: 'https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=800&height=800' },
    { name: 'BBQ Chicken Pizza', price: 140, img: 'https://breadboozebacon.com/wp-content/uploads/2023/05/BBQ-Chicken-Pizza-SQUARE.jpg' },
    { name: 'Hawaiian Pizza', price: 130, img: 'https://www.superhealthykids.com/wp-content/uploads/2018/07/hawaiian-pizza-featured-image-square-1.jpg' },
    { name: 'Veggie Deluxe Pizza', price: 110, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRew1G46yIxpX9-_EKL7YJXgewHlD6mPJvGVQ&s' },
  ],
  'Burger Joint': [
    { name: 'Cheeseburger', price: 80, img: 'https://www.foodandwine.com/thmb/LUEdbNTLcdq_BtCmINp23zQbQro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheeseburgers-eat-delicious-XL-BLOG0517-b578f43651854aeb8e2e605580094811.jpg' },
    { name: 'Veggie Burger', price: 70, img: 'https://runningonrealfood.com/wp-content/uploads/2022/01/Best-Vegan-Chickpea-Veggie-Burger-Patties-Recipe.jpg' },
    { name: 'Bacon Burger', price: 100, img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2022-03_bacon-cheeseburger%2F2022-03-16_ATK-0561' },
    { name: 'Chicken Burger', price: 90, img: 'https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-index-667b185b5f528.jpg?crop=0.500xw:1.00xh;0.282xw,0&resize=1200:*' },
    { name: 'Double Beef Burger', price: 120, img: 'https://pizzahampstead.com/wp-content/uploads/2016/09/38.png' },
  ],
  'Sushi Spot': [
    { name: 'California Roll', price: 150, img: 'https://theschmidtywife.com/wp-content/uploads/2021/02/California_Rolls_Overhead-720x720.jpg' },
    { name: 'Spicy Tuna Roll', price: 180, img: 'https://veganeverytime.com/wp-content/uploads/2024/04/vegan-spicy-tuna-roll-1-500x500.jpg' },
    { name: 'Salmon Sashimi', price: 200, img: 'https://aisforappleau.com/wp-content/uploads/2023/07/how-to-make-sushi-salmon-nigiri-6.jpg' },
    { name: 'Dragon Roll', price: 220, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskNTUCCPXEdk-yBwwqMuZTD_ADvn-IJBNyQ&s' },
    { name: 'Shrimp Tempura Roll', price: 170, img: 'https://plate38.com/wp-content/uploads/2020/04/crunchy-shrimp-roll.plate38.jpg' },
  ],
};


const Homepage = ({ isLoading }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Using ThemeContext for global theme state
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false); // State to toggle cart display
  const [address, setAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    if (!address) {
      alert('Please enter your delivery address.');
      return;
    }
    if (!deliveryTime) {
      alert('Please select a delivery time.');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    alert(`Order placed successfully! Total: ₹${total}\nDelivery to: ${address}\nTime: ${deliveryTime}\nPayment method: ${paymentMethod}`);
    setCart([]);
    setTotal(0);
    setAddress('');
    setDeliveryTime('');
    setPaymentMethod('');
  };

  const toggleCartDisplay = () => {
    setShowCart(!showCart); 
  };

  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'url(https://wallpapers.com/images/featured/food-delivery-uzm1ss89qzgz2qtu.jpg) no-repeat center center/cover',
    fontFamily: 'Arial, sans-serif',
    zIndex:"999"
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };



  const menuContainerStyle = {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const menuItemStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '10px',
    backgroundColor: '#fff',
    color: '#000',
    width: '200px', 
    textAlign: 'center',
  };

  const cartStyle = {
    position: 'absolute',
    top: '50px',
    right: '20px',
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '300px',
    display: showCart ? 'block' : 'none', // Conditional display based on showCart state
  };

  const cartIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '20px',
    cursor: 'pointer',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <div style={containerStyle}>
      <h1>Food Delivery Service</h1>

      <FaShoppingCart style={cartIconStyle} onClick={toggleCartDisplay} />
      {cart.length > 0 && <span>{cart.length}</span>}

      <div>
        <button style={buttonStyle} onClick={() => setSelectedRestaurant('Pizza Place')}>
          Pizza Place <FaUtensils />
        </button>
        <button style={buttonStyle} onClick={() => setSelectedRestaurant('Burger Joint')}>
          Burger Joint <FaUtensils />
        </button>
        <button style={buttonStyle} onClick={() => setSelectedRestaurant('Sushi Spot')}>
          Sushi Spot <FaUtensils />
        </button>
      </div>

      {selectedRestaurant && (
        <div style={menuContainerStyle}>
          <h2>{selectedRestaurant} Menu</h2>
          {restaurants[selectedRestaurant].map((item, index) => (
            <div key={index} style={menuItemStyle}>
              <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px' }} />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <button style={buttonStyle} onClick={() => handleAddToCart(item)}>
                Add to Cart <FaShoppingCart />
              </button>
            </div>
          ))}
        </div>
      )}

      <div style={cartStyle}>
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <p key={index}>{item.name} - ₹{item.price}</p>
            ))}
            <h3>Total: ₹{total}</h3>

            {/* Delivery Address */}
            <div>
              <label>Delivery Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                style={{ width: '100%', padding: '5px', margin: '10px 0' }}
              />
            </div>

            {/* Delivery Timing */}
            <div>
              <label>Delivery Time:</label>
              <select value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)}>
                <option value="">Select a time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
                <option value="08:00 PM">08:00 PM</option>
              </select>
            </div>

            {/* Payment Methods */}
            <div>
              <label>Payment Method:</label>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="UPI"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{' '}
                UPI
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{' '}
                Credit Card
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{' '}
                Cash on Delivery
              </div>
            </div>

            <button style={buttonStyle} onClick={placeOrder}>
              Place Order
            </button>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <button style={buttonStyle} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};


const EnhancedHomepage = withLoading(Homepage);


const Home = () => {
  return (
    <ThemeProvider>
      <EnhancedHomepage isLoading={false} />
    </ThemeProvider>
  );
};

export default Home;
