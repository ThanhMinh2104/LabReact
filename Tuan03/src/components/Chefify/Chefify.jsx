import chefify from "../../assets/chefify.png";
import avatar from "../../assets/avatar.png";
import list from '../../assets/list_filter.png';
import slider from '../../assets/slider.png';
import rating5 from '../../assets/rating_5.png';
import rating4 from '../../assets/rating_4.png';
import rating3 from '../../assets/rating_3.png';
import rating2 from '../../assets/rating_2.png';
import rating1 from '../../assets/rating_1.png';
import nothing from '../../assets/nothing.png';
import chefifywhite from '../../assets/chefifywhite.png';
import './Chefify.css';

function Chefify() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-search">
          <img src={chefify} alt="Chefify Logo" />
          <input type="text" placeholder="cakescasca" />
        </div>
        <div className="header-nav">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occassions</a>
          <a href="#">About us</a>
        </div>
        <div className="header-actions">
          <button>Your Recipe Box</button>
          <img src={avatar} alt="User Avatar" />
        </div>
      </div>
      <div className="menu">
        <div className="menu-filter">
          <div className="menu-filter-header">
            <img src={list} alt="Filter Icon" />
            <p>FILTERS</p>
          </div>
          <div className="menu-filter-section">
            <p>Types</p>
            <span>icon</span>
          </div>
          <div className="checkbox-group">
            <div>
              <input type="checkbox" />
              <span>Pan-fried</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Stir-fried</span>
            </div>
          </div>
          <div className="checkbox-group">
            <div>
              <input type="checkbox" />
              <span>Grilled</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Roasted</span>
            </div>
          </div>
          <div className="checkbox-group">
            <div>
              <input type="checkbox" />
              <span>Sauteed</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Baked</span>
            </div>
          </div>
          <div className="checkbox-group">
            <div>
              <input type="checkbox" />
              <span>Steamed</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Stewed</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="menu-filter-section">
            <p>Time</p>
            <span>icon</span>
          </div>
          <div className="time-selection">
            <p>30 mins</p>
            <p>50 mins</p>
          </div>
          <img src={slider} alt="Time Slider" />
          <div className="divider"></div>
          <div className="menu-filter-section">
            <p>Rating</p>
            <span>Icon</span>
          </div>
          <div className="rating-selection">
            <input type="checkbox" />
            <img src={rating5} alt="5 Stars" />
          </div>
          <div className="rating-selection">
            <input type="checkbox" />
            <img src={rating4} alt="4 Stars" />
          </div>
          <div className="rating-selection">
            <input type="checkbox" />
            <img src={rating3} alt="3 Stars" />
          </div>
          <div className="rating-selection">
            <input type="checkbox" />
            <img src={rating2} alt="2 Stars" />
          </div>
          <div className="rating-selection">
            <input type="checkbox" />
            <img src={rating1} alt="1 Star" />
          </div>
          <div className="divider"></div>
          <div className="apply-button">
            <button>Apply</button>
          </div>
        </div>
      </div>
      <div className="content">
        <p>Sorry, no results were found for “cakescascsa”</p>
        <img src={nothing} alt="No Results" />
        <p className="content-suggestions">We have all your Independence Day sweets covered.</p>
        <div className="content-buttons">
          <button className="sweet-cake">Sweet Cake</button>
          <button className="black-cake">Black Cake</button>
          <button className="pozole-verder">Pozole Verder</button>
          <button className="healthy-food">Healthy food</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-about">
          <div className="footer-about-content">
            <p>About us</p>
            <p className="description">Welcome to our website, a wonderful place to explore and learn how to cool like a pro</p>
            <div className="footer-email">
              <input type="text" placeholder="Enter your email" />
              <button>Send</button>
            </div>
          </div>
          <div className="footer-bottom">
            <img src={chefifywhite} alt="Chefify White Logo" />
            <p>2021 Chefify Company</p>
            <a href="#">Term of Servical Privacy Policy</a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <p>Learn More</p>
            <a href="#">Our Cooks</a>
            <a href="#">See Our Features</a>
            <a href="#">FAQ</a>
          </div>
          <div>
            <p>Shop</p>
            <a href="#">Gift Subscription</a>
            <a href="#">Send US Feedback</a>
          </div>
        </div>
        <div className="footer-recipes">
          <p>Recipes</p>
          <a href="#">What to Cook This Week</a>
          <a href="#">Pasta</a>
          <a href="#">Dinner</a>
          <a href="#">Healthy</a>
          <a href="#">Vegetarian</a>
          <a href="#">Vegan</a>
          <a href="#">Chirtmas</a>
        </div>
      </div>
    </div>
  );
}

export default Chefify;