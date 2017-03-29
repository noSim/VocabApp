import Realm from 'realm';

const VocabSchema = {
   name: 'Vocab',
   primaryKey: 'word',
   properties: {
     word: 'string',
     trans: 'string',
     category: {type: 'string', default: 'none'},
     learnedCount: {type: 'int', default: 0},
   }
}

let realm = new Realm({schema: [VocabSchema]});

let VocabService = {
  getAll: function() {
    let vocabs = realm.objects('Vocab');
    let vocabFormated = []
    for (let i = 0; i < vocabs.length; i++)
    {
      vocabFormated.push(vocabs[i]);
    }
    return vocabFormated;
  },

  save: function(word, trans) {
    realm.write(() => {
       realm.create('Vocab', {word: word, trans: trans}, true);
    });
  },

  getCount: function() {
    return realm.objects('Vocab').length;
  },

  registerNotify: function(callback, self) {
    // Observe Collection Notifications
    realm.addListener('change', () => {
      callback(self);
    });
  },
}

module.exports = VocabService;
