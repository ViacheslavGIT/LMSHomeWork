import { useState } from "react";
import './style.css'

const mockData = [
  { quwestion: "I tried to place an order through the App but was unable to complete the transaction. How can I get my order fulfilled?", 
    answer: "Please visit erba.com/crowncard for more details on your Crown Card balance and account information." },
  { quwestion: "I would like to check the balance of my Crown Card.", 
    answer: "We look forward to reviewing your application! Please visit careers.erba.com or contact one of our restaurant locations here to apply: erba.com/store-locator" },
  { quwestion: "I would like to apply to a position at Extrime Retro Burger . How can I do this?", 
    answer: "Please visit bk.com/nutrition for more details on nutritional information for Extreme Retro Burger products." },
  { quwestion: "Where is the nearest Extreme Retro Burger location? What are the restaurant's hours?", 
    answer: "Please find your nearest Extreme Retro Burger and its hours of operation here: erba.com/store-locator" },
  { quwestion: "Is a Whopper a burger?", 
    answer: "Yup, it's a burger built for you and JUST you. The Whopper is crafted only at Extreme Retro Burger to satisfy Your Way no matter what." },
];

const FAQ = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const togleAcordionItem = (index) => {
    if (selectedItem === index) {
      return setSelectedItem(null);
    }
    setSelectedItem(index);
  };

  return (
    <div className="acordion-wrapper">
      <div className="acordion">
        {mockData.map((item, index) => {
          return (
            <div className="item" key={index} onClick={() => togleAcordionItem(index)}>
              <div className={selectedItem === index ? "title-show" : "title"} >
                {item.quwestion}
                <span className="acordion-indicator">{selectedItem === index ? "▲" : "▼"}</span>
              </div>
              <div
                className={selectedItem === index ? "content-show" : "content"}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
