import React, { useState } from "react";

const AccordionItem = ({ id, name, body, openIdHandler, openId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion-item" key={id}>
      <h2 onClick={() => {accordionHandler(), openIdHandler(id)}}>{name}</h2>
      {console.log(openId, id, isOpen)}
      { isOpen && openId === id && <p>{body}</p>}
    </div>
  );
};

export default AccordionItem;
