import { gql, useQuery } from "@apollo/client";
import Example from "./components/example";

function App() {
  const { loading, error, data, refetch } = useQuery(gql`
    query Todos {
      todos {
        id
        text
        done
        user {
          id
          name
        }
      }
    }
  `);

  return (
    <>
      <Example />
    </>
  );
}

export default App;
