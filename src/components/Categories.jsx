import CategoryCard from "./CategoryCard"
import { FaTshirt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { RiJewelryFill } from "react-icons/ri";

const Categories = () => {

    return (
        <section className="categories">
            <h2>Categorias</h2>
            <div className="category-list">
                <CategoryCard icon= {<FaTshirt/>} categoryName="Roupas"/>
                <CategoryCard icon= {<FaPhone />} categoryName="Eletrônicos"/>
                <CategoryCard icon={<GiConverseShoe />} categoryName="Calçados"/>
                <CategoryCard icon={<RiJewelryFill />} categoryName="Acessórios"/>
            </div>
        </section>
    )
}

export default Categories