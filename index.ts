/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */

// IF YOU ADD THE RIGHT RETURN TYPE IT WILL NOT WORK
export function to<T>(promise: Promise<T>, errorExt?: object): Promise<[Error, null] | [null, T]> {
  return promise
    .then((data: T) => [null, data] as [null, T])
    .catch((err: Error) => {
      if (errorExt) {
        err = Object.assign(err, errorExt)
      }

      return [err, null] as [Error, null]
    })
}

export default to
