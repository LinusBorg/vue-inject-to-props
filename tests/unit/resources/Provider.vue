<template>
  <div>
    <InjectProvider>
      <div slot-scope="{msg}">
        <span class="test-span">{{msg}}</span>
      </div>
    </InjectProvider>
  </div>
</template>
<script>
import { createInjectProvider } from '#lib/InjectProvider'
export default {
  name: 'TestProvider',
  props: {
    msg: String,
  },
  components: {
    InjectProvider: createInjectProvider('test'),
  },
  provide() {
    return {
      test: this.$props,
    }
  },
}
</script>
