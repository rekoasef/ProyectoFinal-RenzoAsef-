const Loading = () =>{
    return(
        <div className="container my-5 d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col">
                    <div className="spinner-border text-secondary" role="status">
                         <span className="visually-hidden">Loading...</span>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;