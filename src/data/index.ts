import {
  Source,
  Destination,
  Function,
  Shortcut,
  Documentation,
} from "../types";
import { mockSources } from "./sources";
import { mockDestinations } from "./destinations";
import { mockFunctions } from "./functions";
import { mockShortcuts } from "./shortcuts";
import { mockDocumentation } from "./documentation";

export type Item = Source | Destination | Function | Shortcut | Documentation;

const mockData: Item[] = [
  ...mockSources,
  ...mockFunctions,
  ...mockDestinations,
  ...mockDocumentation,
  ...mockShortcuts,
];

export default mockData;
