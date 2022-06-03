import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import References from "../components/common/SmallStats";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_REFERENCES = gql`
  query GetAllReferences {
    getAllReferences {
      id
      type
      StepsReferences {
        id
        id_ref
        id_step
        steps_order
        Step {
          id
          description
        }
      }
    }
  }
`;

const ReferencesDashBoard = () => {
  const { loading, error, data } = useQuery(GET_ALL_REFERENCES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="Referencias" subtitle="Panel" className="text-sm-left mb-3" />
      </Row>
      <Row>
        {data.getAllReferences.map((refs) => (
          <Col lg="4" md="6" sm="12" className="mb-4" key={refs.id} {...refs}>
            <References
              id={refs.id}
              label={refs.type}
              steps={refs.StepsReferences.length}
              data={refs}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReferencesDashBoard;
