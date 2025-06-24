
const Burger = ({active, toggleMenu}) => {
  return (
    <button className={"burger"+" "+(active?"burger__open":"")} type="button" 
    onClick={toggleMenu}>
      <div className={"burger__line"}></div>
      <div className={"burger__line"}></div>
      <div className={"burger__line"}></div>
    </button>
  );
};

export default Burger;


