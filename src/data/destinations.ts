import { Destination } from "../types";

export const mockDestinations: Destination[] = [
  {
    category: "destination",
    imgUrl: "https://cdn.filepicker.io/api/file/R1EKddJ1SnGECiHtdUlY",
    name: "Prod S3 Bucket",
    connectedTo: {
      name: "android-test-source",
    },
  },
  {
    category: "destination",
    imgUrl: "https://cdn.filepicker.io/api/file/R1EKddJ1SnGECiHtdUlY",
    name: "Stage Analytics test",
    connectedTo: {
      name: "android-test-source",
    },
  },
  {
    category: "destination",
    imgUrl: "https://cdn.filepicker.io/api/file/FBoLevGrQECujcvAjU9g",
    name: "Messaging Webhook",
    connectedTo: {
      name: "Testing Playground [DEV]",
    },
  },
  {
    category: "destination",
    imgUrl: "https://cdn.filepicker.io/api/file/Nmj7LgOQR62rdAmlbnLO",
    name: "Amplitude",
    connectedTo: {
      name: "Testing Playground [DEV]",
    },
  },
];
