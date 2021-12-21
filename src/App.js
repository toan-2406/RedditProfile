import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Edit from "./components/Edit/Edit";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MakePost from "./components/MakePost/MakePost";
import Post from "./components/MakePost/Post";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(false);

  //Lấy state pending and error trong redux
  const { pending, error } = useSelector(state => state.user);
  return (
    <div className="App">
      {isEdit ? (
        <Edit setIsEdit={setIsEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setIsEdit={setIsEdit} />
            <div className="post-container">
              <Post/>
          </div>
          <Footer IsOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      ) : (
        <>
          <Header setIsEdit={setIsEdit} />

          <MakePost setOpen={setOpen} />
          <Footer IsOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      )}

      {
        //Nếu pending = true thì hiển thị loading
        pending && <div className="loading">Loading...</div>
      }

      {
        //Nếu error = true thì hiển thị lỗi
        !isEdit && error && (
          <div className="error">Fetching data from data is error</div>
        )
      }
    </div>
  );
}

export default App;
