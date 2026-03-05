import "dotenv/config";
import soap from "soap";
import { SendSmsParams } from "./send-sms-params.js";
import { SendSmsResult } from "./send-sms-result.js";

const url = process.env.SMS_URL!;
const username = process.env.SMS_USERNAME!;
const password = process.env.SMS_PASSWORD!;

const args: SendSmsParams = {
  Usuario: username,
  Contraseña: password,
  NumeroCel: "3333333333",
  Mensaje: "Ejemplo mensaje",
};

try {
  const client = await soap.createClientAsync(url);
  const result = await client.EnviaSMSAsync(args);
  const response = SendSmsResult.fromStringResponse(result[0].EnviaSMSResult);
  console.log(response.toJson());
} catch (error) {
  console.error("Error in SOAP request to SMS Service:", error);
}
