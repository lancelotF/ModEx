/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This defines the current version of the manifest. Don't change this unless you have a good reason to
 */
export type FormatVersion = number;
/**
 * These are the different features that the pack makes use of that aren't necessarily enabled by default.
 */
export type Capabilities =
  | [
      "raytraced" | "pbr" | "script_eval" | "editorExtension" | "experimental_custom_ui" | "chemistry",
      ...("raytraced" | "pbr" | "script_eval" | "editorExtension" | "experimental_custom_ui" | "chemistry")[]
    ]
  | {
      chemistry?: Chemistry;
      editorExtension?: EditorExtension;
      experimental_custom_ui?: ExperimentalCustomUi;
      raytraced?: Raytraced;
      [k: string]: unknown;
    };
/**
 * Allows the pack to add, change or replace Chemistry functionality.
 */
export type Chemistry = boolean;
/**
 * Indicates that this pack contains extensions for editing.
 */
export type EditorExtension = boolean;
/**
 * Allows HTML files in the pack to be used for custom UI, and scripts in the pack to call and manipulate custom UI.
 */
export type ExperimentalCustomUi = boolean;
/**
 * Indicates that this pack contains Raytracing Enhanced or Physical Based Materials for rendering.
 */
export type Raytraced = boolean;
/**
 * This is the unique identifier of the pack that this pack depends on. It needs to be the exact same UUID that the pack has defined in the header section of it's manifest file
 */
export type Uuid = string;
/**
 * This is the specific version of the pack that your pack depends on. Should match the version the other pack has in its manifest file
 */
export type Version = VersionNumbering | FormatVersion1;
/**
 * A version made of 3 numbers.
 */
export type VersionNumbering = [] | [number] | [number, Major] | [number, Major, Minor];
export type Major = number;
export type Minor = number;
/**
 * A version that tells minecraft what type of data format can be expected when reading this file.
 */
export type FormatVersion1 = string;
/**
 * This is the name of the module that this pack depends on.
 */
export type ModuleName = string;
/**
 * This is the specific version of the module that your pack depends on.
 */
export type Version1 = string;
/**
 * Section containing definitions for any other packs or modules that are required in order for this manifest.json file to work.
 */
export type Dependencies = (Dependency | Dependency1)[];
/**
 * This option is required for any world templates. This will allow the player to use a random seed when creating a new world from your template.
 */
export type AllowRandomSeed = boolean;
/**
 * A version made of 3 numbers.
 */
export type VersionNumbering1 = [] | [number] | [number, Major] | [number, Major, Minor];
/**
 * This is a short description of the pack. It will appear in the game below the name of the pack. We recommend keeping it to 1-2 lines.
 */
export type Description = string;
/**
 * This option is required for any world templates. This will lock the player from modifying the options of the world.
 */
export type LockTemplateOptions = boolean;
/**
 * A version made of 3 numbers.
 */
export type VersionNumbering2 = [] | [number] | [number, Major] | [number, Major, Minor];
/**
 * This is the name of the pack as it appears within Minecraft. This is a required field.
 */
export type Name = string;
/**
 * This is the scope of the pack. This is only for resource packs
 */
export type PackScope = "global" | "world" | "any";
/**
 * This is a special type of identifier that uniquely identifies this pack from any other pack. UUIDs are written in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx where each x is a hexadecimal value (0-9 or a-f). We recommend using an online service to generate this and guarantee their uniqueness (just bing UUID Generator to find some)
 */
export type UUID = string;
/**
 * This is the version of your pack in the format [majorVersion, minorVersion, revision].
 */
export type Version2 = VersionNumbering | SemanticVersion;
/**
 * A semver.org compliant version number.
 */
export type SemanticVersion = string;
/**
 * This is a short description of the module. This is not user-facing at the moment but is a good place to remind yourself why the module is defined
 */
export type Description1 = string;
/**
 * This is the type of the module.
 */
