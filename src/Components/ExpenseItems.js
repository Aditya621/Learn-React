/**
 * there are two strages of pssing data from one compentes to anoter compenets
 * one is make array of objects and pass that as a attribute on that custom components
 * and second one is : getting that attributes as props on aonther compomnents
 * props are object which are having some attribute which is called properties
 *
 */

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className=" expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
