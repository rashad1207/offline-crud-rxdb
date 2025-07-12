import { addRxPlugin } from 'rxdb';
import PouchdbAdapterSQLite from 'pouchdb-adapter-react-native-sqlite';
import PouchdbAdapterHttp from 'pouchdb-adapter-http';

import RxDBDevModePlugin from 'rxdb/plugins/dev-mode';
import RxDBValidatePlugin from 'rxdb/plugins/validate';
import RxDBUpdatePlugin from 'rxdb/plugins/update';
import RxDBQueryBuilderPlugin from 'rxdb/plugins/query-builder';
import RxDBReplicationCouchDBPlugin from 'rxdb/plugins/replication-couchdb';

import { enforceOptions } from 'broadcast-channel';
import * as PouchDB from 'pouchdb-browser';

export const setupRxDB = () => {
  console.log('✅ Loading RxDB plugins and adapters...');

  enforceOptions({ type: 'simulate' }); // fix for broadcast-channel on Hermes
  PouchDB.plugin(PouchdbAdapterSQLite);
  PouchDB.plugin(PouchdbAdapterHttp);

  addRxPlugin(RxDBDevModePlugin);
  addRxPlugin(RxDBValidatePlugin);
  addRxPlugin(RxDBUpdatePlugin);
  addRxPlugin(RxDBQueryBuilderPlugin);
  addRxPlugin(RxDBReplicationCouchDBPlugin);

  console.log('✅ RxDB plugins & adapters loaded');
};
