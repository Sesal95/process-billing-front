import React from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
} from "shards-react";
import { useQuery, gql } from "@apollo/client";

const GET_INFO_BATCH_BY_ID = gql`
query GetBatchById($input: getBatchByIdInput!) {
    getBatchById(input: $input) {
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
      SizeColorBatches {
        id
        id_batch
        id_color
        id_size
        total_amount
        total_lost
        Color {
          id
          color_name
        }
        Size {
          id
          size_character
        }
      }
      BatchBillProcesses {
        id
        id_batch
        id_steps_ref
        price_to_get
        price_to_pay
        OperatorBillProcesses {
          id
          id_op
          id_batch_bill
          total_units_worked
          status
          Operator {
            id
            dni
            name
            last_name
          }
        }
        StepsReference {
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

const InfoBatch = ({idBatch}) => {
    const { loading, error, data } = useQuery(GET_INFO_BATCH_BY_ID, {
        variables: {
            input: {
              id: idBatch
            }
          }
    });

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    return (
        <Row>
            {console.log(data.getBatchById)}
            {data.getBatchById.map(({ id }) => (
                <Col lg="4" key={id}>
                    <Card small className="card-post mb-4">
                        <CardBody>
                        </CardBody>
                        <CardFooter className="border-top d-flex">
                        </CardFooter>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default InfoBatch;
