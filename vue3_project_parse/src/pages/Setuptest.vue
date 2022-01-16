
<template>
    <div>
        这是Setuptest页面
    </div>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props) {
      console.log('Setuptest---setup',props)
      return {props}
  },
  mounted() {
    console.log('Setuptest---mounted')
  },
};
</script>
