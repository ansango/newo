// Ids

type UserId = ObjectId | string;
type ExerciseId = ObjectId | string;
type WorkoutId = ObjectId | string;
type ActivityId = ObjectId | string;
type TokenId = ObjectId | string;

// Generics

type Name = string;
type Img = string;
type Video = string;
type Description = string;
type Category = string;
type Tag = string;

// User & Account

type Username = string;
type FirstName = string;
type LastName = string;
type Email = string;
type Url = string;
type Password = string;
type Phone = string;
type Birthday = string;
type City = string;
type Zip = string;
type Country = string;
type CompanyName = Name;

// Muscle

type MuscleName = Name;
type MuscleDescription = Description;

// Exercise

type ExerciseName = Name;
type ExerciseDescription = Description;
type ExerciseVideo = Video;
type ExerciseImg = Img;
type ExerciseCategory = Category;
type ExerciseDifficulty = "easy" | "medium" | "hard";
type ExerciseEquipment = string;
type ExerciseMuscle = MuscleName;

// Workout

type WorkoutName = Name;
type WorkoutDescription = Description;
