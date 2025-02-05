import * as logger from '../../utils/logger';
import { Preset } from './Preset';
import { ReactPreset } from './react/ReactPreset';
import { SolidPreset } from './solid/SolidPreset';
debugger
const PRESET_MAP: Map<string, Preset> = new Map([
  ['react', new ReactPreset()],
  ['solid', new SolidPreset()],
]);

export function getPreset(presetName: string): Preset {
  debugger
  const foundPreset = PRESET_MAP.get(presetName);
  if (!foundPreset) {
    logger.warn(`Unknown preset ${presetName}, falling back to React`);
    return new ReactPreset();
  }
  return foundPreset;
}
