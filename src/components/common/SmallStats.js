import React from "react";
import classNames from "classnames";
import { Card, CardBody } from "shards-react";

const References = (props) => {
  const { label, steps } = props;

  const cardClasses = classNames(
    "stats-small",
  );

  const cardBodyClasses = classNames(
    "px-0 pb-0"
  );

  const innerWrapperClasses = classNames(
    "d-flex",
    "px-3"
  );

  const dataFieldClasses = classNames(
    "stats-small__data",
  );

  const labelClasses = classNames(
    "stats-small__label",
    "text-uppercase",
  );

  const valueClasses = classNames(
    "stats-small__value",
    "count",
    "p-2"
  );

  return (
    <Card small className={cardClasses}>
      <CardBody className={cardBodyClasses}>
        <div className={innerWrapperClasses}>
          <div className={dataFieldClasses}>
            <div className="mb-2">
              <span className={labelClasses}>{label}</span>
            </div>
            <div>
              <h6 className={valueClasses}>Pasos: {steps}</h6>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default References;
