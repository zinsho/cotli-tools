<template>
<div class="cotli-dungeon-forms">
  <dungeonFormNotes />
  <dungeonFormList v-for="(dungeon) in dungeons"
                   v-bind:dungeon="dungeon"
                   v-bind:key="dungeon.abbr" />
</div>
</template>

<script>
// @ is an alias to /src
import dungeonFormNotes from '@/components/DungeonFormNotes.vue'
import dungeonFormList from '@/components/DungeonFormList.vue'

export default {
  name: 'cotli-dungeon-forms',
  components: {
    dungeonFormNotes,
    dungeonFormList
  },
  computed: {
    dungeons() {
      return this.$store.state.DungeonForm
    }
  }
}
</script>

<style lang="stylus">
  @import "../assets/base16-solarized-light.styl"

  body {
    background: $base02;
  }
</style>
