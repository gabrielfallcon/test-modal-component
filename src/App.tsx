import { useState } from 'react';

import { Modal } from './components';

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <button onClick={() => setModalActive(true)}>
        Abrir Modal
      </button>

      <Modal
        active={modalActive} 
        handleClose={() => setModalActive(false)}
      >
        <table className="table-frete-gratis">
          <tbody>
              <tr>
              <th>
              Região</th>
            <th>
              Compras a partir de</th>
            </tr>
            <tr>
              <td>
              Sudeste (capitais e regiões metropolitanas)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (interior e litoral)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sul</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Centro-Oeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Nordeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Norte</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (capitais e regiões metropolitanas)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (interior e litoral)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sul</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Centro-Oeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Nordeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Norte</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (capitais e regiões metropolitanas)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (interior e litoral)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sul</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Centro-Oeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Nordeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Norte</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (capitais e regiões metropolitanas)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (interior e litoral)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sul</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Centro-Oeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Nordeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Norte</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (capitais e regiões metropolitanas)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sudeste (interior e litoral)</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Sul</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Centro-Oeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Nordeste</td>
            <td>
              R$ 99,90</td>
            </tr>
            <tr>
              <td>
              Norte</td>
            <td>
              R$ 99,90</td>
            </tr>
            </tbody>
          </table>
      </Modal>
    </>
  );
}

export default App;
