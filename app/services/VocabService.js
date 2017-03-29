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
