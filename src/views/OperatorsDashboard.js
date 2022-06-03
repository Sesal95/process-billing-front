import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_OPERATORS = gql`
  query GetAllOperators {
    getAllOperators {
      id
      dni
      name
      last_name
      total_week
    }
  }
`

const OperatorsDashboard = () => {
  const { loading, error, data } = useQuery(GET_ALL_OPERATORS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;
  return (

    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Operadores" subtitle="Panel" className="text-sm-left" />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Operadores</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      CC
                    </th>
                    <th scope="col" className="border-0">
                      Nombre
                    </th>
                    <th scope="col" className="border-0">
                      Apellido
                    </th>
                    <th scope="col" className="border-0">
                      Meta Semanal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.getAllOperators.map((ops) => (
                    <tr>
                    <td>{ops.dni}</td>
                    <td>{ops.name}</td>
                    <td>{ops.lastName}</td>
                    <td>{ops.total_week} / 360000</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OperatorsDashboard;
