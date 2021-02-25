import { db } from "../config/firebase";
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";

const dataContext = createContext({ exams: null });

const { Provider } = dataContext;

export function DataProvider(props: { children: ReactNode }): JSX.Element {
  const data = useDataProvider();
  return <Provider value={data}>{props.children}</Provider>;
}
export const useData: any = () => {
  return useContext(dataContext);
};

// Provider hook that creates an auth object and handles it's state
const useDataProvider = () => {
  const optionsList: Array<any> = [];
  const [exams, setExams]: any = useState(null);

  const getExams = async () => {
    try {
      const data = await db.collection("exams").get();
      data.docs.forEach(async (entry) => {
        let id = entry.id;
        const docRef = db.collection("exams").doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
          console.log("No Document!");
        } else {
          //console.log("Document data:", doc.data());
          let composed = {
            id: id,
            data: doc.data(),
          };
          optionsList.push(composed);
          setExams([...optionsList]);
          //return res;
        }
      });
      return exams;
    } catch (error) {
      return { error };
    }
  };

  // const handleDataStateChanged = (data: any) => {
  //   setExams(data);
  // };

  useEffect(() => {
    // const unsub = exams.onDataStateChanged(handleDataStateChanged);
    // return () => unsub();
  }, []);

  return {
    exams,
    getExams,
  };
};


