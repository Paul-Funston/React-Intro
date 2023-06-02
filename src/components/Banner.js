import Button from "./components/Button";

function Banner(props){

  return (
    <div className="container">
      <Button isPrimary={false} />
      <Button isPrimary={true} />

    </div>
      
  );
  
}

export default Banner;