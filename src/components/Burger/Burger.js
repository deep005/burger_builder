import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
            .map((_, i )=>{
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        //flattening the array to find out if not elements are passed down so that we can show an error message
        .reduce((arr, el)=>{
            return arr.concat(el);
        }, []);
        console.log(transformedIngredients)
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients.length? transformedIngredients: 'Please add ingredients to your burger.'}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default burger;