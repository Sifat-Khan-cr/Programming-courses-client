import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import ReactDOM from "react-dom";
const Premium = () => {
    const ref = React.createRef();
    const course = useLoaderData();
    const { name, id, image, info, price } = course;
    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='m-2' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <Image src={image}></Image>
                <h1>course name : {name}</h1>
                <h1>course price : ${price}</h1>

            </div>


        </div>
    );
};

export default Premium;