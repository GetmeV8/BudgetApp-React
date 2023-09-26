import Container from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";
import BudgetCard from "./components/budgetCard";
import AddBudgetModal from "./components/addBudgetModal";


function App() {
  return (
    <>
      <Container className='my-4 '>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">My Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "1rem",
          alignItems: "flex-start"
        }}
        >
          <BudgetCard name="Entertainment"
            gray
            amount={600}
            max={1000} ></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal show/>
    </>
  )
}

export default App;
