function Gallery(props){
  return (
    <section className="bg-light my-5">
      <div className="container">
        <div className="row g-5">
          {props.urls.map((url, idx) => {
            return(
            <div className="col-xl-3 col-md-6 col-sm-12" key={idx}>
              <div className="card">
                <img className="card-img" src={url} />
              </div>
            </div>
          )
          })}
        </div>

      </div>
    </section>
  );
}

export default Gallery;