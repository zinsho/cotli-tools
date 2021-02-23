import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

import pios from '@/data/pios.json'
import ffa from '@/data/ffa.json'
import fg from '@/data/fg.json'
import uf from '@/data/uf.json'
import ss from '@/data/ss.json'
import dd from '@/data/dd.json'
import mw from '@/data/mw.json'
import jj from '@/data/jj.json'
import af from '@/data/af.json'
import dc from '@/data/dc.json'

export default createStore({
  plugins: [
    createPersistedState({
      paths: ['current']
    })
  ],
  state: {
    DungeonForm: [
      {
        name: "Playing It Old School",
        abbr: "PioS",
        id: 745,
        data: pios
      },
      {
        name: "Free For All",
        abbr: "FfA",
        id: 746,
        data: ffa
      },
      {
        name: "Fun And Games",
        abbr: "F&G",
        id: 747,
        data: fg
      },
      {
        name: "Under Fire",
        abbr: 'UF',
        id: 748,
        data: uf
      },
      {
        name: 'Sunday Stroll',
        abbr: 'SS',
        id: 749,
        data: ss
      },
      {
        name: 'Dark Dwellers',
        abbr: 'DD',
        id: 750,
        data: dd
      },
      {
        name: 'Making Waves',
        abbr: 'MW',
        id: 751,
        data: mw
      },
      {
        name: 'Jungle Journey',
        abbr: 'JJ',
        id: 752,
        data: jj
      },
      {
        name: 'Achieve Flight',
        abbr: 'AF',
        id: 753,
        data: af
      },
      {
        name: 'Dungeon Crawl',
        abbr: 'DC',
        id: 754,
        data: dc
      }
    ],
  },
  getters: {
    getFormById: (state) => (id) => {
      return state.DungeonForm.find(form => form.id == id)
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
