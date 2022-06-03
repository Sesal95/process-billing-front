import React from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
} from "shards-react";
import { useQuery, gql } from "@apollo/client";

const statusEnum = {
    IN_PROGRESS: "En progreso",
    DONE: "Terminado",
    TO_BILL: "Para facturar",
    TO_START: "Para comenzar"
}

const GET_ALL_BATCHES_BY_STATUS = gql`
query GetAllBatchesByStatus($input: BatchByStatus) {
  getAllBatchesByStatus(input: $input) {
    id
    id_ref
    name
    status
    amount
    start_date
    end_date
    Reference {
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
}
`

const AllBatches = () => {
    const { loading, error, data } = useQuery(GET_ALL_BATCHES_BY_STATUS, {
        variables: {
            input: {
                status: "IN_PROGRESS"
            }
        }
    });

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    return (
        <Row>
            {data.getAllBatchesByStatus.map(({ id, name, status, amount, Reference }) => (
                <Col lg="4" key={id}>
                    <Card small className="card-post mb-4">
                        <CardBody>
                            <h5 className="card-title">{Reference.type}</h5>
                            <p className="card-text text-muted">{name}</p>
                        </CardBody>
                        <CardFooter className="border-top d-flex">
                            <div className="card-post__author d-flex">
                                <div className="d-flex flex-column justify-content-center ml-3">
                                    <span className="card-post__author-name">
                                        Total de unidades: {amount}
                                    </span>
                                    <small className="text-muted">Estado: {statusEnum[status]}</small>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default AllBatches;
