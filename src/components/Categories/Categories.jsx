import Title from '../Title/Title';
import CategoriesContainer from './CategoriesStyled';
import CardCategory from '../CardCategory/CardCategory';

const Categories = () => {
    return(
        <>
        <CategoriesContainer>
            <Title msg='Shop from ' bold='Top Categories' />
            <div className='categories'>
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
                <CardCategory />
            </div>
        </CategoriesContainer>
        </>
    );
};

export default Categories;