function SolutionItem(props){
    return (
        <div className="swiper-slide h-auto">
            <div className="card h-100">
                <div className="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                    <img src={props.item.image} alt={props.item.title} className="d-block mb-3 mx-auto" />
                    <h3 className="h5 mb-3">{props.item.title}</h3>
                    <p className="mb-0">{props.item.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SolutionItem;