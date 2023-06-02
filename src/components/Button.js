function Button(props){
  let className = props.isPrimary ? "btn-primary": "btn-outline-primary";
  className = "btn " + className;

  let btnText = props.isPrimary ? "Primary" : "Secondary";

  return (
    <div className="container">
      <button className={className}>
        {btnText}
      </button>
    </div>
  );
}

export default Button;