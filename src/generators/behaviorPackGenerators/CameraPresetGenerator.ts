import { BaseGenerator, type File } from '~/main';
import { json2buf } from '~/utils/jsonUtils';
import type { CameraPreset } from '../../types/generated/behavior/cameras';

export class CameraPresetGenerator extends BaseGenerator {
  public cameraFile: CameraPreset;

  constructor(
    public fileName: string,
    formatVersion: string
  ) {
    super();

    this.cameraFile = {
      format_version: formatVersion,
      'minecraft:camera_preset': {},
    };
  }

  async build(): Promise<File[]> {
    return [
      {
        content: json2buf(this.cameraFile),
        path: `behavior_pack/cameras/presets/${this.fileName}.json`,
      },
    ];
  }
}
