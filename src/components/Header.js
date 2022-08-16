import React from "react";
import { useState, useEffect } from "react";



const Header = props => {
    const [headerIsChanged, setHeaderIsChanged] = useState('Hobbies');

    useEffect(() => {
        props.navigation.setOptions({
            title: headerIsChanged,
        });
    }, [headerIsChanged]);

};

const changeHeader = (event) => {
    setHeaderIsChanged(event.target.value);
};

return (
    <div className="header">

    </div>
)