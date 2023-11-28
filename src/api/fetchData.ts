import axios from "axios";
import { DataModel } from "./DataModel";

export default async function fetchData(
  url: string
): Promise<DataModel | null | undefined> {
  try {
    const response = await axios.post(
      `https://chapbuy.com/social-downloader/social-downloader/pinterest`,
      {
        url: url,
      }
    );
    const data = await response.data;

    return data;
  } catch (err) {
    console.log("Error in fetching data=>"+url);
    return null;
  }
}

interface SendEmailModel {
  firstName: string | undefined;
  lastName: string | undefined;
  subject: string | undefined;
  email: string | undefined;
  message: string | undefined;
}

export async function sendEmail({
  firstName,
  lastName,
  subject,
  email,
  message,
}: SendEmailModel): Promise<boolean> {
  var bodyData={
    firstName: firstName,
    lastName: lastName,
    subject: subject,
    email: email,
    message: message,
  };
  console.log(JSON.stringify(bodyData));
  try {
    
    const response = await axios.post(
      "https://chapbuy.com/social-downloader/social-downloader/contact-us",
      bodyData,
    );

    const data = await response.data;
    console.log(data);

    return true;
  } catch (err) {
   
    // console.log(err);
    return false;
  }
}
