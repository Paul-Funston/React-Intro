import Button from "./Button";

function Banner(props){

  return (
    <section className="bg-white">
      <div className="container pt-5 pb-5 text-center">
        <div className="row ">
          <div className="col">
            <h2>{props.title}</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <p> {props.text} </p>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <div className="btn-group">
              <Button isPrimary={false} />
              <Button isPrimary={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;