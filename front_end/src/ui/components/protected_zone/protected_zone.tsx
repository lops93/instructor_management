import React from "react";
import { Content } from "./protected_zone.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const ProtectedZone = () => {
  return (
    <Content>
      Site Seguro <FontAwesomeIcon icon={faLock} />
    </Content>
  );
};

export default ProtectedZone;
