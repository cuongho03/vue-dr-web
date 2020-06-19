<template>
  <section class="new-collection w-100 cl-white" style="background-color:#1d354a">
    <div class="container w-100 title-section">
      <span style="font-size:40px">
        {{ title }}
      </span>
    </div>
  </section>
</template>
<script>

export default {
  data () {
    return {
    };
  },
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
  .new-collection {
    @media (max-width: 767px) {
      padding-top: 0;
    }
  }
  .title-section{

    padding-top: 30px;
    padding-bottom: 5px;
  }
</style>
