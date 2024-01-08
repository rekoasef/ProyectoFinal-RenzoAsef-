const ItemListContainer = ({ greeting }) =>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-11">
                    <div className="alert alert-warning d-flex align-items-center justify-content-center fs-3 p-5" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>
        </div>

        
    )
}
 export default ItemListContainer;