import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import './SingleMealDetail.css'

const SingleMealDetail = (props) => {
    const { mealId } = useParams();
    const [singleMealDetail, setSingleMealDetail] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setSingleMealDetail(data.meals))
    }, [])

    const btnNavigator = useNavigate();
    const backBtnHandler = () => {
        btnNavigator("/");
    }


    return (
        <Container>
            <Navigation />
            {singleMealDetail.length === 0 &&
                <div class="d-flex align-items-center justify-content-center spinner">
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </div>
            }

            {singleMealDetail.length !== 0 &&
                <Row className="justify-content-center mt-5 pt-4">
                    <Col md={3} sm={12} className="left-side me-2 pt-3">
                        <div>
                            <Image
                                thumbnail
                                className="img-responsive img-rounded singleMealDetail-img w-100"
                                src={singleMealDetail[0]?.strMealThumb}
                                alt="" />
                        </div>
                        <div className="mt-3 ms-3">
                            <h4>{singleMealDetail[0]?.strMeal}</h4>
                            <div className="category-tags">
                                <p>Category : {singleMealDetail[0]?.strCategory}</p>
                                <p>Meal Area: {singleMealDetail[0]?.strArea}</p>
                                <p>Tags : {singleMealDetail[0]?.strTags}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} sm={12} className="right-side ms-3 mb-5 pb-3">
                        <div className="p-3 element ms-2">
                            <Row className="justify-content-between">
                                <Col><h4>Ingredients</h4></Col>
                                <Col><h4>Measures</h4></Col>
                                <hr />
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient1}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure1}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient2}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure2}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient3}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure3}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient4}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure4}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient5}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure5}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient6}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure6}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient7}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure7}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient8}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure8}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient9}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure9}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient10}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure10}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient11}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure11}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient12}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure12}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient13}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure13}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient14}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure14}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient15}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure15}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient16}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure16}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient17}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure17}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient18}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure18}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient19}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure19}</Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col>{singleMealDetail[0]?.strIngredient20}</Col>
                                <Col>{singleMealDetail[0]?.strMeasure20}</Col>
                            </Row>
                        </div>
                        <p className="p-3 mt-5 pb-5 description">Description :<br />{singleMealDetail[0]?.strInstructions}</p>
                        <Button className="back-button" onClick={backBtnHandler}>Back</Button>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default SingleMealDetail;