import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { DefaultLayout } from "../layouts/DefaultLayouts";
import { IssuesSingle } from "../pages/Home/components/IssuesSingle";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/issues/:id" element={<IssuesSingle />}/>
      </Route>
    </Routes>
  )
}