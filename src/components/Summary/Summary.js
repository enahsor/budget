import { Container, Column, Row, Title, Money } from "./lib";

const Summary = ({ income, expense, ...props }) => {
  return (
    <Container>
      <Column>
        <Title>Total Balance</Title>
        <Money size={5}>{income - expense}</Money>
      </Column>
      <Column>
        <Row>
          <Title>Income</Title>
          <Money type="income">{income}</Money>
        </Row>
        <Row>
          <Title>Expense</Title>
          <Money type="expense">{expense}</Money>
        </Row>
      </Column>
    </Container>
  );
};

export default Summary;
