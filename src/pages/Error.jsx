import Header from "../components/UI/Header";

function ErrorPage(){
    return (
        <div>
            <Header />
            <main>
                <h1>An error occured!</h1>
                <p>Could not find this page!</p>
            </main>
        </div>
    )
}

export default ErrorPage;