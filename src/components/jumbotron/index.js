const Jumbotron = ( {children} ) => {
    return(
        <div className="bg-light rounded-3 border-5 col-10 mx-auto mt-5 border border-dark p-2 border-opacity-10">
            <div className="container-fluid py-5">
                {children}
            </div>
        </div>
    ) 
}
      
      export default Jumbotron; 