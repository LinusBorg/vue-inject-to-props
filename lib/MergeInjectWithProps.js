import { merge, pick, warn } from '#lib/utils'

export function mergeInjectWithProps(
  injection,
  computed = `${injection}Props`
) {
  if (
    !injection ||
    (typeof injection !== 'string' && typeof injection !== 'symbol')
  ) {
    warn(
      `Argument Error: 'injection has to be a String or Symbol, 
      but received ${injection}, which is type of ${typeof injection}'`,
      '[mergeInjectWithProps()]'
    )
  }
  return {
    inject: {
      [injection]: { default: {} },
    },
    computed: {
      [computed]: function() {
        const props = this.$props
        const pickedInjects = pick(this[injection], Object.keys(props))
        return merge(pickedInjects, props)
      },
    },
  }
}
