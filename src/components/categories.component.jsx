import React from 'react';

const Categories = ({ filterItems, categories }) => {
    return (
        <div className="btn-container">
            {
                categories.map((category, key) => {
                    return (
                        <button key={key} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>
                    )
                })
            }
        </div>
    );
}

export default Categories;
