import { NavLink } from "react-router-dom";

export const HOC_comp = (Component1) => {
  const Newcomp = (props) => {
    return (
      <>
        <div className="d-flex ">
          <div className="sidebar">
            <div className="fs-3 text-center p-3">ADMIN</div>
            <div>
              <ul className="list-unstyled p-3 items">
                <NavLink to="/">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/about">
                  <li>About</li>
                </NavLink>
                <NavLink to="/dropdown">
                  <li>DropDown</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="header">
            <div className="d-flex justify-content-end p-4">
              <input type="text" placeholder="Search..." className="mx-3" />
            </div>
            <div className="p-4 fs-4">
                <Component1 {...props}/>
            </div>
          </div>
        </div>
      </>
    );
  };
  return Newcomp;
};
