<template>
  <p class="c-output">$<slot /></p>
</template>

<script>
export default {
  name: 'OutputNumber',
}
</script>

<style lang="scss" scoped>
.c-output {
  color: var(--strong-cyan);
  font-size: 2em;
  font-weight: bolder;
  margin: 0;
  text-align: right;
}
</style>