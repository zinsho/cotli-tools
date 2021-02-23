<template>
<div class="DungeonFormView">
  <div class="title">
    <span id="title">
      {{ formData.name }}
    </span>
    <span class="author">{{ formData.author }}</span>
  </div>
  <div class="picture">
    <div v-for="(item, index) in formData.saders"
         v-bind:id="cssID+index"
         class="crusader_portrait"
         v-bind:key="item"
         >
      <img v-bind:src="getPicture(item)" class="crusader_img">
    </div>
    <div v-for="(marker) in formData.markers"
         :id="cssID+marker.slot"
         :key="marker.value"
         class="marker_overlay"
         >
      <span v-bind:class="'color_'+marker.value">{{ marker.value }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DungeonFormView',
  props: [
    'formData',
    'dungeonID'
  ],
  computed: {
    cssID () {
      return 'form_' + this.dungeonID + '_'
    }
  },
  methods: {
    overlayStyle(text) {
      if (text === 'P') {
        return '#1EC0CCCC'
      } else if (text === 'B') {
        return '#F72E46CC'
      } else {
        return '#4DF72ECC'
      }
    },
    getPicture(id) {
      return require('../assets/id_' + id + '.png')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../assets/base16-solarized-light.styl"
/* Column align */
c1 = 2px
c2 = 54px
c3 = 106px
c4 = 158px
c5 = 210px
c6 = 262px

/* Row align */
r10 = 2px
r15 = 27px
r20 = 54px
r25 = 79px
r30 = 106px
r35 = 131px
r40 = 158px
r45 = 183px

.title
{
    width: 316px;
    height: 30px;
    position: relative;
    background: $base06;
}

#title {
    font-size: 1.25em;
    font-weight: bold;
    color: $base02;
}

.picture
{
    background-color: $base00;
    padding: 5px;
    height: 225px;
    position: relative;
}

.author:before {
    content: "Author: ";
    color: $base00;
}
.author
{
    bottom: 0px;
    right: 2px;
    position: absolute;
    font-size: 0.75em;
    color: $base01;
}

.crusader_img
{
    height: 48px;
    width: 48px;
    margin: 1px;
}

.crusader_portrait
{
    display: inline-block;
    height: 50px;
    width: 50px;
    position: absolute;
}

.marker_overlay {
    position: absolute;
    height: 20px;
    width: 20px;
    font-size: 1.25em;
    text-align: center;
    background-color: $base06;
    opacity: 0.8;
    color: $base0B;
}

.marker_overlay > .color_P {
    color: $base0D;
}

.marker_overlay > .color_B {
    color: $base08;
}

/* Playing it Old School */
#form_745_0
{
    top: r15;
    right: c1;
}

#form_745_1
{
    top: r25;
    right: c1;
}

#form_745_2
{
    top: r10;
    right: c2;
}

#form_745_3
{
    top: r20;
    right: c2;
}

#form_745_4
{
    top: r30;
    right: c2;
}

#form_745_5
{
    top: r15;
    right: c3;
}

#form_745_6
{
    top: r25;
    right: c3;
}

#form_745_7
{
    top: r20;
    right: c4;
}

#form_745_8
{
    top: r30;
    right: c4;
}

#form_745_9
{
    top: r15;
    right: c5;
}

#form_745_10
{
    top: r25;
    right: c5;
}

#form_745_11
{
    top: r35;
    right: c5;
}

#form_745_12
{
    top: r20;
    right: c6;
}

#form_745_13
{
    top: r30;
    right: c6;
}

/* Free For All */

#form_746_0
{
    top: r15;
    right: c1;
}

#form_746_1
{
    top: r35;
    right: c1;
}

#form_746_2
{
    top: r10;
    right: c2;
}

#form_746_3
{
    top: r20;
    right: c2;
}

#form_746_4
{
    top: r30;
    right: c2;
}

#form_746_5
{
    top: r40;
    right: c2;
}

#form_746_6
{
    top: r15;
    right: c3;
}

#form_746_7
{
    top: r35;
    right: c3;
}

#form_746_8
{
    top: r10;
    right: c4;
}

#form_746_9
{
    top: r20;
    right: c4;
}

#form_746_10
{
    top: r30;
    right: c4;
}

#form_746_11
{
    top: r40;
    right: c4;
}

#form_746_12
{
    top: r15;
    right: c5;
}

#form_746_13
{
    top: r35;
    right: c5;
}

/* Fun and Games */
#form_747_0
{
    top: r25;
    right: c1;
}

#form_747_1
{
    top: r35;
    right: c1;
}

#form_747_2
{
    top: r10;
    right: c2;
}

#form_747_3
{
    top: r20;
    right: c2;
}

#form_747_4
{
    top: r30;
    right: c2;
}

#form_747_5
{
    top: r40;
    right: c2;
}

#form_747_6
{
    top: r25;
    right: c3;
}

#form_747_7
{
    top: r35;
    right: c3;
}

#form_747_8
{
    top: r10;
    right: c4;
}

#form_747_9
{
    top: r20;
    right: c4;
}

#form_747_10
{
    top: r30;
    right: c4;
}

#form_747_11
{
    top: r40;
    right: c4;
}

#form_747_12
{
    top: r35;
    right: c5;
}

/* Under Fire */
#form_748_0 {
    right: c1;
    top: r15;
}

#form_748_1 {
    right: c1;
    top: r25;
}

#form_748_2 {
    right: c1;
    top: r35;
}

#form_748_3 {
    right: c2;
    top: r10;
}

