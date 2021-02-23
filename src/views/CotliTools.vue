<template>
<div class="cotli-tools">
  <dungeonFormNotes />
  <dungeonFormList v-for="(dungeon) in dungeonList" v-bind:dungeonID="dungeon" :key="dungeon" />
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'cotli-tools',
  components: {
  }
}
</script>
