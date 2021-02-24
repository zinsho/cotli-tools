# Crusader of the Lost Idols Tools

[![Build
Status](https://travis-ci.com/zinsho/cotli-tools.svg?branch=main)](https://travis-ci.com/zinsho/cotli-tools)

Currently this only implements 1 tool:
  - Dungeon Forms
  
### Dungeon Forms

JavaScript based implementation of ryan92084's form Infographic.
Forms are defined within individual json files within the
`./src/data/` folder.

#### JSON Format

```json
{
  "notes": [ "<list of notes to give details about map>" ],
  "forms": [ <list of forms>
    {
      "name": "GoldForm | SkeleFarm | etc",
      "author": "<User who provided form>",
      "saders": [ < list of crusader IDs > ],
      "markers": [ 
        < optional list of markers to add for Premime/bite > 
      ]
    }
  ]
}
```

Crusader list mirrors the implementation that CotLI UserData leverages
including using `-1` for an empty slot (displayed as a red X).

Markers require both the formation slot (starting at 0) and the value
(character to display).

```json
"markers": [
  {
    "slot": 1,
    "value": "P"
  }
]
```

## Contributing

Pull requests are welcome.

- CSS (I am not a frontend Developer, I know there are
  likely improvements to be made)
- Updated or additional Forms added to the appropriate dungeon map in
  `./src/data/`
- Additional or cleaned up notes in
  `./src/components/DungeonFormNotes.vue`.  This will likely
  eventually be refactored into the `./src/data/` folder for
  consistency with map data.

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Lints and fixes files
```
yarn lint
```
