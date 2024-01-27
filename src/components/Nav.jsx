import Hand from "../assets/Hand.svg";

const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <div>
            <p>Hello {props.user}</p>
            <img src={Hand} alt="Hand.svg" />
          </div>
        </li>
        <li>
          <a>HCMatrix Help Center</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
