export class AcceptUserAgreementRequest {
  public agreementAcceptUrl: string;
}

export class AcceptUserAgreementResponse {
  public isAccepted: boolean;
}

export class GetUserAgreementRequest {
}

export class GetUserAgreementResponse {
  public isAuthorized: boolean;
  public remainingDocumentUrlToAccept: string;
  public remainingDocumentUrlToDownload: string;
  public userAccessDeniedReasonId: number;
  public userAccessDeniedReasonMessage: string
}
