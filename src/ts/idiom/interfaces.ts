export type AddBundleCallback = () => void | Promise<void>;
//-------------------------------------
export interface IIdiom {
  //-------------------------------------
  /** Get the translation of a given key.
   * @param params (optional) map of key/value variables.
   * @return the key itself when no translation exists.
   */
  translate(key: string, params?: { [param: string]: any }): string;
  /** Load a language bundle then return a Promise. */
  addBundlePromise(currentLanguage: string, path: string): Promise<void>;
  /** Load a language bundle then call an optional callback. */
  addBundle(
    currentLanguage: string,
    path: string,
    callback?: AddBundleCallback,
  ): void;
  /** Load the JSON language file from a given folder, using the current user's language, then call an optional callback. */
  addTranslations(folder: string, callback?: AddBundleCallback): void;
  /** Load the JSON language files from many given folders, using the current user's language, then return a Promise. */
  addAllTranslations(folders: string[]): Promise<void>;
  /** Add new key/values translations to the in-memory dictionary, using a key/value map. Existing in-memory keys ARE NOT REPLACED. Only new ones are added. */
  addKeys(keys: any): void;
  /** @return a new string without accentuation. */
  removeAccents(str: string): string;
}
