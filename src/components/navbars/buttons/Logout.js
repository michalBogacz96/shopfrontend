import React, {useContext} from "react";
import {AppContext} from "../../../appContext/AppContext";


const Logout = () => {

    const { setUserContext } = useContext(AppContext);


  return (
      <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
              onClick={() => {
                  setUserContext(null, null, false);
                  window.location.href = "/";
              }
              }
      >Wyloguj
      </button>
  )

}

export default Logout
