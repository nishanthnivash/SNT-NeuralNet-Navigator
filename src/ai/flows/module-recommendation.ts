'use server';

/**
 * @fileOverview Provides personalized module recommendations based on user progress and learning history.
 *
 * - getModuleRecommendations - A function that returns a list of recommended modules for a given user.
 * - ModuleRecommendationInput - The input type for the getModuleRecommendations function.
 * - ModuleRecommendationOutput - The return type for the getModuleRecommendations function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ModuleRecommendationInputSchema = z.object({
  userProgress: z
    .string()
    .describe(
      'A JSON array containing the learning modules that the user has engaged with, and their progress (percentage completed) in each module. Example: `[ {\