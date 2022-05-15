<template>
  <h1>Welcome to The Forum</h1>
  <thread-list :threads="threads" />
</template>

<script>
import sourceData from '@/data.json';
import ThreadList from '@/components/ThreadList.vue';
export default {
  data() {
    return {
      threads: sourceData.threads,
    };
  },
  components: {
    ThreadList,
  },
};
</script>

<style scoped></style>
