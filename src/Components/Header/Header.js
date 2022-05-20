import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row, Spinner } from 'react-bootstrap';
import HeaderImg from '../../Assets/headerImg.png'
import MealDetail from '../MealDetail/MealDetail';
import './Header.css'

const Header = () => {

    const [searchText, setSearchText] = useState('');
    //input search text
    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }
    // search button
    const handleSearchButton = (e) => {
        //console.log(searchText || 'null');
    }

    // load random meal data
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    return (
        <div className="meal-container">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Recipe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">List</Nav.Link>
                        </Nav>
                        <Form onChange={handleSearchText} className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button onClick={handleSearchButton} variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {meals.length === 0 &&
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
            {meals.length !== 0 &&
                <div>
                    <Container fluid className="header">
                        <Container>
                            <Row className="justify-content-center align-items-center">
                                <Col>
                                    <h4>Yummy Recipes</h4>
                                    <p>we have a lot of yummy recipes from all<br />aruond the world.</p>
                                    <button className="recipe-list-btn"><a href="#recipes">See Recipes</a></button>
                                </Col>
                                <Col className="header-col">
                                    <img src={HeaderImg} alt="" />
                                </Col>
                            </Row>
                        </Container>
                    </Container>

                    <Container className="mt-5 mb-5">
                        <h2 id="recipes" className="text-center mb-5">Recipes</h2>
                        <Row className="justify-content-center">
                            {meals?.map(meal => <MealDetail key={meal.idMeal} meal={meal} />)}
                        </Row>
                    </Container>
                </div>
            }

        </div>
    );
};

export default Header;