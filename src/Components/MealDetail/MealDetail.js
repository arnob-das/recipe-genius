import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './MealDetail.css'

const MealDetail = (props) => {
    const { strMeal, strMealThumb, idMeal } = props.meal
    // navigation
    const navigate = useNavigate()
    const mealDetailsHandler = () => {
        navigate(`/mealDetail/${idMeal}`);
    }

    return (
        <Col sm={12} lg={3} className="meal-detail">
                <img className="strMealThumb w-100" src={strMealThumb} alt="" />
                <h4 className="mt-3 ms-3">{strMeal}</h4>
                <Button className="see-details text-bold" onClick={mealDetailsHandler}>See Details</Button>
        </Col>
    );
};

export default MealDetail