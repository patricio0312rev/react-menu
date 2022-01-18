import React, { useState } from "react";
import data from "./data";
import Categories from './components/categories.component';
import Menu from "./components/menu.component";

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if( category === 'all') {
      setMenuItems(data);
      return;
    }
    
    const newMenuItems = data.filter((item) => item.category === category);
    setMenuItems(newMenuItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
