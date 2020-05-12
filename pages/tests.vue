<template>
  <div>
    <image-dialog thumb="https://via.placeholder.com/315x200" full="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/81809490807943.5e20b9190a4b2.jpg" :full-width="945" :full-height="600" />
  </div>
</template>

<script>
import ImageDialog from '../components/ImageDialog'

export default {
  components: {
    ImageDialog
  }
}

</script>

<style lang="scss" scoped>
@import '../sass/variables';

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  background-color: #a74242;
}

.card {
  margin: 50px auto;
  padding: 20px;
  width: 355px;
  background-color: #fff;
  box-shadow: 5px 5px 30px rgba(84, 29, 29, 0.4);

  &-title {
    color: #541d1d;
    font-size: 22px;
  }

  &-text {
    margin-top: 8px;
    line-height: 1.3;
  }

  &-image {
    margin-top: 10px;
  }
}

</style>
