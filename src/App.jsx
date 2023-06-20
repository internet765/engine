import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, setCurrentUser } from "./store/authSlice/extraReducers";
import { ProtectedRoute, PrivateRoute } from "./hoc";

import * as page from "./pages";
import * as section from "./pages/BookPage/sections";

export default function App() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("etf"));
  const { isAuth, currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) dispatch(checkAuth(token?.refreshToken));
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) dispatch(setCurrentUser());
  }, [isAuth]);

  return (
    <Routes>
      <Route path="/" element={<page.MainPage />} />
      <Route path="/*" element={<ProtectedRoute isAuth={isAuth || token} />}>
        <Route element={<page.AppLayout />}>
          <Route path="*" element={<page.NotFound />} />
          <Route path="users" element={<PrivateRoute permission={["admin"]} type={currentUser.type} Component={page.UsersPage} />} />
          <Route path="profile" element={<page.ProfilePage />} />
          <Route path="profile/change-email" element={<page.ChangeEmailPage />} />
          <Route path="books" element={<page.BooksPage />} />
          <Route element={<page.BookPageLayout />} >
            <Route path="books/:book_id/" element={<PrivateRoute permission={["admin", "author", "editor"]} type={currentUser.type} Component={section.PlotSection} />} />
            <Route path="books/:book_id/images" element={<PrivateRoute permission={["admin", "author", "editor"]} type={currentUser.type} Component={section.ImagesSection} />} />
            <Route path="books/:book_id/sounds" element={<PrivateRoute permission={["admin", "author", "editor"]} type={currentUser.type} Component={section.SoundsSection} />} />
            <Route path="books/:book_id/settings" element={<PrivateRoute permission={["admin"]} type={currentUser.type} Component={section.SettingsSection} />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}


