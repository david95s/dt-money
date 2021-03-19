import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

interface openDeleteTransationModalProps{
  openDeleteModal: (id:string)=> void;
}

export function DashBoard({openDeleteModal}:openDeleteTransationModalProps){
  return (
    <Container>
      <Summary/>
      <TransactionsTable openDeleteModal={openDeleteModal} />
    </Container>
  );
}