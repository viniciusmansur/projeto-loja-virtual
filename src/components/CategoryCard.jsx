const CategoryCard = ({icon, categoryName}) => {
    return(
            <div className="category-card">
                <span className="category-icon">{icon}</span>
                <p>{categoryName}</p>
            </div>
           
    )
}

export default CategoryCard