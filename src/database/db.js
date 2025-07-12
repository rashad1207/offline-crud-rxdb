import { createRxDatabase, addRxPlugin } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { RxDBReplicationCouchDBPlugin } from 'rxdb/plugins/replication-couchdb';
import { getRxStoragePouch } from 'rxdb/plugins/pouchdb';
import pouchdbAdapterReactNativeSQLite from 'pouchdb-adapter-react-native-sqlite';
import PouchdbReplication from 'pouchdb-replication';



import 'react-native-get-random-values';
import { businessSchema } from '../schemas/businessSchema';
import { articleSchema } from '../schemas/articleSchema';

console.log('Loading RxDB plugins...');
addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBReplicationCouchDBPlugin);
addRxPlugin(require('pouchdb-adapter-http'));
addRxPlugin(require('pouchdb-adapter-react-native-sqlite'));
addRxPlugin(PouchdbReplication);

let dbInstance = null;

export const getDB = async () => {
  if (dbInstance) return dbInstance;

  console.log('Creating RxDB database...');
  dbInstance = await createRxDatabase({
    name: 'myappdb',
    storage: getRxStoragePouch('react-native-sqlite'),
    ignoreDuplicate: true,
    multiInstance: false
  });

  console.log('Adding collections...');
  await dbInstance.addCollections({
    businesses: { schema: businessSchema },
    articles: { schema: articleSchema }
  });

  console.log('Starting replication with CouchDB...');
  dbInstance.businesses.syncCouchDB({
    remote: 'http://admin:admin@10.0.2.2:5984/businesses',
    options: { live: true, retry: true }
  });

  dbInstance.articles.syncCouchDB({
    remote: 'http://admin:admin@10.0.2.2:5984/articles',
    options: { live: true, retry: true }
  });

  return dbInstance;
};
