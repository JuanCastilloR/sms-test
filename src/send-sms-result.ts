export class SendSmsResult {
  public readonly success: boolean;
  public readonly responseCode: string;
  public readonly responseMessage: string;
  public readonly transactionId: string;

  constructor(
    responseCode: string,
    responseMessage: string,
    transactionId: string
  ) {
    this.transactionId = transactionId;
    this.success = responseCode === "00";
    this.responseCode = responseCode;
    this.responseMessage = responseMessage;
  }

  static fromStringResponse(response: string): SendSmsResult {
    const [responseCode, responseMessage, transactionId] = response.split("|");
    return new SendSmsResult(responseCode, responseMessage, transactionId);
  }

  toString(): string {
    return (
      `Success: ${this.success}, Response Code: ${this.responseCode}, ` +
      `Response Message: ${this.responseMessage}, Transaction ID: ${this.transactionId}`
    );
  }

  toJson() {
    return {
      success: this.success,
      responseCode: this.responseCode,
      responseMessage: this.responseMessage,
      transactionId: this.transactionId,
    };
  }
}
