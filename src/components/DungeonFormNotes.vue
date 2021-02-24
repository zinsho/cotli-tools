<template>
<div class="DungeonNotes">
  <div class="notes-title"><span>How/Why/Tips</span></div>
  <div class="notes">
    <ul>
      <li v-for="(note) in notes"
          :key="note.title"
          >
        <span class="item">{{ note.title }}</span><br />
        <ul class="text">
          <li v-for="(line, index) in note.text"
              :key="index" class="info">
            {{ line }}
          </li>
        </ul>
      </li>
      <li>
        <span class="item">Need more Help?</span><br />
        <ul class="text">
          <li class="info">
            Visit Discord <a href="https://discord.gg/JM3YAEW">https://discord.gg/JM3YAEW</a>
          </li>
        </ul>
      </li>
      <li>
        <span class="item">Form Sources</span><br />
        <ul class="text">
          <li class="info">
            Sources are stored in
            the <a href="https://github.com/zinsho/cotli-tools/">Github
            Repository</a>
            under <a href="https://github.com/zinsho/cotli-tools/tree/main/src/data">./src/data/</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'DungeonNotes',
  data() {
    return {
      notes: [
        {
          title: 'Gold Forms',
          text: [
            "Used for setting up before area 5",
            "Late game players may be able to skip these"
          ]
        },
        {
          title: 'Sprint/Shell',
          text: [
            'Kris should be swapped for Sashimi whenever progressing.',
            'Xyg or other can be dropped in over rabbit if more sprint DPS is required.',
            'Imani can be swapped with Oona after sprint phase.',
            'In forms without Imani put Oona in for Kris/Jiao/Kaine as needed.'
          ]
        },
        {
          title: 'Skelefarm',
          text: [
            'Already set up for Odile hippo farming and can also be used to setup a bite and premime for Unstable DPS.',
            "The seemingly random extra sader next to Vik is optional for an extra bite where propagation can't reach.",
            "Disable Langley's projectile, A79's projectile and explosions, and Alacrity's metamorphosis for optimal hippo farming.",
            'Precast GoR and Alchemy for Unsable DPS.',
            '"B" marks where to put Mindy to get a bite on her before moving to the premime for Unstable DPS forms.',
            '"P" marks the premime spot to put Mindy to set up Unstable DPS.'
          ]
        },
        {
          title: 'Stable Speed',
          text: [
            'Easier to use since after you farm it is set and forget with no prebites, premimes or shells needed.',
            'Gains DPS during progression instead of having to account for RR decay.',
            'Straight out of sprint will often go deeper than the first charge of an Unstable DPS + Shell.',
            'Gem is to guarantee resets and Euo for drop rate.  They can be dropped for stronger supports if you are ok with risk and speed loss.'
          ]
        },
        {
          title: 'Stable Speed - RoboRabbit',
          text: [
            'A modification on Stable Speed that leverages RoboRabbit to maintain stable DPS.',
            'Mindy is placed in a 3+ Mime position that will result in sub-optimal results throughout the run.'
          ]
        },
        {
          title: 'Unstable DPS',
          text: [
            'Requires less farm time than the Stable Speed for equal dps or can give much more with the same level of farm.',
            'Can be used to cap if the Stable Sppeed falls short without having to refarm/you are already maxxed on hippos.',
            'Needs prebite and premime in the skelefarm before loading and then uses the shell to progress.'
          ]
        },
        {
          title: 'ZeroDPS Farm',
          text: [
          ]
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "../assets/base16-solarized-light.styl"
.notes {
    text-align: left;
    background: $base00;
}

.notes-title {
    background: $base01;
}

.notes-title span {
    text-align: center;
    font-weight: bold;
    font-size: 1.75em;
    font-variant: small-caps;
    color: $base06;
}

.item {
    font-weight: semi-bold;
    font-variant: small-caps;
    font-size: 1.25em;
    color: $base06;
}
.item:after {
    content: " : "
}
.text {
    padding-top: 0.25em;
    padding-bottom: 1em;
    color: $base07;
}

.info {
    text-indent: 1em;
}

ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 0 10px;
}
a {
    color: $base0D;
}
a:visited {
    color: $base09;
}
</style>
