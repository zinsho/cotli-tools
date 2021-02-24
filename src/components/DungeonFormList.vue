<template>

<div class="dungeonformlist">
  <div class="dungeon-title">
    <span>{{ dungeon.name }} ( {{ dungeon.abbr }} )</span>
  </div>
  <div class="dungeon-grid">
    <div class="grid-title" v-if="dungeon.data.notes">
      <div class="title dungeon-form">Notes:</div>
      <div class="form-notes">
        <ul>
          <li v-for="(note, index) in dungeon.data.notes"
              :key="index"
              class="form-note"
              >
            {{ note }}
          </li>
        </ul>
      </div>
    </div>
    <dungeonformview
      v-for="(form) in dungeon.data.forms"
      :key="form.name"
      v-bind:dungeonID="dungeon.id"
      v-bind:formData="form"
      class="dungeon-form"
      />
  </div>
</div>
</template>

<script>
import dungeonformview from '@/components/DungeonFormView.vue'
export default {
  name: 'DungeonFormList',
  components: {
    dungeonformview
  },
  props: ['dungeon'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../assets/base16-solarized-light.styl"

.title {
    width: 316px;
    height: 30px;
    position: relative;
    background: $base06;
    color: $base02;
    font-weight: bold;
    font-size: 1.25em;
}
.dungeonformlist {
    background: $base06;
}

.dungeon-grid {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    border: 2px $base02 solid;
    grid-template-columns: 316px 316px 316px 316px 316px;
    background: $base06;
}

.grid-title {
    grid-column: 1;
    background: $base01;
}

.dungeon-form {
    width: 100%;
}

ul {
    list-style-type: none;
}

.dungeon-title {
    font-weight: bold;
    font-variant: small-caps;
    font-size: 1.25em;
    color: $base01;
    background: $base07;
    height: 30px;
    width: 100%;
}

.dungeon-title span {
    vertical-align: middle;
}

.form-notes {
    text-align: left;
    padding: 0.25em;
    color: $base07;
}
.form-note-title {
    font-weight: bold;
    font-variant: small-caps;
    font-size: 1em;
    text-align: left;
    color: $base06;
}

.form-note {
    padding-bottom: 1em;
    text-align: left;
}
</style>
