<template>
  <div>
    test page
    <model-obj
      height="1000"
      width="1000"
      :src="expo2[0].src"
    />
  </div>
</template>
<script>
import expo2 from '../assets/expo2.js'

export default {
  data () {
    return {
      expo2
    }
  }
}
</script>
