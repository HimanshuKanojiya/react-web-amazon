import React from "react";
import { amazonIcons } from "assets/icons";
import { ErrorContainer } from "components/styles/UI States/ErrorContainer";

export const Error: React.FC<DefaultErrorProps> = ({ title, issueText }) => {
  const { ErrorAlertIcon } = amazonIcons;

  return (
    <ErrorContainer>
      <div className="error-state-icon">
        <ErrorAlertIcon />
      </div>
      <div className="error-state-reason">
        <p className="error-state-title">{title}</p>
        <p className="error-state-issue">{issueText}</p>
      </div>
    </ErrorContainer>
  );
};
