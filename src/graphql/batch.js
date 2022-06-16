import { gql } from "@apollo/client";

export const GET_ALL_BATCHES_BY_STATUS = gql`
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
export const GET_BATCH_BY_ID = gql`
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
      }
      SizeColorBatches {
        id_batch
        id
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