#form_748_4 {
    right: c2;
    top: r20;
}

#form_748_5 {
    right: c2;
    top: r30;
}

#form_748_6 {
    right: c3;
    top: r15;
}

#form_748_7 {
    right: c3;
    top: r25;
}

#form_748_8 {
    right: c4;
    top: r10;
}

#form_748_9 {
    right: c4;
    top: r20;
}

#form_748_10 {
    right: c4;
    top: r30;
}

#form_748_11 {
    right: c5;
    top: r15;
}

#form_748_12 {
    right: c5;
    top: r25;
}

#form_748_13 {
    right: c5;
    top: r35;
}

/* Sunday Stroll */
#form_749_0 {
    right: c1;
    top: r10;
}

#form_749_1 {
    right: c1;
    top: r20;
}

#form_749_2 {
    right: c1;
    top: r30;
}

#form_749_3 {
    right: c1;
    top: r40;
}

#form_749_4 {
    right: c2;
    top: r25;
}

#form_749_5 {
    right: c2;
    top: r35;
}

#form_749_6 {
    right: c3;
    top: r30;
}

#form_749_7 {
    right: c3;
    top: r40;
}

#form_749_8 {
    right: c4;
    top: r25;
}

#form_749_9 {
    right: c4;
    top: r35;
}

#form_749_10 {
    right: c5;
    top: r10;
}

#form_749_11 {
    right: c5;
    top: r20;
}

#form_749_12 {
    right: c5;
    top: r30;
}
#form_749_13 {
    right: c5;
    top: r40;
}

/* Dark Dwellers */
#form_750_0 {
    right: c1;
    top: r10;
}

#form_750_1 {
    right: c1;
    top: r20;
}

#form_750_2 {
    right: c1;
    top: r30;
}

#form_750_3 {
    right c2
    top r15
}

#form_750_4 {
    right c2
    top r35
}

#form_750_5 {
    right c3
    top r10
}

#form_750_6 {
    right c3
    top r20
}

#form_750_7 {
  right c3
  top r30
}

#form_750_8 {
    right c3
    top r40
}

#form_750_9 {
    right c4
    top r25
}

#form_750_10 {
    right c4
    top r35
}

#form_750_11 {
    right c5
    top r20
}

#form_750_12 {
    right c5
    top r30
}

#form_750_13 {
    right c5
    top r40
}

/* Making Waves */

#form_751_0 {
    right c1
    top r10
}

#form_751_1 {
    right c1
    top r20
}

#form_751_2 {
    right c1
    top r30
}

#form_751_3 {
    right c2
    top r25
}

#form_751_4 {
    right c2
    top r35
}

#form_751_5 {
    right c3
    top r30
}

#form_751_6 {
    right c4
    top r25
}

#form_751_7 {
    right c4
    top r35
}

#form_751_8 {
    right c4
    top r45
}

#form_751_9 {
    right c5
    top r20
}

#form_751_10 {
    right c5
    top r30
}

#form_751_11 {
    right c5
    top r40
}

#form_751_12 {
    right c6
    top r15
}

#form_751_13 {
    right c6
    top r25
}

#form_751_14 {
    right c6
    top r35
}

/* Jungle Journey */
#form_752_0 {
    right c1
    top r20
}

#form_752_1 {
    right c1
    top r30
}

#form_752_2 {
    right c2
    top r15
}

#form_752_3 {
    right c2
    top r25
}

#form_752_4 {
    right c3
    top r10
}

#form_752_5 {
    right c3
    top r20
}

#form_752_6 {
    right c3
    top r30
}

#form_752_7 {
    right c3
    top r40
}

#form_752_8 {
    right c4
    top r15
}

#form_752_9 {
    right c4
    top r25
}

#form_752_10 {
    right c4
    top r35
}

#form_752_11 {
    right c5
    top r10
}

#form_752_12 {
    right c5
    top r20
}

#form_752_13 {
    right c5
    top r30
}

#form_752_14 {
    right c5
    top r40
}

/* Achieve Flight */
#form_753_0 {
    right c1
    top r25
}

#form_753_1 {
    right c1
    top r35
}

#form_753_2 {
    right c2
    top r10
}

#form_753_3 {
    right c2
    top r20
}

#form_753_4 {
    right c2
    top r40
}

#form_753_5 {
    right c3
    top r15
}

#form_753_6 {
    right c3
    top r25
}

#form_753_7 {
    right c3
    top r35
}

#form_753_8 {
    right c3
    top r45
}

#form_753_9 {
    right c4
    top r10
}

#form_753_10 {
    right c4
    top r20
}

#form_753_11 {
    right c4
    top r40
}

#form_753_12 {
    right c5
    top r25
}

#form_753_13 {
    right c5
    top r35
}

/* Dungeon Crawl */
#form_754_0 {
    right c1
    top r20
}

#form_754_1 {
    right c1
    top r30
}

#form_754_2 {
    right c1
    top r40
}

#form_754_3 {
    right c2
    top r25
}

#form_754_4 {
    right c2
    top r35
}

#form_754_5 {
    right c3
    top r10
}

#form_754_6 {
    right c3
    top r20
}

#form_754_7 {
    right c3
    top r30
}

#form_754_8 {
    right c3
    top r40
}

#form_754_9 {
    right c4
    top r25
}

#form_754_10 {
    right c4
    top r35
}

#form_754_11 {
    right c5
    top r10
}

#form_754_12 {
    right c5
    top r20
}

#form_754_13 {
    right c5
    top r30
}
</style>
