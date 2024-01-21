import React, { useState } from 'react';
import Header from './Header';
import Titre from './Titre';
import { categories, articles } from './Data';



const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories);
    const [cart, setCart] = useState([]);
  
    const filterArticles = articles.filter(article => article.Catégorie === selectedCategory);

    const affichage = (e) => {
        setSelectedCategory(e.target.value)
    }
  
    const addToCart = (article) => {
      setCart([...cart, article]);
    };
  
    const total = () => {
      return cart.reduce((e,ee) => e + ee.Prix, 0);
    };
  
    const delet = (Prix) => {
      setCart(cart.filter(e => e.Prix !== Prix));
    };
  
    return (
      <div>
        <Header />
        <Titre texte="Sélectionnez une catégorie" />
        <select onChange={affichage}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
  
        <Titre texte="Articles" />
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Désignation</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterArticles.map((article, index) => (
              <tr key={index}>
                <td>{article.Code}</td>
                <td>{article.Designation}</td>
                <td>{article.Prix}</td>
                <td>
                  <button onClick={() => addToCart(article)}>Ajouter au panier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <Titre texte="Panier" />
        <ul>
          {cart.map((article) => (
            <li key={article.Prix}>
              <h5>le nom est {article.Designation} et le prix est  {article.Prix} 
              <button onClick={() => delet(article.Prix)}>Supprimer</button> </h5>
              
            </li>
          ))}
        </ul>
  
        <p>Total : {total()} </p>
      </div>
    );
  };
  
  export default App;
  