export type Type = "resources" | "data" | "client_data" | "interface" | "world_template" | "javascript" | "script";
/**
 * The programming language to use.
 */
export type Language = "javascript" | "Javascript";
/**
 * This is a unique identifier for the module in the same format as the pack's UUID in the header. This should be different from the pack's UUID, and different for every module
 */
export type Uuid1 = string;
/**
 * This is the version of your pack in the format [majorVersion, minorVersion, revision]. The version number is used when importing a pack that has been imported before. The new pack will replace the old one if the version is higher, and ignored if it's the same or lower
 */
export type Version3 = VersionNumbering | SemanticVersion;
/**
 * The javascript entry point for tests, only works if types has been set to `javascript`.
 */
export type Entry = string;
/**
 * Section containing information regarding the type of content that is being brought in.
 */
export type Modules = Module[];
/**
 * Name of the author of the pack.
 */
export type Name1 = string;
/**
 * Name of the author(s) of the pack.
 */
export type Authors = Name1[];
/**
 * A semver.org compliant version number.
 */
export type SemanticVersion1 = string;
/**
 * The tool and the version used to modified this pack.
 */
export type Tool = SemanticVersion1[];
/**
 * The license of the pack.
 */
export type License = string;
/**
 * The type of product this pack is. This is used to determine how the pack is displayed in the store.
 */
export type ProductType = "" | "addon";
/**
 * The home website of your pack.
 */
export type Url = string;
/**
 * This represents the folder name located in "subpacks" folder. When user select this resolution Minecraft loads the content inside the folder.
 */
export type FolderName = string;
/**
 * This is the name of the pack resolution. This lets user know what resolution they are choosing.
 */
export type Name2 = string;
/**
 * This creates a requirement on the capacity of memory needed to select the resolution. Each tier increases memory requirement by 256 MB.
 */
export type MemoryTier = number;
/**
 * A list of subpacks that are applied per memory tier.
 */
export type Subpacks = Subpacks1[];

/**
 * The manifest file contains all the basic information about the pack that Minecraft needs to identify it. The tables below contain all the components of the manifest, their individual properties, and what they mean.
 */
export interface ManifestV2Schema {
  format_version: FormatVersion;
  capabilities?: Capabilities;
  dependencies?: Dependencies;
  header: Header;
  modules?: Modules;
  metadata?: Metadata;
  subpacks?: Subpacks;
}
/**
 * Section containing definitions for any other packs that are required in order for this manifest.json file to work.
 */
export interface Dependency {
  uuid?: Uuid;
  version?: Version;
}
/**
 * Section containing definitions for any other packs or modules that are required in order for this manifest.json file to work.
 */
export interface Dependency1 {
  module_name?: ModuleName;
  version?: Version1;
}
/**
 * Section containing information regarding the name of the pack, description, and other features that are public facing.
 */
export interface Header {
  allow_random_seed?: AllowRandomSeed;
  base_game_version?: VersionNumbering1;
  description: Description;
  lock_template_options?: LockTemplateOptions;
  min_engine_version?: VersionNumbering2;
  name: Name;
  pack_scope?: PackScope;
  uuid: UUID;
  version: Version2;
  [k: string]: unknown;
}
/**
 * Section containing information regarding the type of content that is being brought in.
 */
export interface Module {
  description?: Description1;
  type: Type;
  language?: Language;
  uuid: Uuid1;
  version: Version3;
  entry?: Entry;
}
/**
 * Section containing the metadata about the file such as authors and licensing information.
 */
export interface Metadata {
  authors?: Authors;
  generated_with?: GeneratedWith;
  license?: License;
  product_type?: ProductType;
  url?: Url;
}
/**
 * A list of tools and their version that have modified this pack.
 */
export interface GeneratedWith {
  [k: string]: Tool;
}
/**
 * A single definition of a subpack.
 */
export interface Subpacks1 {
  folder_name: FolderName;
  name: Name2;
  memory_tier: MemoryTier;
}
