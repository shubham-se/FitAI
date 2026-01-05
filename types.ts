
export enum FitnessGoal {
  WEIGHT_LOSS = 'Weight Loss',
  MUSCLE_GAIN = 'Muscle Gain',
  STRENGTH = 'Strength',
  GENERAL_FITNESS = 'General Fitness'
}

export enum ExperienceLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface UserData {
  age: number;
  gender: string;
  height: string;
  weight: string;
  goal: FitnessGoal;
  experience: ExperienceLevel;
  daysPerWeek: number;
  limitations: string;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

export interface DayWorkout {
  dayName: string;
  focus: string;
  duration: string;
  exercises: Exercise[];
}

export interface WorkoutPlan {
  title: string;
  summary: string;
  days: DayWorkout[];
}
