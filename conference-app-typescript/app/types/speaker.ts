// export interface Speaker  {
//   id: number;
//   firstName: string;
//   lastName: string;
//   sat: boolean;
//   sun: boolean;
//   favorite: boolean;
//   bio: string;
//   company: string;
//   twitterHandle: string;
//   userBioShort: string;
//   imageUrl: string;
//   email: string;
// }

import { z } from "zod";

export const speakerSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  sat: z.boolean(),
  sun: z.boolean(),
  favorite: z.boolean(),
  bio: z.string(),
  company: z.string(),
  twitterHandle: z.string(),
  userBioShort: z.string(),
  imageUrl: z.string(),
  email: z.string(),
});

//export interface Speaker extends z.infer<typeof speakerSchema> {}

export type Speaker = z.infer<typeof speakerSchema>;
