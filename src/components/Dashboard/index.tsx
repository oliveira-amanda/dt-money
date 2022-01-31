import { useEffect } from "react";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard () {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}