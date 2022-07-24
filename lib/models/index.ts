import { Prisma } from "@prisma/client";

/**
 * Model Account
 *
 */
export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  id_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  session_state: string | null;
};

/**
 * Model Session
 *
 */
export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
};

/**
 * Model User
 *
 */
export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  roles: string[];
  avatar: string | null;
};

/**
 * Model VerificationToken
 *
 */
export type VerificationToken = {
  id: string;
  identifier: string;
  token: string;
  expires: Date;
};

/**
 * Model Exercise
 *
 */
export type Exercise = {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  video: string | null;
  image: string | null;
  tags: string[];
  categories: ExerciseCategory[];
  muscles: string[];
  equipment: string[];
  difficulty: string;
};

export type ExerciseCategory =
  | "cardio"
  | "strength"
  | "balance"
  | "flexibility"
  | "other";

/**
 * Model Workout
 *
 */
export type Workout = {
  id: string;
  userId: string;
  name: string;
  description: string | null;
};
