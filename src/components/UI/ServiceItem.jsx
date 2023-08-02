import { Link } from "react-router-dom";

function ServiceItem(props) {
    return (
        <Link to="/" className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
            <div className="card-body pt-3">
                <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                    <img src={props.item.image} className="d-block m-1" width="40" alt="Icon" />
                </div>
                <h2 className="h4 d-inline-flex align-items-center">
                    {props.item.title}
                    <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                </h2>
                <p className="fs-sm text-body mb-0">{props.item.description}</p>
            </div>
        </Link>
    );
}

export default ServiceItem;