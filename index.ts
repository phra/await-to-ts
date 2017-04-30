/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T>(promise: Promise<T>, errorExt?: object): Promise<[Error, T]> {
  return promise
    .then((data: T) => [null as any, data])
    .catch((err: Error) => {
      if (errorExt) {
        err = Object.assign(err, errorExt)
      }

      return [err, null as any]
    })
}

export default to
