import { Project } from '../types';

const DB_NAME = 'PortfolioAppDB';
const DB_VERSION = 1;
const STORE_PROJECTS = 'projects';
const STORE_MEDIA = 'media_blobs';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_PROJECTS)) {
        db.createObjectStore(STORE_PROJECTS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_MEDIA)) {
        db.createObjectStore(STORE_MEDIA);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Save media Blob (video or image) to IndexedDB
export async function saveMediaBlob(id: string, fileOrBlob: Blob): Promise<string> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_MEDIA, 'readwrite');
    const store = tx.objectStore(STORE_MEDIA);
    const req = store.put(fileOrBlob, id);

    req.onsuccess = () => {
      resolve(id);
    };
    req.onerror = () => reject(req.error);
  });
}

// Get media Blob from IndexedDB and return an ObjectURL
export async function getMediaObjectURL(id: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_MEDIA, 'readonly');
      const store = tx.objectStore(STORE_MEDIA);
      const req = store.get(id);

      req.onsuccess = () => {
        const result = req.result as Blob | undefined;
        if (result && result instanceof Blob) {
          resolve(URL.createObjectURL(result));
        } else {
          resolve(null);
        }
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to get media object URL:', err);
    return null;
  }
}

// Save all custom user projects list to IndexedDB
export async function saveUserProjects(projects: Project[]): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_PROJECTS, 'readwrite');
    const store = tx.objectStore(STORE_PROJECTS);
    store.clear();
    projects.forEach((proj) => {
      store.put(proj);
    });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Load custom user projects list from IndexedDB
export async function loadUserProjects(): Promise<Project[]> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_PROJECTS, 'readonly');
      const store = tx.objectStore(STORE_PROJECTS);
      const req = store.getAll();

      req.onsuccess = async () => {
        const rawProjects = (req.result as Project[]) || [];
        // Re-hydrate any media blob URLs
        const hydrated = await Promise.all(
          rawProjects.map(async (p) => {
            let videoUrl = p.videoUrl;
            let coverImage = p.coverImage;

            if (p.videoBlobKey) {
              const url = await getMediaObjectURL(p.videoBlobKey);
              if (url) videoUrl = url;
            }
            if (p.coverBlobKey) {
              const url = await getMediaObjectURL(p.coverBlobKey);
              if (url) coverImage = url;
            }

            return { ...p, videoUrl, coverImage };
          })
        );
        resolve(hydrated);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to load projects from IndexedDB:', err);
    return [];
  }
}
