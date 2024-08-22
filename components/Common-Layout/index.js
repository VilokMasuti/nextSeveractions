"use client";

import UserState from "../../Context/index";

export default function CommonLayout({ children }) {
  return <UserState>{children}</UserState>
}
