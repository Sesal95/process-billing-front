/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
} from "shards-react";
import AllBatches from "./AllBatches";


const WrapperBatch = () => {
  return (
    <Container fluid className="main-content-container px-4">
      <AllBatches />
    </Container>
  );
};

export default WrapperBatch;