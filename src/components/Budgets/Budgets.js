import Budget from "components/Budget";
import { Wrapper } from "./lib";

const Budgets = (props) => {
  const budgets = [
    { id: 1, name: "Budget 1", income: 666, date: "09/08" },
    { id: 2, name: "Budget 2", income: 555, date: "10/21" },
    { id: 3, name: "Budget 3", income: 1000, date: "11/22" },
  ];

  return (
    <Wrapper>
      {budgets.map((budget) => (
        <Budget key={budget.id} data={budget} />
      ))}
    </Wrapper>
  );
};

export default Budgets;
