import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('JATE database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('JATE database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDB = await openDB('jate', 1);
  const tx = jate.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content});
  const result = await request;

  console.log('Data has been saved.', result);
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDB = await openDB('jate', 1);
  const tx = jate.transaction('jate', 'readonly'); //no longer readwrite
  const store = tx.objectStore('jate');
  const request = store.getAll(); //GET instead of PUT
  const result = await request;

  if (!result) {
    console.log('No Data Found.');
    return;
  }
  console.log('Data found', result);
};

initdb();
