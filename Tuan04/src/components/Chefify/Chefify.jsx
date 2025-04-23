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
import { CiBookmark } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Recipe } from "../Recipe/Recipe";
import './Chefify.css';

function Chefify() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetch('https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe')
      .then(res => res.json())
      .then(data => {
        setRecipeList(data);
      });
  }, []);

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
      <div className="content">
        <div className="breadcrumb">
          <p className="home">Home</p>
          <p className="separator"><MdNavigateNext size='28px' /></p>
          <p className="recipe-box">Your Recipe Box</p>
        </div>
        <div className="profile">
          <p className="profile-title">Emma Gonzalez's Recipe Box</p>
          <div className="profile-content">
            <img width='164px' height='164px' src={avatar} alt="Profile Avatar" />
            <div className="profile-details">
              <p>
                Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is
                also an accomplished author, contributing to numerous cookbooks and food publications.
                Originally from East Los Angeles, Emma now resides in New York City, where she explores
                a wide range of culinary delights.
              </p>
              <div className="profile-actions">
                <p>6.5k Subcribes</p>
                <button>Share <RiShareForwardLine size={20} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="table-item">
          <div className="tab-bar">
            <button className="saved-recipes">Saved Recipes</button>
            <button className="folders">Folders</button>
            <button className="recipes-by-genevene">Recipes by Genevene</button>
          </div>
          <div className="recipe-list">
            {recipeList.map((data, index) => (
              <Recipe key={index} item={data} />
            ))}
          </div>
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