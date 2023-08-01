import { Fragment } from "react";
import About from "../components/UI/Home/About";
import Hero from "../components/UI/Home/Hero";
import Industries from "../components/UI/Home/Industries";
import Solution from "../components/UI/Solution";

function HomePage(){
    return (
        <Fragment>
            <Hero />
            <About />
            <Solution />
            <Industries />
        </Fragment>
    );
}

export default HomePage;