/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
} from "shards-react";
import WrapperBatch from "../components/batch/WrapperBatch";
import PageTitle from "../components/common/PageTitle";


const BatchesDashboard = () => {
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Lotes" subtitle="Panel" className="text-sm-left" />
      </Row>
      <WrapperBatch />
    </Container>
  );
};

export default BatchesDashboard;
