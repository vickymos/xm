import React, { useEffect, useState } from "react";
import { endpoints } from "../config";
import "../burgerMaker.css";
import { Heading } from "../components/tags/heading";
import { useNavigate } from 'react-router-dom';
import { XmToken } from "../App";

const BurgerMaker = () => {

    const xmToken: XmToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("xmTokenLocalKey")!) || {} : {};

    const [burgerData, setBurgerData] = useState<burgerDataProps[]>([]);

    const [selectedIngredients, setSelectedIngredients] = useState<burgerDataProps[]>(() => {
        if (typeof window !== "undefined")
            return (
                JSON.parse(localStorage.getItem("selectedIngredientsLocalKey")!) || []
            );
        else return {};
    });

    const token = xmToken?.token;

    let navigate = useNavigate();

    useEffect(() => {

        const getBurgerData = async () => {

            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const burgerDataFetched = await fetch(
                endpoints.ingredients,
                requestOptions
            );

            if (burgerDataFetched.status !== 200) {
                /**
                user(possibly) has no longer a valid token
                will redirect to login page
                and remove the stored token 
                */

                navigate('/login');

                if (typeof window !== "undefined")
                    window.localStorage.removeItem("xmTokenLocalKey");
            }
            else {
                const burgerDataCollection: burgerDataProps[] = await burgerDataFetched.json();
                setBurgerData(burgerDataCollection);
            }

        };
        getBurgerData();
    }, [token, navigate]);

    useEffect(() => {
        localStorage.setItem(
            "selectedIngredientsLocalKey",
            JSON.stringify(selectedIngredients)
        );
    }, [selectedIngredients]);

    type burgerDataProps = {
        id: Number;
        name: string;
        src: string;
    };

    const ingredients: burgerDataProps[] = burgerData;

    const handleAddition = (ingredient: burgerDataProps) => {
        setSelectedIngredients((selectedIngredients) => [...selectedIngredients, ingredient]);
    };

    const handleRemoval = (ingredient: burgerDataProps, index: number) => {
        setSelectedIngredients((selectedIngredients) => [...selectedIngredients, ingredient]);

        const updatedIngredients = [...selectedIngredients];

        updatedIngredients.splice(index, 1);

        setSelectedIngredients(updatedIngredients);
    };

    return (
        <>
            <Heading element="h1" className="mt-0 mb-8 h1">
                Let's make a delicious burger
            </Heading>

            <Heading element="h2" className="mt-0 mb-8 h2 font-medium">
                Pick your favourite ingredients from the list to get started
            </Heading>

            <div className="burger mt-48 mb-48">
                {!ingredients ? null : (
                    <ul className="burger__ingredient-list bg-white p-24 rounded-lg">
                        {ingredients.map((ingredient, index) => {
                            return (
                                <li key={index} onClick={() => handleAddition(ingredient)}>
                                    <span>
                                        {ingredient?.name}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                )}

                {(selectedIngredients && ingredients) ? (
                    <ul className="burger__composition flex flex-col items-center bg-white p-24 rounded-lg">

                        <li className="burger__composition__top-bun">
                            <img src={`${endpoints.image}bun_top.png`} alt={`top bun`} />
                        </li>

                        <li>
                            <ul className="burger__ingredients flex flex-col-reverse">
                                {selectedIngredients.map((ingredient, index) => {
                                    return (
                                        <li key={index} onClick={() => handleRemoval(ingredient, index)} >
                                            <img
                                                src={`${endpoints.image}${ingredient.src}`}
                                                alt={`${ingredient?.name}`}
                                                title="click to remove"
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>

                        <li className="burger__composition__bottom-bun">
                            <img src={`${endpoints.image}bun_bottom.png`} alt={`bottom bun`}
                            />
                        </li>

                    </ul>

                ) : null}

                <div className="note">
                    {(selectedIngredients && selectedIngredients.length < 7) ? null : `Ok, you might be overdoing it now`}
                </div>

                <button type="submit" className="button button--primary" disabled={(selectedIngredients && selectedIngredients.length === 0) ? true : false}>
                    Proceed to checkout
                </button>

            </div>

        </>
    );
};

export default BurgerMaker;
