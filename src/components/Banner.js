import Button from "./Button";

function Banner(){

  return (
    <section>
      <div className="container pt-5 pb-5 text-center">
        <div className="row ">
        <div className="col">
          <h2>Be Creative</h2>
        </div>
        </div>
        <div className="row ">
        <div className="col">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
          </p>
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