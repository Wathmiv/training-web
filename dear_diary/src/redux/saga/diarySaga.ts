import {put, take,takeLatest,call,fork} from "redux-saga/effects"
import { eventChannel } from 'redux-saga';
import {diaryRef} from "../../utility/firebase"
import { addDoc , query,where} from "firebase/firestore";
import { onSnapshot ,QueryDocumentSnapshot} from "firebase/firestore";
import { addEntry, getDiary, getEntry } from "../slices/diaryReducer";

function* addDiarySaga(action: any) {
  try{
    const { title, description,user} = action.payload;
    yield addDoc(diaryRef, { title, description, user });
  }
  catch(error: any){
    console.error('An error occurred:', error.message);
  }
}

function createEventChannel(name: string) {
    const q = query(diaryRef, where('user', '==', name));
    return eventChannel(emitter => {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const entries = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
          const { title, description, user } = doc.data();
          return { title, description, user };
        });
        emitter(entries);
      });
      return () => unsubscribe();
    });
  }
  
  function* watchDiaryEntries(name: string):Generator<any, void, any>  {
    try{
      const channel = yield call(createEventChannel, name);
      while (true) {
        const entries = yield take(channel);
        yield put(getDiary(entries));
      }
    }
    catch(error: any){
      console.error('An error occurred:', error.message);
    }
  }
  
  function* getDiarySaga(action: any): Generator<any, void, any> {
    yield fork(watchDiaryEntries, action.payload);
  }

export function* diarySaga() {
    yield takeLatest(addEntry, addDiarySaga);
    yield takeLatest(getEntry, getDiarySaga);
}